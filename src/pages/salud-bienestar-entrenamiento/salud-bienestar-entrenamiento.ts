import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NewsService } from '../../services/newsService/newsService';
import { SaludBienestarService } from '../../services/saludBienestarService/saludBienestarService';
import { SaludBienestarNutricionPage } from '../salud-bienestar-nutricion/salud-bienestar-nutricion';
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
  selector: 'page-salud-bienestar-entrenamiento',
  templateUrl: 'salud-bienestar-entrenamiento.html',
})
export class SaludBienestarEntrenamientoPage {

  saludBienestar: any[];
  saludBienestarNutricion;
  saludBienestarSuplementos;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private saludBienestarService: SaludBienestarService
  ) {
    this.saludBienestarNutricion = SaludBienestarNutricionPage;
    this.saludBienestarSuplementos = SaludBienestarSuplementosPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaludBienestarEntrenamientoPage');
    this.saludBienestarService.getSaludBienestar()
      .then(
        resp => {
          if (resp.control.codigo === 'OK') {
            this.saludBienestar = resp.arraydatos;
            console.log(this.saludBienestar);
          } else {
            // this.showAlert("Error", resp.descripcion)
          }
        }
      )
  }

  irASaludBienestarNutricion() {
    this.navCtrl.push(this.saludBienestarNutricion);
  };

  irASaludBienestarEntrenamiento() { };

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
