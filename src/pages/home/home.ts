import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { NewsPage } from '../news/news';
import { PromosPage } from '../promos/promos';
import { CursosPage } from '../cursos/cursos';
import { LoginPage } from '../login/login';



@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  news;
  promos;
  cursos;

  constructor(public navCtrl: NavController) {
    this.news = NewsPage;
    this.promos = PromosPage;
    this.cursos = CursosPage;
  }

}
