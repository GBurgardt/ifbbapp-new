import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { LoginServiceProvider } from '../../providers/login-service/login-service';
import { DatosAppProvider } from '../../providers/datos-app/datos-app';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public credenciales = { usuario: '', password: '' };
  public respuesta: Observable<any>;
  public loading: Boolean = false;
  public items : Observable<any>;
  public fut : Observable<any>;
  public icono : string;
  
  constructor (public navCtrl: NavController,
    public navParams: NavParams,
    public sharedData: DatosAppProvider,
    public loginSvc: LoginServiceProvider,
    public alertCtrl: AlertController) {
    
  }

  // TODO: Mando al HOME directo para programar
  ngOnInit() {
    this.refrescar();
  }

  // doLogin() {
  //   this.loading = true;
  //   this.respuesta = this.loginSvc.login(this.credenciales.usuario, this.credenciales.password);
  //   this.respuesta.subscribe(data => {
  //     this.sharedData.isLogueado = true;
  //     this.sharedData.setUsuario(data.datos);
  //     this.refrescar();
  //     this.loading = false;
  //   }, error => {
  //     this.sharedData.isLogueado = false;
  //     this.loading = false;
  //     this.showAlert("Error " + error.status, "Error de conexion\n" + error.statusText);
  //   });
  // }

  doLogin() {
    if(this.credenciales.usuario == 'franco', this.credenciales.password == 'franco') {
      this.refrescar();
    } else  {
      this.showAlert("Error", "credenciales incorrectas");
    }
  }

  public showAlert(titulo: string, texto: string) {
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: texto,
      buttons: ['OK']
    });
    alert.present();
  }
  
  refrescar() { 
    this.navCtrl.setRoot('HomePage');
  }

}
