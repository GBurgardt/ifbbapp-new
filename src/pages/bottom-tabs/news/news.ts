import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NewsService } from '../../../services/newsService/newsService';
import { mockNews } from '../../../constants/mockUpData';


@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class NewsPage {
  news = mockNews;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private newsService: NewsService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

}
