import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SaludBienestarPage } from './salud-bienestar';

@NgModule({
  declarations: [
    SaludBienestarPage,
  ],
  imports: [
    IonicPageModule.forChild(SaludBienestarPage),
  ],
})
export class SaludBienestarPageModule {}
