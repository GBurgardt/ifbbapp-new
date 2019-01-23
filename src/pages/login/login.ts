import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

/**
 * @author: KMR
 * @email: yajuve.25.dz@gmail.com
 */

export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account = {
    username: '',
    fullname: '',
    email: '',
    password: ''
  };

  // Our translated text strings
  private loginErrorString: string;
  private opt: string = 'signin';

  constructor(public menuCtrl: MenuController, public navCtrl: NavController, public alertCtrl: AlertController) {
    this.menuCtrl.enable(false);
  }

  // Attempt to login in through our User service
  doLogin() {
    if(this.account.username == 'franco', this.account.password == 'franco') {
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
