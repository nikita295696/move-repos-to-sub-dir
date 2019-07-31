import {IRepository} from './IRepository';
import {Project} from '../Project';
import {Service} from '../Service';

/*Хранит данные в памяти*/
export class RepositoryMemory implements IRepository {
    private projects: Project[];
    private services: Service[];
    constructor() {
        this.projects = [
            new Project(1, 'Название проекта 1', `Lorem ipsum dolor sit, amet consectetur adipisicing elit 1. Lorem ipsum dolor sit, amet consectetur adipisicing elit 1. Lorem ipsum dolor sit, amet consectetur adipisicing elit 1. Lorem ipsum dolor sit, amet consectetur adipisicing elit 1. Lorem ipsum dolor sit, amet consectetur adipisicing elit 1. Lorem ipsum dolor sit, amet consectetur adipisicing elit 1. Lorem ipsum dolor sit, amet consectetur adipisicing elit 1. Lorem ipsum dolor sit, amet consectetur adipisicing elit 1. Lorem ipsum dolor sit, amet consectetur adipisicing elit 1. Lorem ipsum dolor sit, amet consectetur adipisicing elit 1.`, `подпись к первому фото`, '/assets/img/6.jpg', [
                '/assets/img/slide1.jpg',
            ]),
            new Project(2, 'Название проекта 2', `Lorem ipsum dolor sit, amet consectetur adipisicing elit 2. Lorem ipsum dolor sit, amet consectetur adipisicing elit 2. Lorem ipsum dolor sit, amet consectetur adipisicing elit 2. Lorem ipsum dolor sit, amet consectetur adipisicing elit 2. Lorem ipsum dolor sit, amet consectetur adipisicing elit 2. `, `подпись к второму фото`, '/assets/img/12.jpg', [
                '/assets/img/slide1.jpg',
                '/assets/img/slide2.jpg',
            ], false),
            new Project(3, 'Название проекта 3', `Lorem ipsum dolor sit, amet consectetur adipisicing elit 3. Lorem ipsum dolor sit, amet consectetur adipisicing elit 3. Lorem ipsum dolor sit, amet consectetur adipisicing elit 3. Lorem ipsum dolor sit, amet consectetur adipisicing elit 3. Lorem ipsum dolor sit, amet consectetur adipisicing elit 3.`, `подпись к третьему фото`, '/assets/img/3.jpg',[
                '/assets/img/slide1.jpg',
                '/assets/img/slide2.jpg',
                '/assets/img/slide1.jpg',
            ]),
            new Project(4, 'Название проекта 4', `Lorem ipsum dolor sit, amet consectetur adipisicing elit 4. Lorem ipsum dolor sit, amet consectetur adipisicing elit 4. Lorem ipsum dolor sit, amet consectetur adipisicing elit 4. Lorem ipsum dolor sit, amet consectetur adipisicing elit 4. Lorem ipsum dolor sit, amet consectetur adipisicing elit 4.`, `подпись к 4-му фото`, 'https://i.pinimg.com/736x/7b/cd/b9/7bcdb99875be154fa55ad3df89a7b87d.jpg', [
                '/assets/img/slide1.jpg',
                '/assets/img/slide2.jpg',
                '/assets/img/slide1.jpg',
                '/assets/img/slide2.jpg',
            ], false),
            new Project(5, 'Название проекта 5', `Lorem ipsum dolor sit, amet consectetur adipisicing elit 5. Lorem ipsum dolor sit, amet consectetur adipisicing elit 5. Lorem ipsum dolor sit, amet consectetur adipisicing elit 5. Lorem ipsum dolor sit, amet consectetur adipisicing elit 5. Lorem ipsum dolor sit, amet consectetur adipisicing elit 5. Lorem ipsum dolor sit, amet consectetur adipisicing elit 5.`, `подпись к пятому фото`, '/assets/img/6.jpg', [
                '/assets/img/slide1.jpg',
                '/assets/img/slide2.jpg',
                '/assets/img/slide1.jpg',
                '/assets/img/slide2.jpg',
                '/assets/img/slide1.jpg',
            ]),
        ];
        this.services = [
            new Service(1, 'Дизайн-<br/>проект',
                '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate itaque ratione pariatur officiis ipsum reprehenderit recusandae voluptates labore maiores, rerum et consequuntur. Tenetur, minus? Tempora distinctio temporibus laborum debitis beatae?</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate itaque ratione pariatur officiis ipsum reprehenderit recusandae voluptates labore maiores, rerum et consequuntur. Tenetur, minus? Tempora distinctio temporibus laborum debitis beatae?</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate itaque ratione pariatur officiis ipsum reprehenderit recusandae voluptates labore maiores, rerum et consequuntur. Tenetur, minus? Tempora distinctio temporibus laborum debitis beatae?</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate itaque ratione pariatur officiis ipsum reprehenderit recusandae voluptates labore maiores, rerum et consequuntur. Tenetur, minus? Tempora distinctio temporibus laborum debitis beatae?</p>',
                1000, `/assets/img/svg/ico_design_pr.svg`, [
                    '/assets/img/10.jpg',
                    '/assets/img/6.jpg',
                ], 'Signature 1'),
            new Service(2, 'Технический проект',
                '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate itaque ratione pariatur officiis ipsum reprehenderit recusandae voluptates labore maiores, rerum et consequuntur. Tenetur, minus? Tempora distinctio temporibus laborum debitis beatae?</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate itaque ratione pariatur officiis ipsum reprehenderit recusandae voluptates labore maiores, rerum et consequuntur. Tenetur, minus? Tempora distinctio temporibus laborum debitis beatae?</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate itaque ratione pariatur officiis ipsum reprehenderit recusandae voluptates labore maiores, rerum et consequuntur. Tenetur, minus? Tempora distinctio temporibus laborum debitis beatae?</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate itaque ratione pariatur officiis ipsum reprehenderit recusandae voluptates labore maiores, rerum et consequuntur. Tenetur, minus? Tempora distinctio temporibus laborum debitis beatae?</p>',
                2000, `/assets/img/svg/ico_teh_pr.svg`, [
                    '/assets/img/111.jpg',
                    '/assets/img/6.jpg',
                ], 'Signature 2'),
            new Service(3, 'Проекты <br/>домов',
                '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate itaque ratione pariatur officiis ipsum reprehenderit recusandae voluptates labore maiores, rerum et consequuntur. Tenetur, minus? Tempora distinctio temporibus laborum debitis beatae?</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate itaque ratione pariatur officiis ipsum reprehenderit recusandae voluptates labore maiores, rerum et consequuntur. Tenetur, minus? Tempora distinctio temporibus laborum debitis beatae?</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate itaque ratione pariatur officiis ipsum reprehenderit recusandae voluptates labore maiores, rerum et consequuntur. Tenetur, minus? Tempora distinctio temporibus laborum debitis beatae?</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate itaque ratione pariatur officiis ipsum reprehenderit recusandae voluptates labore maiores, rerum et consequuntur. Tenetur, minus? Tempora distinctio temporibus laborum debitis beatae?</p>',
                3000,  `/assets/img/svg/ico_house_pr.svg`, [
                    '/assets/img/asset-1.jpg',
                    '/assets/img/6.jpg',
                ], 'Signature 3'),
            new Service(4, 'Дополнительные услуги',
                '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate itaque ratione pariatur officiis ipsum reprehenderit recusandae voluptates labore maiores, rerum et consequuntur. Tenetur, minus? Tempora distinctio temporibus laborum debitis beatae?</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate itaque ratione pariatur officiis ipsum reprehenderit recusandae voluptates labore maiores, rerum et consequuntur. Tenetur, minus? Tempora distinctio temporibus laborum debitis beatae?</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate itaque ratione pariatur officiis ipsum reprehenderit recusandae voluptates labore maiores, rerum et consequuntur. Tenetur, minus? Tempora distinctio temporibus laborum debitis beatae?</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate itaque ratione pariatur officiis ipsum reprehenderit recusandae voluptates labore maiores, rerum et consequuntur. Tenetur, minus? Tempora distinctio temporibus laborum debitis beatae?</p>',
                4000,  `/assets/img/svg/ico_services.svg`, [
                    '/assets/img/222.jpg',
                    '/assets/img/6.jpg',
                ], 'Signature 4'),
        ];
    }
    getProjects(): Project[] {
        return this.projects;
    }
    getProjectById(id: number): Project {
        id = Number(id);
        return this.projects.find(p => p.getId() === id);
    }

    getServiceById(id: number): Service {
        id = Number(id);
        return this.services.find(s => s.getId() === id);
    }

    getServices(): Service[] {
        return this.services;
    }

}
