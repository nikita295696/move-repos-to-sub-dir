import { Component, OnInit } from '@angular/core';
import {ScriptGenerator} from '../models/ScriptGenerator';

class Contact {
    constructor(public name: string,
                public phone: string,
                public comment: string) { }
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public contact: Contact = new Contact('', '', '');
  constructor() {
      const elem = document.getElementById('footer-scripts');
      elem.innerHTML = '';
      ScriptGenerator.setScriptNode(elem, '/assets/js/plugins/wow.min.js');
      setTimeout(() => {
        ScriptGenerator.setScriptNode(elem, '/assets/js/wow_init.js');
      }, 200);
  }
  ngOnInit() { }
  create() {
    /*^\+380\d{2}\d{3}\d{2}\d{2}$*/
      event.preventDefault();
      console.log(`Name: ${this.contact.name}, Phone: ${this.contact.phone}, Comment: ${this.contact.comment}`);
  }
}
