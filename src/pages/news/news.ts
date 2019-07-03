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
            console.log(this.noticias);
          } else {
            // this.showAlert("Error", resp.descripcion)
          }
        }
      )
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      this.newsService.getNews()
        .then(
          resp => {
            if (resp.control.codigo === 'OK') {
              resp.arraydatos.forEach(element => {
                this.noticias.push(element);
                console.log(this.newsService);
              });
            } else {
              // this.showAlert("Error", resp.descripcion)
            }
          }
        )

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

}
