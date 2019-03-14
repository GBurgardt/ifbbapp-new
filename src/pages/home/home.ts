
import { TorneosPage } from './../torneos/torneos';
import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';
import { NewsPage } from '../news/news';
import { PromosPage } from '../promos/promos';
import { CursosPage } from '../cursos/cursos';
import { UserPage } from '../user/user';
import { ViewChild } from '@angular/core';
import { Tabs } from 'ionic-angular';
import { SwipeTabDirective } from '../../directives/swipe-tab.directive';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(SwipeTabDirective) swipeTabDirective: SwipeTabDirective;
  @ViewChild('myTabs') tabRef: Tabs;
  
  news;
  promos;
  cursos;
  user;
  torneos;

  constructor(public navCtrl: NavController, public menuController : MenuController) {
    this.news = NewsPage;
    this.promos = PromosPage;
    this.cursos = CursosPage;
    this.user = UserPage;
    this.torneos = TorneosPage;
  }

  transition($event) {
    this.swipeTabDirective.onTabInitialized($event.index);
}

  onTabChange(index: number) {
    this.tabRef.select(index);
  }

  ionViewDidLoad() {
    this.menuController.enable(true)
  }

  goToUserPage(event : any) {
    this.navCtrl.push(this.user);
  }

  openMenu(event : any) {
    this.menuController.open();
  }
}
