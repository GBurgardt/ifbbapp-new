import { Component, LOCALE_ID } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { InscripcionesPage } from '../inscripciones/inscripciones';
import { TorneosService } from '../../services/torneosService/torneosService';
import { registerLocaleData } from '@angular/common';
import localeEsAr from '@angular/common/locales/es-AR';
import { mockTorneos } from '../../constants/mockUpData';

registerLocaleData(localeEsAr, 'es-Ar');

@Component({
  selector: 'page-torneos',
  templateUrl: 'torneos.html',
})
export class TorneosPage {
  torneos = mockTorneos;
  inscripciones;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public app: App,
    private torneosService: TorneosService
  ) {
    this.inscripciones = InscripcionesPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TorneosPage');
  }

}
