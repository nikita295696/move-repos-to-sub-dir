import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {Project} from '../models/Project';
import {Repository} from '../models/repository/Repository';
import {ScriptGenerator} from '../models/ScriptGenerator';
/*import {browser} from 'protractor';*/

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
    private projects: Project[];
    constructor() {
        this.projects = Repository.getRepository().getProjects();
        const elem = document.getElementById('footer-scripts');
        elem.innerHTML = '';
        ScriptGenerator.setScriptNode(elem, '/assets/js/components/scrolling.js');
        ScriptGenerator.setScriptNode(elem, '/assets/js/plugins/jquery.shuffleLetters.js');
        ScriptGenerator.setScriptNode(elem, '/assets/js/plugins/wow.min.js');
        setTimeout(() => {
            ScriptGenerator.setScriptNode(elem, '/assets/js/portfolio.js');
            ScriptGenerator.setScriptNode(elem, '/assets/js/wow_init.js');
        }, 200);
    }
    saveClickProject(event: Event, id: string) {}
    ngOnInit() { }
}
