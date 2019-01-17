import { NewsPage } from './news';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';


@NgModule({
  declarations: [
    NewsPage,
  ],
  imports: [
    IonicPageModule.forChild(NewsPage),
  ],
  exports: [
    NewsPage
  ]
})
export class NewsPageModule {}