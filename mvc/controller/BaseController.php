<?php

namespace mvc\controller;

class BaseController extends Controller
{
    private $directoryViews = 'views';
    protected $layoutFile = "layouts".DIRECTORY_SEPARATOR."main.php";

    public function render($action, $models = null, $isLayout = true){
        $sep = DIRECTORY_SEPARATOR;
        $view = "";
        $content = "";
        if($isLayout) {
            $view = "$this->directoryViews$sep$this->layoutFile";
            $content = "$this->directoryViews$sep" . strtolower($this->controllerName) . "$sep$action.php";
        }
        else{
            $view = "$this->directoryViews$sep" . strtolower($this->controllerName) . "$sep$action.php";
        }

        if(!empty($models)){
            $this->models = array_merge($models, $this->models);
        }

        if(!empty($this->models)){
            extract($this->models);
        }

        if(file_exists($view)) {
            require $view;
        }
    }

}