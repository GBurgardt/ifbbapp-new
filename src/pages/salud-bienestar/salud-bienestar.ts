import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NewsService } from '../../services/newsService/newsService';

/**
 * Generated class for the SaludBienestarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// Definir clase "noticias"
// Qué hago en caso de error con getNews?

@Component({
  selector: 'page-salud-bienestar',
  templateUrl: 'salud-bienestar.html',
})
export class SaludBienestarPage {

  noticias: any[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private newsService: NewsService
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaludBienestarPage');
    this.newsService.getnews()
      .then(
        resp => {
          if (resp.control.codigo === 'OK') {
            this.noticias = resp.arraydatos;
          } else {
            // this.showAlert("Error", resp.descripcion)
          }
        }
      )
  }

  ionViewWillEnter() {
    // Esta rutina corre incluso si la página ya está en caché
    // DidLoad lo hace solo la primera vez al cachearla en memoria
    // Pasarlo a ionViewDidLoad para produccion
  }

}
