import { AcercaPage } from './../pages/acerca/acerca';
import { CalendarioPage } from '../pages/menu/calendario/calendario';
import { MisTorneosPage } from '../pages/menu/mis-torneos/mis-torneos';
import { TorneosPage } from '../pages/bottom-tabs/torneos/torneos';
import { UserPage } from './../pages/user/user';
import { CursosPage } from '../pages/bottom-tabs/cursos/cursos';
import { PromosPage } from '../pages/bottom-tabs/promos/promos';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, LOCALE_ID } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http';
import { NewsPage } from '../pages/bottom-tabs/news/news';
import { IfbbPage } from '../pages/menu/ifbb/ifbb';
import { InscripcionesPage } from '../pages/inscripciones/inscripciones';
import { NoticiasInternacionalesPage } from '../pages/menu/noticias-internacionales/noticias-internacionales';
import { SaludBienestarPage } from '../pages/bottom-tabs/salud-bienestar/salud-bienestar';
import { EscuelaIfbbPage } from '../pages/menu/escuela-ifbb/escuela-ifbb';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../services/authService/authService';
import { LoginService } from '../services/loginService/loginService';
import { NewsService } from '../services/newsService/newsService';
import { LocalStorageService } from '../services/localStorageService/localStorageService';
import { HomePage } from '../pages/home/home';
import { SwipeTabDirective } from '../directives/swipe-tab.directive';
import { SaludBienestarService } from '../services/saludBienestarService/saludBienestarService';
import { TorneosService } from '../services/torneosService/torneosService';

@NgModule({
  declarations: [
    MyApp,
    NewsPage,
    PromosPage,
    CursosPage,
    LoginPage,
    UserPage,
    TorneosPage,
    IfbbPage,
    MisTorneosPage,
    CalendarioPage,
    AcercaPage,
    InscripcionesPage,
    NoticiasInternacionalesPage,
    SaludBienestarPage,
    EscuelaIfbbPage,
    HomePage,
    SwipeTabDirective
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NewsPage,
    PromosPage,
    CursosPage,
    LoginPage,
    UserPage,
    TorneosPage,
    IfbbPage,
    MisTorneosPage,
    CalendarioPage,
    AcercaPage,
    InscripcionesPage,
    NoticiasInternacionalesPage,
    SaludBienestarPage,
    EscuelaIfbbPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    LoginService,
    LocalStorageService,
    NewsService,
    SaludBienestarService,
    TorneosService,
    { provide: LOCALE_ID, useValue: 'es-Ar' }
  ]
})
export class AppModule {}
