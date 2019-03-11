import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MisTorneosPage } from './mis-torneos';

@NgModule({
  declarations: [
    MisTorneosPage,
  ],
  imports: [
    IonicPageModule.forChild(MisTorneosPage),
  ],
})
export class MisTorneosPageModule {}
