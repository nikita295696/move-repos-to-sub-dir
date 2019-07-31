<?php
/**
 * Created by PhpStorm.
 * User: bykov
 * Date: 20.06.2018
 * Time: 17:18
 */

namespace controller;

use models\db\DbRepository;
use mvc\controller\BaseController;

class DefaultController extends BaseController
{
    public function index($id = null) {
        //$this->render("index", null);
        //header('Location: '. BASE_URL . 'products/');

        $frontSlider = DbRepository::getDb()->getFrontSlider();
        $learnMore = DbRepository::getDb()->getLearnMore();
        $about = DbRepository::getDb()->getAbout();

        $this->render("index", ['frontSlider' => $frontSlider, 'learnMore' => $learnMore, 'about' => $about]);
    }

    public function error(){
        $this->render("404");
    }
}