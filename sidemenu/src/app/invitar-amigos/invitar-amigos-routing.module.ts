import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvitarAmigosPage } from './invitar-amigos.page';

const routes: Routes = [
  {
    path: '',
    component: InvitarAmigosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvitarAmigosPageRoutingModule {}
