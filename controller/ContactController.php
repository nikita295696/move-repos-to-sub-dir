<?php
/**
 * Created by PhpStorm.
 * User: ПК
 * Date: 22.07.2019
 * Time: 4:36
 */

namespace controller;


use models\db\DbRepository;
use mvc\controller\BaseController;

class ContactController extends BaseController
{
    public function index($id = null) {
        $contact = DbRepository::getDb()->getContact();
        $this->render("index", ['contact'=>$contact]);
    }
}