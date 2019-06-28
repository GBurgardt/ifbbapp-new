import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { InscripcionesPage } from '../inscripciones/inscripciones';
import { TorneosService } from '../../services/torneosService/torneosService';

@Component({
  selector: 'page-torneos',
  templateUrl: 'torneos.html',
})
export class TorneosPage {

  items: Array<{ titulo: string, imagen: string, fecha: string, lugar: string }>;
  torneos: any[];
  inscripciones;
 
  // CRISTIAN-COMMENT
  // Una vez cargados estos items en el backend borrar la variable items y reemplazar por torneos
  // Luego definir una clase torneo y reemplazarla

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public app: App,
    private torneosService: TorneosService
  ) {
    this.items = [];
    this.items.push({
      titulo: 'Campeonato de Apertura 2019',
      imagen: 'torneo1.jpg',
      fecha: ' Domingo 7 de Abril',
      lugar: ' San Justo, Buenos Aires, Argentina'
    });
    this.items.push({
      titulo: 'IV Juegos Sudamericanos de Playa',
      imagen: 'torneo2.jpg',
      fecha: ' Marzo del 20 al 23',
      lugar: ' Rosario, Santa Fe, Argentina'
    });

    this.inscripciones = InscripcionesPage;
  }

  public doInscripcion(event: any, item: any) {
    this.app.getRootNav().push(this.inscripciones, {
      item: item
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TorneosPage');
    this.torneosService.getTorneos()
      .then(
        resp => {
          if (resp.control.codigo === 'OK') {
            this.torneos = resp.arraydatos;
          } else {
            // this.showAlert("Error", resp.descripcion)
          }
        }
      )
  }

}
