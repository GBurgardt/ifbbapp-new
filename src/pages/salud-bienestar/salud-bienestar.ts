import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NewsService } from '../../services/newsService/newsService';
import { SaludBienestarService } from '../../services/saludBienestarService/saludBienestarService';

/**
 * Generated class for the SaludBienestarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


// CRISTIAN-COMMENT
// Definir clase "noticias"
// Qué hago en caso de error con getNews?

@Component({  
  selector: 'page-salud-bienestar',
  templateUrl: 'salud-bienestar.html',
})
export class SaludBienestarPage {

  saludBienestar: any[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private saludBienestarService: SaludBienestarService
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaludBienestarPage');
    this.saludBienestarService.getSaludBienestar()
      .then(
        resp => {
          if (resp.control.codigo === 'OK') {
            this.saludBienestar = resp.arraydatos;
          } else {
            // this.showAlert("Error", resp.descripcion)
          }
        }
      )
  }

}
