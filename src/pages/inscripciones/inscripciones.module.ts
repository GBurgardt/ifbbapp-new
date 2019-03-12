import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InscripcionesPage } from './inscripciones';

@NgModule({
  declarations: [
    InscripcionesPage,
  ],
  imports: [
    IonicPageModule.forChild(InscripcionesPage),
  ],
})
export class InscripcionesPageModule {}
