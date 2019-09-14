import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { mockPromos } from '../../constants/mockUpData';



@Component({
  selector: 'page-promos',
  templateUrl: 'promos.html',
})
export class PromosPage {
  promos = mockPromos;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PromosPage');
  }

}
