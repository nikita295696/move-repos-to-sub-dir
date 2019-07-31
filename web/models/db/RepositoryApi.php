<?php
/**
 * Created by PhpStorm.
 * User: nikita2956
 * Date: 7/24/19
 * Time: 11:58 AM
 */

namespace models\db;


use config\DbConfig;
use DOMDocument;
use models\Image;
use models\Project;
use models\Service;

class RepositoryApi implements IDb
{

    private static function getResult($url){
        if(isset($url) && !empty($url)) {
            /*$ch = curl_init($url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch,CURLOPT_SSL_VERIFYPEER, false);
            $result = curl_exec($ch);
            curl_close($ch);*/

            $result = file_get_contents($url);

            return isset($result) && !empty($result) ? json_decode($result) : null;
        }
        return null;
    }

    public function getProjectById($id)
    {
        $returnValue = null;
        $projects = $this->getProjects();
        foreach ($projects as $project){
            if($project->getId() == $id){
                $url = DbConfig::getConfig()["baseUrlApi"];
                $url .= "/projects" . $project->getAlias() . "?_format=json";

                $apiProject = self::getResult($url);
                if(isset($apiProject) && $apiProject){
                    $title = strip_tags($apiProject->title[0]->value);

                    $description = $apiProject->body[0]->value;

                    $fieldImage = $apiProject->field_image[0];
                    $baseImage = new Image($fieldImage->url, $fieldImage->alt);

                    $sliderImages = [];
                    if(isset($apiProject->field_photo) && is_array($apiProject->field_photo)) {
                        foreach ($apiProject->field_photo as $photo){
                            $sliderImages[] = new Image($photo->url, $photo->alt);
                        }
                    }

                    //$id, $title, $description, $baseImage, $images, $alias = "", $isLeft = true
                    $returnValue = new Project($id, $title, $description, $baseImage, $sliderImages, $project->getAlias(), $project->isLeft());
                }

                break;
            }
        }
        return $returnValue;
    }

    private function getAttribute($html, $tagName, $attrName){
        $doc = new DOMDocument('1.0', 'UTF-8' );
        $d = $doc->loadHtml("<head><meta http-equiv=\"content-type\" content=\"text/html; charset=utf-8\"></head><body>".$html . "</body>");
        $a = $doc->getElementsByTagName($tagName)->item(0);
        return $a->getAttribute($attrName);
    }

    /**
     * @return Project[]
     */
    public function getProjects()
    {
        $url = DbConfig::getLinks()['projects'];
        $projects = self::getResult($url);
        $returnValue = [];
        if(isset($projects) && is_array($projects)){

            $isLeft = true;
            $id = 1;
            foreach ($projects as $project){

                try {
                    $json_field_image = isset($project->field_image) ? $project->field_image : "";
                    $json_title = isset($project->title) ? $project->title : "";

                    $alias = $this->getAttribute($json_title, "a", "href");
                    $lastPos = strripos($alias, "/");
                    $alias = substr($alias, $lastPos);

                    $title = strip_tags($this->getAttribute($json_field_image, "img", 'title'));

                    $src = $this->getAttribute($json_field_image, "img", 'src');
                    $width = (int) $this->getAttribute($json_field_image, "img", 'width');

                    $alt = $this->getAttribute($json_field_image, "img", 'alt');

                    $image = new Image($src, $alt);

                    $returnValue[] = new Project($id, $title, "", $image, [], $alias, $isLeft);

                    //$id, $title, $description, $baseImage, $images, $alias = "", $isLeft = true
                    //$isLeft = $width >= 812 ? true : false;
                    $isLeft = !$isLeft;
                    $id++;
                }catch (\Exception $exception){

                }
            }
        }
        return $returnValue;
    }

    /**
     * @return Service[]
     */
    public function getServices()
    {
        $url = DbConfig::getLinks()['services'];
        $services = self::getResult($url);
        $returnValue = [];

        if(isset($services) && is_array($services)){
            $id = 1;
            foreach ($services as $service){

                $title = $service->title[0]->value;

                $alias = $service->path[0]->alias;
                $lastPos = strripos($alias, "/");
                $alias = substr($alias, $lastPos+1);

                $description = $service->body[0]->value;
                $price = $service->field_cost[0]->value;
                $idSvg = $service->nid[0]->value;

                //$fieldImage = $service->field_image[0];
                //$baseImage = new Image(PUBLIC_URL.'site/img/svg/ico_design_pr.svg');
                $baseImage = new Image(DbConfig::getConfig()['baseUrlApi']."/sites/default/files/services/svg/$idSvg.svg");

                $sliderImages = [];
                if(isset($service->field_photo) && is_array($service->field_photo)) {
                    foreach ($service->field_photo as $photo){
                        $sliderImages[] = new Image($photo->url, $photo->alt);
                    }
                }

                //$id, $title, $alias, $description, $price, $baseImage, $allImages, $isImage = true
                $returnValue[] = new Service($id, $title, $alias, $description, $price, $baseImage, $sliderImages, true);

                $id++;
            }
        }

        return $returnValue;
    }

    /**
     * @param $id
     * @return Service|null
     */
    public function getServiceById($id)
    {
        $returnValue = null;
        $services = $this->getServices();
        foreach ($services as $service){
            if($service->getId() == $id){
                $returnValue = $service;
                break;
            }
        }
        return $returnValue;
    }

    /**
     * @param $alias
     * @return Service|null
     */
    public function getServiceByAlias($alias)
    {
        $returnValue = null;
        $services = $this->getServices();
        foreach ($services as $service){
            if($service->getAlias() == $alias){
                $returnValue = $service;
                break;
            }
        }
        return $returnValue;
    }

    /**
     * @return Image[]
     */
    public function getFrontSlider()
    {
        //field_photo
        $url = DbConfig::getLinks()['frontSlider'];

        $frontSlider = self::getResult($url);
        $returnValue = [];
        if(isset($frontSlider) && $frontSlider){
            if(isset($frontSlider->field_photo) && is_array($frontSlider->field_photo))
            {
                foreach ($frontSlider->field_photo as $field_photo){
                    $image = new Image($field_photo->url, $field_photo->alt);
                    $returnValue[] = $image;
                }
            }

        }
        return $returnValue;
    }

    /**
     * @return string
     */
    public function getLearnMore()
    {
        $url = DbConfig::getLinks()['learnMore'];
        $learnMore = self::getResult($url);
        $returnValue = "";
        if(isset($learnMore) && $learnMore){
            if(isset($learnMore->body) && is_array($learnMore->body)){
                $body = $learnMore->body[0];
                $returnValue = isset($body->value) ? $body->value : "";
            }
        }
        return $returnValue;
    }

    /**
     * @return []
     */
    public function getAbout()
    {
        $url = DbConfig::getLinks()['about'];
        $about = self::getResult($url);
        $returnValue = [];
        if(isset($about) && $about){
            if(isset($about->body) && is_array($about->body)){
                $body = $about->body[0];
                $returnValue['text'] = isset($body->value) ? $body->value : "";
                $returnValue['image'] = isset($about->field_image[0]->url) ? $about->field_image[0]->url : "";
            }
        }
        return $returnValue;
    }

    /**
     * @return string
     */
    public function getContact()
    {
        $url = DbConfig::getLinks()['contacts'];
        $contacts = self::getResult($url);
        $returnValue = "";
        if(isset($contacts) && $contacts){
            if(isset($contacts->body) && is_array($contacts->body)){
                $body = $contacts->body[0];
                $returnValue = isset($body->value) ? $body->value : "";
            }
        }
        return $returnValue;
    }
}