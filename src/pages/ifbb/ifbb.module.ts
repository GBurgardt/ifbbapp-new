import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IfbbPage } from './ifbb';

@NgModule({
  declarations: [
    IfbbPage,
  ],
  imports: [
    IonicPageModule.forChild(IfbbPage),
  ],
})
export class IfbbPageModule {}
