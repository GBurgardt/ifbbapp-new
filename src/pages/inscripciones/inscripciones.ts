import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';



@Component({
  selector: 'page-inscripciones',
  templateUrl: 'inscripciones.html',
})
export class InscripcionesPage {

  item:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log(this.item);
  }

}
