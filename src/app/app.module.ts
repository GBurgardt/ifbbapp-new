import { AcercaPage } from './../pages/acerca/acerca';
import { CalendarioPage } from './../pages/calendario/calendario';
import { MisTorneosPage } from './../pages/mis-torneos/mis-torneos';
import { TorneosPage } from './../pages/torneos/torneos';
import { UserPage } from './../pages/user/user';
import { CursosPage } from './../pages/cursos/cursos';
import { PromosPage } from './../pages/promos/promos';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginServiceProvider } from '../providers/login-service/login-service';
import { HttpModule } from '@angular/http';
import { DatosAppProvider } from '../providers/datos-app/datos-app';
import { NewsPage } from '../pages/news/news';
import { IfbbPage } from '../pages/ifbb/ifbb';
import { InscripcionesPage } from '../pages/inscripciones/inscripciones';
import { NoticiasInternacionalesPage } from '../pages/noticias-internacionales/noticias-internacionales';
import { SaludBienestarPage } from '../pages/salud-bienestar/salud-bienestar';
import { EscuelaIfbbPage } from '../pages/escuela-ifbb/escuela-ifbb';


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
    EscuelaIfbbPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
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
    EscuelaIfbbPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginServiceProvider,
    DatosAppProvider
  ]
})
export class AppModule {}
