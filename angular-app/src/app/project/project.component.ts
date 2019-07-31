import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {Project} from '../models/Project';
import {Repository} from '../models/repository/Repository';
import {ScriptGenerator} from '../models/ScriptGenerator';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
    private id: number;
    private routeSubscription: Subscription;
    private project: Project;
    constructor(private route: ActivatedRoute) {
        const elem = document.getElementById('footer-scripts');
        elem.innerHTML = '';
        ScriptGenerator.setScriptNode(elem, '/assets/js/plugins/typed.min.js');
        ScriptGenerator.setScriptNode(elem, '/assets/js/plugins/wow.min.js');
        setTimeout(() => {
            ScriptGenerator.setScriptNode(elem, '/assets/js/project.js');
            ScriptGenerator.setScriptNode(elem, '/assets/js/wow_init.js');
        }, 200);
        this.routeSubscription = route.params.subscribe((params) => this.id = params['id']);
        console.log('Id: ' + this.id);
        this.project = Repository.getRepository().getProjectById(this.id);
        if (this.project){
            if (localStorage.getItem('clickProject')) {
                localStorage.removeItem('clickProject');
            }
            localStorage.setItem('clickProject', this.project.getId() + '');
        }
        console.log(this.project);
    }

    ngOnInit() { }

}
