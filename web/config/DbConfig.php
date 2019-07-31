<?php

namespace config;

class DbConfig{
    private static $links = null;


    public static function getConfig(){
        $json = json_decode(file_get_contents("config".DIRECTORY_SEPARATOR."config.json"));
        return  [
            'baseUrlApi' => $json->baseUrlApi,
            'file' => [
                'upload_dir' => $json->file->upload_dir
            ],
            'public_url' => $json->public_url,
            "base_url" => $json->base_url,
            "mailer" => [
                "email"=> $json->mailer->email,
                "pass"=> $json->mailer->pass
            ]
        ];
    }

    public static function getLinks(){
        if(!isset(static::$links) || empty(static::$links)){
            $config = static::getConfig();
            static::$links = [
                'frontSlider' => $config['baseUrlApi']."/slider_frontp?_format=json",
                'learnMore' => $config['baseUrlApi']."/learn-more?_format=json",
                'about' => $config['baseUrlApi']."/about?_format=json",
                'contacts' => $config['baseUrlApi']."/contacts?_format=json",
                'projects' => $config['baseUrlApi']."/projects?_format=json",
                'services' => $config['baseUrlApi']."/services?_format=json",
                'sendForm' => $config['base_url']."/api/sendForm",
                'projectsNoneQuery' => $config['baseUrlApi']."/projects",
            ];
        }
        return static::$links;
    }
}