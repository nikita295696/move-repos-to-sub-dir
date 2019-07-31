<?php
/**
 * Created by PhpStorm.
 * User: ПК
 * Date: 21.07.2019
 * Time: 14:55
 */

namespace models;


class Image
{
    private $path;
    private $signature;

    /**
     * Image constructor.
     * @param $path
     * @param $signature
     */
    public function __construct($path, $signature = '')
    {
        $this->path = $path;
        $this->signature = $signature;
    }

    /**
     * @return mixed
     */
    public function getPath()
    {
        return $this->path;
    }

    /**
     * @return mixed
     */
    public function getSignature()
    {
        return $this->signature;
    }


}