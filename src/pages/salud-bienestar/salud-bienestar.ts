import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NewsService } from '../../services/newsService/newsService';
import { SaludBienestarService } from '../../services/saludBienestarService/saludBienestarService';
import { mockSaludBienestar } from '../../constants/mockUpData';

@Component({
    selector: 'page-salud-bienestar',
    templateUrl: 'salud-bienestar.html',
})
export class SaludBienestarPage {

    saludBienestar = mockSaludBienestar;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private saludBienestarService: SaludBienestarService
    ) {}

    ionViewDidLoad() {
        console.log('ionViewDidLoad SaludBienestarPage');
    }

}
