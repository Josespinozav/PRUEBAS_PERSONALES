import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensajesGuardadosPageRoutingModule } from './mensajes-guardados-routing.module';

import { MensajesGuardadosPage } from './mensajes-guardados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensajesGuardadosPageRoutingModule
  ],
  declarations: [MensajesGuardadosPage]
})
export class MensajesGuardadosPageModule {}
