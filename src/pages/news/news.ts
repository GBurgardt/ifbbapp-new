import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NewsService } from '../../services/newsService/newsService';


@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class NewsPage {
  
  noticias: any[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private newsService: NewsService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
    this.newsService.getNews()
      .then(
        resp => {
          if (resp.control.codigo === 'OK') {
            this.noticias = resp.arraydatos;
          } else {
            // this.showAlert("Error", resp.descripcion)
          }
        }
      )
  }
}
