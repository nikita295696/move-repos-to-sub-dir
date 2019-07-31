<?php
/**
 * Created by PhpStorm.
 * User: ПК
 * Date: 21.07.2019
 * Time: 14:07
 */

namespace controller;


use models\db\DbRepository;
use mvc\controller\BaseController;

class PortfolioController extends BaseController
{
    public function index($id = null) {
        $projects = DbRepository::getDb()->getProjects();
        $this->render("index", ['projects' => $projects]);
    }

    public function project($id = null) {
        $project = DbRepository::getDb()->getProjectById($id);
        $this->render("project", ['project'=>$project]);
    }
}