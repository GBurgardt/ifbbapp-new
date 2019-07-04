
import { MisTorneosPage } from './../pages/mis-torneos/mis-torneos';
import { CalendarioPage } from './../pages/calendario/calendario';
import { IfbbPage } from './../pages/ifbb/ifbb';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { LoginPage } from '../pages/login/login';

import { NoticiasInternacionalesPage } from '../pages/noticias-internacionales/noticias-internacionales';
import { EscuelaIfbbPage } from '../pages/escuela-ifbb/escuela-ifbb';
import { HomePage } from '../pages/home/home';



@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = LoginPage;
    // rootPage: any = HomePage;

    pages: Array<{ title: string, icon: string, component: any }>;

    constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
        this.initializeApp();

        platform.ready().then(() => {
            splashScreen.hide();
        });

        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Calendario', icon: 'calendar', component: CalendarioPage },
            { title: 'Mis Torneos', icon: 'trophy', component: MisTorneosPage },
            { title: 'Noticias Internacionales', icon: 'globe', component: NoticiasInternacionalesPage },
            { title: 'Escuela IFBB', icon: 'aperture', component: EscuelaIfbbPage },
            { title: 'IFBB', icon: 'information-circle', component: IfbbPage },
            { title: 'Salir', icon: 'exit', component: LoginPage }
        ];

    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    openPage(page) {

        this.nav.push(page.component);

    }


}
