import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TorneosPage } from './torneos';

@NgModule({
  declarations: [
    TorneosPage,
  ],
  imports: [
    IonicPageModule.forChild(TorneosPage),
  ],
})
export class TorneosPageModule {}
