import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {ScriptGenerator} from '../models/ScriptGenerator';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss']
})
export class FrontComponent implements OnInit {

  constructor() {
    const elem = document.getElementById('footer-scripts');
    elem.innerHTML = '';
    ScriptGenerator.setScriptNode(elem, '/assets/js/components/scrolling.js');
    ScriptGenerator.setScriptNode(elem, '/assets/js/plugins/fullpage.min.js');
    ScriptGenerator.setScriptNode(elem, '/assets/js/plugins/jquery.shuffleLetters.js');
    ScriptGenerator.setScriptNode(elem, '/assets/js/plugins/typed.min.js');
    ScriptGenerator.setScriptNode(elem, '/assets/js/plugins/wow.min.js');
    setTimeout(() => {
      ScriptGenerator.setScriptNode(elem, '/assets/js/common.js');
      ScriptGenerator.setScriptNode(elem, '/assets/js/wow_init.js');
    }, 100);
  }

  ngOnInit() {  }

}
