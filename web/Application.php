<?php
/**
 * Created by PhpStorm.
 * User: shaptala
 * Date: 20.06.2018
 * Time: 17:19
 */

$sep = DIRECTORY_SEPARATOR;

spl_autoload_register(function($cls) {

    if(DIRECTORY_SEPARATOR == "/"){

        $cls = str_replace("\\", DIRECTORY_SEPARATOR, $cls);
    }
    if(file_exists("$cls.php")) {
        require_once "$cls.php";
    }
});
//echo 'vendor'.$sep.'phpmailer'.$sep.'autoload.php';
if(file_exists('vendor'.$sep.'autoload.php')){

    require_once 'vendor'.$sep.'autoload.php';
}

class Application
{
    private $controllerName = 'Default';
    private $controller = "Default";
    private $actionName = 'index';
    private $id = null;

    function __construct()
    {
        if(isset($_GET['controller'])) {
            $this->controllerName = $_GET['controller'];
            $this->controller = $_GET['controller'];
        }
        if(empty($this->controllerName)) {
            $this->controllerName = "Default";
            $this->controller = "Default";
        }
        if(stristr($this->controllerName, "controller") === FALSE) {
            $this->controllerName .= "Controller";
        }

        if(isset($_GET['action'])) {
            $this->actionName = strtolower($_GET['action']);
        }
        if(empty($this->actionName)) {
            $this->actionName = "index";
        }

        if(isset($_GET['id'])) {
            $this->id = $_GET['id'];
        }
    }

    public static function getUrl($controller, $action = null, $id = null,  $queryParams = null){
        $url = BASE_URL . "$controller";
        $url .= isset($action) && !empty($action) ? "/$action/" : "";
        $url .= isset($id) && !empty($id) ? "$id" : "";
        if(isset($queryParams) && !empty($queryParams) &&  is_array($queryParams) && count($queryParams) > 0){
            $isFirst = false;
            foreach ($queryParams as $key => $value){
                $url .= !$isFirst ? "?$key=$value" : "&$key=$value";
                $isFirst = true;
            }

        }
        /*$url = BASE_URL . "?controller=$controller";
        $url .= isset($action) && !empty($action) ? "&action=$action" : "";
        $url .= isset($id) && !empty($id) ? "&id=$id" : "";*/
        return $url;
    }

    public static function redirect($url){
        header('Location: ' . BASE_URL . $url);
    }

    function run() {
        $this->controllerName = "controller\\".ucfirst($this->controllerName);
        if(class_exists($this->controllerName)) {
            $controller = new $this->controllerName($this->controller);
            if (in_array($this->actionName, get_class_methods($this->controllerName))) {
                $confirm = true;
                $authorizeActions = $controller->authorizedActions();
                if(key_exists("success", $authorizeActions)) {
                    foreach ($authorizeActions['success'] as $value) {
                        $confirm = strtolower($value) == $this->actionName || $controller->successAuthorize();
                        if($confirm)
                            break;
                    }
                }

                if($confirm) {
                    $controller->{$this->actionName}($this->id);
                }
                else {
                    Application::redirect($this->controller."/".$authorizeActions['loginPage']);
                }
            }
            else {
                $controller = new \controller\DefaultController('default');
                $controller->error();
            }
        } else {
            $controller = new \controller\DefaultController('default');
            $controller->error();
        }
    }
}