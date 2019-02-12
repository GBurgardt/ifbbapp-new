import { UserPage } from './../pages/user/user';
import { CursosPage } from './../pages/cursos/cursos';
import { PromosPage } from './../pages/promos/promos';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginServiceProvider } from '../providers/login-service/login-service';
import { HttpModule } from '@angular/http';
import { DatosAppProvider } from '../providers/datos-app/datos-app';
import { NewsPage } from '../pages/news/news';

@NgModule({
  declarations: [
    MyApp,
    NewsPage,
    PromosPage,
    CursosPage,
    LoginPage,
    UserPage
    
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
    UserPage
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
