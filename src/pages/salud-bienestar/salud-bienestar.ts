import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NewsService } from '../../services/newsService/newsService';

/**
 * Generated class for the SaludBienestarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-salud-bienestar',
  templateUrl: 'salud-bienestar.html',
})
export class SaludBienestarPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private newsService: NewsService
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaludBienestarPage');
    this.newsService.getnews();
  }

}
