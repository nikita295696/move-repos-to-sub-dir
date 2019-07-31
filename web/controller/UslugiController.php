<?php
/**
 * Created by PhpStorm.
 * User: ПК
 * Date: 21.07.2019
 * Time: 18:56
 */

namespace controller;


use models\db\DbRepository;
use mvc\controller\BaseController;

class UslugiController extends BaseController
{
    public function index($alias = null) {
        $services = DbRepository::getDb()->getServices();
        $service = DbRepository::getDb()->getServiceByAlias($alias);
        $id = isset($service) && !empty($service) ? $service->getId() : 0;
        $this->render("index", ['services' => $services, "serviceId" => $id]);
    }
}