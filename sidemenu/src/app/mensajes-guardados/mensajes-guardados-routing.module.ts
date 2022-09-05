import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensajesGuardadosPage } from './mensajes-guardados.page';

const routes: Routes = [
  {
    path: '',
    component: MensajesGuardadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensajesGuardadosPageRoutingModule {}
