import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PromosPage } from './promos';

@NgModule({
  declarations: [
    PromosPage,
  ],
  imports: [
    IonicPageModule.forChild(PromosPage),
  ],
})
export class PromosPageModule {}
