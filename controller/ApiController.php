<?php
/**
 * Created by PhpStorm.
 * User: ПК
 * Date: 26.06.2019
 * Time: 6:36
 */

namespace controller;


use config\DbConfig;
use models\db\DbRepository;
use mvc\controller\BaseController;
//use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

class ApiController extends \mvc\controller\ApiController
{
    private function getContent($path, $models = null){
        ob_start();
        if(!empty($models)){
            extract($models);
        }
        require_once($path);
        $contents = ob_get_contents();
        ob_end_clean();
        $json = [
            'html' => $contents
        ];
        $this->json($json);
    }

    public function home(){
        $frontSlider = DbRepository::getDb()->getFrontSlider();
        $learnMore = DbRepository::getDb()->getLearnMore();
        $about = DbRepository::getDb()->getAbout();

        $this->getContent('views/default/index.php', ['frontSlider' => $frontSlider, 'learnMore' => $learnMore, 'about' => $about]);
    }

    public function portfolio(){
        $projects = DbRepository::getDb()->getProjects();
        $this->getContent('views/portfolio/index.php', ['projects' => $projects]);
    }

    public function project($id){
        $project = DbRepository::getDb()->getProjectById($id);
        $this->getContent('views/portfolio/project.php', ['project' => $project]);
    }

    public function uslugi(){
        $services = DbRepository::getDb()->getServices();
        $this->getContent('views/uslugi/index.php', ['services' => $services]);
    }

    public function service($alias){
        $service = DbRepository::getDb()->getServiceByAlias($alias);
        $this->getContent('views/uslugi/view.php', ['oneServiceModel' => $service]);
    }

    public function contact(){
        $contact = DbRepository::getDb()->getContact();
        $this->getContent('views/contact/index.php', ['contact'=>$contact]);
    }

    public function sendform(){
        $mail = new PHPMailer(true);

        $json = ['success' => true];

        $name = "";
        $phone = "";
        $comment = "";

        if(!isset($_REQUEST['name']) || empty(($_REQUEST['name']))){

            $json['success'] = false;
            $json['errorName'] = "Введите, пожалуйста, Ваше имя";
        }else{
            $name = $_REQUEST['name'];
        }

        if(!isset($_REQUEST['phone']) || empty(($_REQUEST['phone']))){

            $json['success'] = false;
            $json['errorPhone'] = "Номер телефона введен неверно";
        }else{
            if(!preg_match("/^(\+38)?( )?0((-| )?\d{2}(-| )?\d{3}(-| )?\d{2}(-| )?\d{2}|(-| )?\d{2}(-| )?\d{2}(-| )?\d{2}(-| )?\d{3})$/", $_REQUEST['phone'])){
                $json['success'] = false;
                $json['errorPhone'] = "Номер телефона введен неверно";
            }
            else{
                $phone = $_REQUEST['phone'];
            }
        }

        if(!isset($_REQUEST['comment']) || empty(($_REQUEST['comment']))){
            $json['success'] = false;
            $json['errorComment'] = "Введите, пожалуйста, комментарий";
        }else{
            $comment = $_REQUEST['comment'];
        }

        if($json['success']) {
            try {
                $config = DbConfig::getConfig();
                //Server settings
                //$mail->setLanguage('ru', 'vendor/phpmailer/phpmailer/language/'); // Перевод на русский язык

                //Enable SMTP debugging
                // 0 = off (for production use)
                // 1 = client messages
                // 2 = client and server messages
                //$mail->SMTPDebug = 1;                                 // Enable verbose debug output

                $mail->isSMTP();                                      // Set mailer to use SMTP
                $mail->CharSet = "UTF-8";

                $mail->SMTPAuth = true;                               // Enable SMTP authentication

                //$mail->SMTPSecure = 'ssl';                          // secure transfer enabled REQUIRED for Gmail
                //$mail->Port = 465;                                  // TCP port to connect to
                $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
                $mail->Port = 587;                                    // TCP port to connect to

                $mail->Host = 'smtp.gmail.com';                       // Specify main and backup SMTP servers
                $mail->Username = $config['mailer']['email'];               // SMTP username
                $mail->Password = $config['mailer']['pass'];                         // SMTP password

                //Recipients
                $mail->setFrom($config['mailer']['email']);
                $mail->addAddress($config['mailer']['email']);

                //Content
                $mail->isHTML(true);                                  // Set email format to HTML
                $mail->Subject = 'Обратная связь';
                $html = "
                    <table>
                        <tr>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <td><strong>Имя</strong></td>
                            <td style='text-align: center'>$name</td>
                        </tr>
                        <tr>
                            <td><strong>Телефон</strong></td>
                            <td style='text-align: center'>$phone</td>
                        </tr>
                        <tr>
                            <td><strong>Комментарий</strong></td>
                            <td style='text-align: center'>$comment</td>
                        </tr>
                    </table>
                ";
                $mail->Body = $html;
                $mail->AltBody = "Имя: $name, Телефон: $phone, Комментарий: $comment";

                $mail->send();
                /*$mail = new PHPMailer(); // create a new object
                $mail->IsSMTP(); // enable SMTP
                $mail->SMTPDebug = 1; // debugging: 1 = errors and messages, 2 = messages only
                $mail->SMTPAuth = true; // authentication enabled
                $mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for Gmail
                $mail->Host = "smtp.gmail.com";
                $mail->Port = 587; // or 587
                $mail->IsHTML(true);
                $mail->Username = $config['mailer']['email'];
                $mail->Password = $config['mailer']['pass'];
                $mail->SetFrom($config['mailer']['email']);
                $mail->Subject = "Обратная связь";
                $mail->Body = "Имя: $name, Телефон: $phone, Комментарий: $comment";
                $mail->AddAddress($config['mailer']['email']);
                $mail->send();*/
            } catch (\Exception $e) {

                //echo 'Mailer Error: ' . $mail->ErrorInfo;
                $json['success'] = false;
                $json['msgError'] = $mail->ErrorInfo;
            }
        }
        $this->json($json);
    }
}