import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoticiasInternacionalesPage } from './noticias-internacionales';

@NgModule({
  declarations: [
    NoticiasInternacionalesPage,
  ],
  imports: [
    IonicPageModule.forChild(NoticiasInternacionalesPage),
  ],
})
export class NoticiasInternacionalesPageModule {}
