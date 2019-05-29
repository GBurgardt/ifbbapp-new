import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController, AlertController } from 'ionic-angular';
import { AuthService } from '../../services/authService/authService';
import { LoginService } from '../../services/loginService/loginService';

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})

export class LoginPage {
    account = {
        username: '',
        fullname: '',
        email: '',
        password: ''
    };

    isLoading: boolean = true;

    constructor(
        public menuCtrl: MenuController,
        public navCtrl: NavController,
        public alertCtrl: AlertController,
        private loginService: LoginService
    ) {
        this.menuCtrl.enable(false);
    }

    doLogin() {
        this.isLoading = true;

        this.loginService.login(this.account)
            .then(
                result => {
                    if (result.codigo === 'OK') {
                        this.isLoading = false;
                        this.navCtrl.setRoot('HomePage');
                    } else {

                        this.showAlert("Error", result.descripcion)
                    }
                }
            )
    }

    doRegister() {
        this.loginService.register(this.account).then(
            result => this.showAlert(result.codigo, result.descripcion)
        )
    }

    public showAlert(titulo: string, texto: string) {
        let alert = this.alertCtrl.create({
            title: titulo,
            subTitle: texto,
            buttons: ['OK']
        });
        alert.present();
    }
}
