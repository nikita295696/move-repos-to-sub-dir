<?php
/**
 * Created by PhpStorm.
 * User: ПК
 * Date: 21.07.2019
 * Time: 14:40
 */

namespace models\db;


use models\Image;
use models\Project;
use models\Service;

class RepositoryMemory implements IDb
{
    /** @var Project[] $projects */
    private $projects;
    /** @var Service[] $services */
    private $services;

    public function __construct()
    {
        $this->projects = [
            new Project(1, 'Название проекта 1', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit 1. Lorem ipsum dolor sit, amet consectetur adipisicing elit 1. Lorem ipsum dolor sit, amet consectetur adipisicing elit 1. Lorem ipsum dolor sit, amet consectetur adipisicing elit 1. Lorem ipsum dolor sit, amet consectetur adipisicing elit 1. Lorem ipsum dolor sit, amet consectetur adipisicing elit 1. Lorem ipsum dolor sit, amet consectetur adipisicing elit 1. Lorem ipsum dolor sit, amet consectetur adipisicing elit 1. Lorem ipsum dolor sit, amet consectetur adipisicing elit 1. Lorem ipsum dolor sit, amet consectetur adipisicing elit 1.', new Image(PUBLIC_URL.'site/img/6.jpg', 'подпись к первому фото'), [
                new Image(PUBLIC_URL.'site/img/slide1.jpg'),
            ]),
            new Project(2, 'Название проекта 2', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit 2. Lorem ipsum dolor sit, amet consectetur adipisicing elit 2. Lorem ipsum dolor sit, amet consectetur adipisicing elit 3. Lorem ipsum dolor sit, amet consectetur adipisicing elit 2. Lorem ipsum dolor sit, amet consectetur adipisicing elit 2.', new Image(PUBLIC_URL.'site/img/12.jpg', 'подпись к второму фото'),[
                new Image(PUBLIC_URL.'site/img/slide1.jpg'),
                new Image(PUBLIC_URL.'site/img/slide2.jpg'),
            ], "", false),
            new Project(3, 'Название проекта 3', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit 3. Lorem ipsum dolor sit, amet consectetur adipisicing elit 3. Lorem ipsum dolor sit, amet consectetur adipisicing elit 3. Lorem ipsum dolor sit, amet consectetur adipisicing elit 3. Lorem ipsum dolor sit, amet consectetur adipisicing elit 3.', new Image(PUBLIC_URL.'site/img/3.jpg', 'подпись к третьему фото'),[
                new Image(PUBLIC_URL.'site/img/slide1.jpg'),
                new Image(PUBLIC_URL.'site/img/slide2.jpg'),
                new Image(PUBLIC_URL.'site/img/slide1.jpg'),
            ]),
            new Project(4, 'Название проекта 4', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit 4. Lorem ipsum dolor sit, amet consectetur adipisicing elit 4. Lorem ipsum dolor sit, amet consectetur adipisicing elit 4. Lorem ipsum dolor sit, amet consectetur adipisicing elit 4. Lorem ipsum dolor sit, amet consectetur adipisicing elit 4.', new Image('https://i.pinimg.com/736x/7b/cd/b9/7bcdb99875be154fa55ad3df89a7b87d.jpg', 'подпись к 4-му фото'), [
                new Image(PUBLIC_URL.'site/img/slide1.jpg'),
                new Image(PUBLIC_URL.'site/img/slide2.jpg'),
                new Image(PUBLIC_URL.'site/img/slide1.jpg'),
                new Image(PUBLIC_URL.'site/img/slide2.jpg'),
            ], "", false),
            new Project(5, 'Название проекта 5', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit 5. Lorem ipsum dolor sit, amet consectetur adipisicing elit 5. Lorem ipsum dolor sit, amet consectetur adipisicing elit 5. Lorem ipsum dolor sit, amet consectetur adipisicing elit 5. Lorem ipsum dolor sit, amet consectetur adipisicing elit 5. Lorem ipsum dolor sit, amet consectetur adipisicing elit 5.', new Image(PUBLIC_URL.'site/img/6.jpg', 'подпись к пятому фото'), [
                new Image(PUBLIC_URL.'site/img/slide1.jpg'),
                new Image(PUBLIC_URL.'site/img/slide2.jpg'),
                new Image(PUBLIC_URL.'site/img/slide1.jpg'),
                new Image(PUBLIC_URL.'site/img/slide2.jpg'),
                new Image(PUBLIC_URL.'site/img/slide1.jpg'),
            ]),
        ];
        $this->services = [
            new Service(1, "Дизайн-<br/>проект", 'design',
                '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate itaque ratione pariatur officiis ipsum reprehenderit recusandae voluptates labore maiores, rerum et consequuntur. Tenetur, minus? Tempora distinctio temporibus laborum debitis beatae?</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate itaque ratione pariatur officiis ipsum reprehenderit recusandae voluptates labore maiores, rerum et consequuntur. Tenetur, minus? Tempora distinctio temporibus laborum debitis beatae?</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate itaque ratione pariatur officiis ipsum reprehenderit recusandae voluptates labore maiores, rerum et consequuntur. Tenetur, minus? Tempora distinctio temporibus laborum debitis beatae?</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate itaque ratione pariatur officiis ipsum reprehenderit recusandae voluptates labore maiores, rerum et consequuntur. Tenetur, minus? Tempora distinctio temporibus laborum debitis beatae?</p>',
                1000, new Image(PUBLIC_URL.'site/img/svg/ico_design_pr.svg'), [
                    new Image(PUBLIC_URL.'site/img/10.jpg'),
                    new Image(PUBLIC_URL.'site/img/6.jpg'),
                ]),
            new Service(2,  "Технический <br/>проект", 'tehnical',
                '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate itaque ratione pariatur officiis ipsum reprehenderit recusandae voluptates labore maiores, rerum et consequuntur. Tenetur, minus? Tempora distinctio temporibus laborum debitis beatae?</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate itaque ratione pariatur officiis ipsum reprehenderit recusandae voluptates labore maiores, rerum et consequuntur. Tenetur, minus? Tempora distinctio temporibus laborum debitis beatae?</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate itaque ratione pariatur officiis ipsum reprehenderit recusandae voluptates labore maiores, rerum et consequuntur. Tenetur, minus? Tempora distinctio temporibus laborum debitis beatae?</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate itaque ratione pariatur officiis ipsum reprehenderit recusandae voluptates labore maiores, rerum et consequuntur. Tenetur, minus? Tempora distinctio temporibus laborum debitis beatae?</p>',
                2000, new Image(PUBLIC_URL.'site/img/svg/ico_teh_pr.svg'), [
                    new Image(PUBLIC_URL.'site/img/111.jpg'),
                    new Image(PUBLIC_URL.'site/img/6.jpg'),
                ]),
            new Service(3, "Проекты <br/>домов", 'houses',
                '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate itaque ratione pariatur officiis ipsum reprehenderit recusandae voluptates labore maiores, rerum et consequuntur. Tenetur, minus? Tempora distinctio temporibus laborum debitis beatae?</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate itaque ratione pariatur officiis ipsum reprehenderit recusandae voluptates labore maiores, rerum et consequuntur. Tenetur, minus? Tempora distinctio temporibus laborum debitis beatae?</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate itaque ratione pariatur officiis ipsum reprehenderit recusandae voluptates labore maiores, rerum et consequuntur. Tenetur, minus? Tempora distinctio temporibus laborum debitis beatae?</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate itaque ratione pariatur officiis ipsum reprehenderit recusandae voluptates labore maiores, rerum et consequuntur. Tenetur, minus? Tempora distinctio temporibus laborum debitis beatae?</p>',
                3000,  new Image(PUBLIC_URL.'site/img/svg/ico_house_pr.svg'), [
                    new Image(PUBLIC_URL.'site/img/asset-1.jpg'),
                    new Image(PUBLIC_URL.'site/img/6.jpg'),
                ]),
            new Service(4, "Дополнительные <br/>услуги", 'additional',
                '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate itaque ratione pariatur officiis ipsum reprehenderit recusandae voluptates labore maiores, rerum et consequuntur. Tenetur, minus? Tempora distinctio temporibus laborum debitis beatae?</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate itaque ratione pariatur officiis ipsum reprehenderit recusandae voluptates labore maiores, rerum et consequuntur. Tenetur, minus? Tempora distinctio temporibus laborum debitis beatae?</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate itaque ratione pariatur officiis ipsum reprehenderit recusandae voluptates labore maiores, rerum et consequuntur. Tenetur, minus? Tempora distinctio temporibus laborum debitis beatae?</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate itaque ratione pariatur officiis ipsum reprehenderit recusandae voluptates labore maiores, rerum et consequuntur. Tenetur, minus? Tempora distinctio temporibus laborum debitis beatae?</p>',
                4000,  new Image(PUBLIC_URL.'site/img/svg/ico_services.svg'), [
                    new Image(PUBLIC_URL.'site/img/222.jpg'),
                    new Image(PUBLIC_URL.'site/img/6.jpg'),
                ]),
        ];
    }

    /**
     * @param $id
     * @return Project
     */
    public function getProjectById($id)
    {
        if(isset($id) && !empty($id)) {
            foreach ($this->projects as $project) {
                if ($project->getId() == $id) {
                    return $project;
                }
            }
        }
        return null;
    }

    /**
     * @return Project[]
     */
    public function getProjects()
    {
        return $this->projects;
    }

    /**
     * @return Service[]
     */
    public function getServices()
    {
        return $this->services;
    }

    /**
     * @param $id
     * @return Service
     */
    public function getServiceById($id)
    {
        if(isset($id) && !empty($id)) {
            foreach ($this->services as $service) {
                if ($service->getId() == $id) {
                    return $service;
                }
            }
        }
        return null;
    }

    /**
     * @param $alias
     * @return Service|null
     */
    public function getServiceByAlias($alias)
    {
        if(isset($alias) && !empty($alias)) {
            foreach ($this->services as $service) {
                if ($service->getAlias() == $alias) {
                    return $service;
                }
            }
        }
        return null;
    }

    public function getFrontSlider()
    {
        return "";
    }

    public function getLearnMore()
    {
        return "";
    }

    public function getAbout()
    {
        return "";
    }

    public function getContact()
    {
        return "";
    }
}