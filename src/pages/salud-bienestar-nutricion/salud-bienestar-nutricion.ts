import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NewsService } from '../../services/newsService/newsService';
import { SaludBienestarService } from '../../services/saludBienestarService/saludBienestarService';
import { SaludBienestarEntrenamientoPage } from '../salud-bienestar-entrenamiento/salud-bienestar-entrenamiento';
import { SaludBienestarSuplementosPage } from '../salud-bienestar-suplementos/salud-bienestar-suplementos';


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
  selector: 'page-salud-bienestar-nutricion',
  templateUrl: 'salud-bienestar-nutricion.html',
})
export class SaludBienestarNutricionPage {

  saludBienestar: any[];
  saludBienestarEntrenamiento;
  saludBienestarSuplementos;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private saludBienestarService: SaludBienestarService
  ) {
    this.saludBienestarEntrenamiento = SaludBienestarEntrenamientoPage;
    this.saludBienestarSuplementos = SaludBienestarSuplementosPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaludBienestarNutricionPage');
    // this.saludBienestarService.getSaludBienestar()
    //   .then(
    //     resp => {
    //       if (resp.control.codigo === 'OK') {
    //         this.saludBienestar = resp.arraydatos;
    //         console.log(this.saludBienestar);
    //       } else {
    //         // this.showAlert("Error", resp.descripcion)
    //       }
    //     }
    //   )
  }

  irASaludBienestarNutricion() { };

  irASaludBienestarEntrenamiento() {
    this.navCtrl.push(this.saludBienestarEntrenamiento);
  };

  irASaludBienestarSuplementos() {
    this.navCtrl.push(this.saludBienestarSuplementos);
  };

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      this.saludBienestarService.getSaludBienestar()
        .then(
          resp => {
            if (resp.control.codigo === 'OK') {
              resp.arraydatos.forEach(element => {
                this.saludBienestar.push(element);
                console.log(this.saludBienestar);
              });
            } else {
              // this.showAlert("Error", resp.descripcion)
            }
          }
        )

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }


}
