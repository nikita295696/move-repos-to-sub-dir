<?php
/**
 * Created by PhpStorm.
 * User: ПК
 * Date: 21.07.2019
 * Time: 14:45
 */

namespace models;

use function PHPSTORM_META\type;

class Service
{
    private $id;
    private $title;
    private $description;
    private $price;
    private $baseImage;
    private $allImages;
    private $isImage;
    private $alias;

    /**
     * Service constructor.
     * @param $id
     * @param $title
     * @param $description
     * @param $price
     * @param Image $baseImage
     * @param Image[] $allImages
     * @param $signature
     * @param boolean $isImage
     */
    public function __construct($id, $title, $alias, $description, $price, $baseImage, $allImages, $isImage = true)
    {
        $this->id = $id;
        $this->title = $title;
        $this->alias = $alias;
        $this->description = $description;
        $this->price = $price;
        $this->baseImage = $baseImage;
        $this->allImages = $allImages;
        $this->isImage = $isImage;
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
        return strip_tags($this->title);
    }

    /**
     * @return mixed
     */
    public function getAlias()
    {
        return $this->alias;
    }

    public function getHtmTitle(){
        /*$stripText =  strip_tags($this->title);
        $regex = '/(?<bold>[[a-zA-Zа-яА-Я])(?<txt1>[a-zA-Zа-яА-Я]+)(\-| )(?<txt2>.+)/';
        preg_match($regex, $stripText, $matches, PREG_OFFSET_CAPTURE, 0);
        if (isset($matches) && !empty($matches)) {
            return '<span class="service__letter">' . $matches["bold"][0] . '</span>' . $matches['txt1'] . ' <br> <span class="service__word">' . $matches['txt2'] . '</span>';
        }
        return '';*/
        //$title = $this->getTitle();
        //$title = str_replace("-", " ", $title);
        //$bold = substr($title, 0, 1);

        //$idx = strpos($title, " ");
        //$idx = $idx ? $idx : strlen($title);
        //$txt1 = substr($title, 1, $idx);
        //$txt2 = strlen($title) < $idx ? substr($title, $idx+1) : "";

        //return '<span class="service__letter">' . $bold . '</span>' . " " . ' <br> <span class="service__word">' . " " . '</span>';
        return strip_tags($this->title);
    }

    /**
     * @return mixed
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * @return mixed
     */
    public function getPrice()
    {
        return $this->price;
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
    public function getAllImages()
    {
        return $this->allImages;
    }

    /**
     * @return bool
     */
    public function isImage()
    {
        return $this->isImage;
    }



}