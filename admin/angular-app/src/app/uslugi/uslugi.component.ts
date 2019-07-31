import { Component, OnInit } from '@angular/core';
import {Service} from '../models/Service';
import {Repository} from '../models/repository/Repository';
import {DomSanitizer} from '@angular/platform-browser';
import {ScriptGenerator} from '../models/ScriptGenerator';

@Component({
  selector: 'app-uslugi',
  templateUrl: './uslugi.component.html',
  styleUrls: ['./uslugi.component.scss']
})
export class UslugiComponent implements OnInit {
    private services: Service[];
    private oneServiceModel: Service;
  constructor(private sanitizer: DomSanitizer) {
    const elem = document.getElementById('footer-scripts');
    elem.innerHTML = '';
    ScriptGenerator.setScriptNode(elem, '/assets/js/plugins/flux.js');
    ScriptGenerator.setScriptNode(elem, '/assets/js/plugins/typed.min.js');
    ScriptGenerator.setScriptNode(elem, '/assets/js/plugins/wow.min.js');
    setTimeout(() => {
        ScriptGenerator.setScriptNode(elem, '/assets/js/services.js');
        ScriptGenerator.setScriptNode(elem, '/assets/js/service.js');
        ScriptGenerator.setScriptNode(elem, '/assets/js/wow_init.js');
    }, 200);
    this.services = Repository.getRepository().getServices();
    this.oneServiceModel = this.services[0];
    console.log(this.services);
  }
    selectService(id: number) {
        console.log('selectService');
        const domElem = document.getElementById('oneService');
        this.oneServiceModel = Repository.getRepository().getServiceById(id);
        domElem.style.display = 'none';
        domElem.innerHTML = '';
        let images = '';
        for (let image of this.oneServiceModel.getAllImages()) {
          images += `<li data-transition="fade" data-slotamount="6" data-hideafterloop="0" data-hideslideonmobile="off" data-easein="Power2.easeInOut" data-easeout="Power2.easeInOut" data-masterspeed="1000" data-rotate="0" data-saveperformance="off" data-title="Slide"><img class="slides__img" src="${image}" alt="gordinsky"></li>`;
        }
        const template = `<div class="service__left">
            <div class="service__text-wrap proj-text wow fadeInLeft" data-wow-delay=".5s" data-wow-duration="1.5s">
                <div class="proj-text__textBack service_textBack"></div>
                <div class="proj-text__hideScrollService"></div>
                <div class="proj-text__text-wrap service_text-padding">
                    <p class="proj-text__text">${this.oneServiceModel.getDescription()}</p>
                </div>
            </div>
            <p class="service__price wow zoomIn" data-wow-delay="2s">$${this.oneServiceModel.getPrice()}</p>
        </div>
        <div class="service__right wow fadeInRight" data-wow-delay=".5s" data-wow-duration="1.5s">
            <div class="service__slider-wrap">
                <div class="service-slider" id="revslider_service" style="display:none;" data-version="5.4.7.4">
                    <ul>
                    ${images}
                    </ul>
                </div>
                <div class="service__capt-wrap wow fadeIn" data-wow-delay="2s" data-wow-duration="2s">
                    <h1 class="service__caption">${this.oneServiceModel.getHtmTitle()}</h1>
                </div>
            </div>
            <div class="service__bottom">
                <div class="proj-info__name-wrap">
                    <p class="proj-info__name">${this.oneServiceModel.getSignature()}</p>
                </div>
                <div class="arrows service_topArrow"><a class="arrows__left" href="#" id="prevSlideService"></a>
                    <div class="slide-status-numbers arrows__numb"></div><a class="arrows__right" href="#" id="nextSlideService"></a>
                </div>
            </div>
        </div></div>`;
        domElem.innerHTML = template;
        domElem.style.display = 'flex';
    }
  ngOnInit() {
  }

}
