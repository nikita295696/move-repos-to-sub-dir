<?php
/**
 * Created by PhpStorm.
 * User: ПК
 * Date: 21.07.2019
 * Time: 14:45
 */

namespace models;

class Project
{
    private $id;
    private $title;
    private $description;
    private $baseImage;
    private $images;
    private $alias;
    private $isLeft;

    /**
     * Project constructor.
     * @param $id
     * @param $title
     * @param $description
     * @param $signature
     * @param Image $baseImage
     * @param Image[] $images
     * @param $isLeft
     */
    public function __construct($id, $title, $description, $baseImage, $images, $alias = "", $isLeft = true)
    {
        $this->id = $id;
        $this->title = $title;
        $this->description = $description;
        $this->baseImage = $baseImage;
        $this->images = $images;
        $this->alias = $alias;
        $this->isLeft = $isLeft;
    }

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @return mixed
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * @return mixed
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * @return Image
     */
    public function getBaseImage()
    {
        return $this->baseImage;
    }

    /**
     * @return Image[]
     */
    public function getImages()
    {
        return $this->images;
    }

    /**
     * @return string
     */
    public function getAlias()
    {
        return $this->alias;
    }

    /**
     * @return bool
     */
    public function isLeft()
    {
        return $this->isLeft;
    }


}