import { AcercaPage } from './../pages/acerca/acerca';
import { MisTorneosPage } from './../pages/mis-torneos/mis-torneos';
import { CalendarioPage } from './../pages/calendario/calendario';
import { IfbbPage } from './../pages/ifbb/ifbb';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { LoginPage } from '../pages/login/login';

import { NoticiasInternacionalesPage } from '../pages/noticias-internacionales/noticias-internacionales';
import { SaludBienestarPage } from '../pages/salud-bienestar/salud-bienestar';
import { EscuelaIfbbPage } from '../pages/escuela-ifbb/escuela-ifbb';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, icon: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    platform.ready().then(() => {
      splashScreen.hide();
    });

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Calendario', icon : 'calendar', component: CalendarioPage },
      { title: 'Salud y Bienestar', icon : 'heart', component: SaludBienestarPage },
      { title: 'Mis Torneos', icon : 'trophy', component: MisTorneosPage },
      { title: 'Noticias Internacionales', icon : 'globe', component: NoticiasInternacionalesPage },
      { title: 'Escuela IFBB', icon : 'aperture', component: EscuelaIfbbPage },
      { title: 'IFBB', icon : 'exit', component: IfbbPage },
      { title: 'Acerca', icon : 'information-circle', component: AcercaPage }
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
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }

  
}
