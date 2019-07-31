<?php
/**
 * Created by PhpStorm.
 * User: ПК
 * Date: 19.06.2019
 * Time: 22:38
 */

namespace models\db;


interface IDb
{
    public function getProjectById($id);
    public function getProjects();
    public function getServices();
    public function getServiceById($id);
    public function getServiceByAlias($alias);
    /*
     'frontSlider' => static::$config['baseUrl']."/slider_frontp?_format=json",
     'learnMore' => static::$config['baseUrl']."/learn-more?_format=json",
     'about' => static::$config['baseUrl']."/about?_format=json",
     */
    public function getFrontSlider();
    public function getLearnMore();
    public function getAbout();
    public function getContact();
}