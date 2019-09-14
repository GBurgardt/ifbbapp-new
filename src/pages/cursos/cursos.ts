import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { mockCursos } from '../../constants/mockUpData';


@Component({
  selector: 'page-cursos',
  templateUrl: 'cursos.html',
})
export class CursosPage {
  cursos = mockCursos;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CursosPage');
  }

}
