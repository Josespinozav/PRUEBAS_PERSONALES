import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonacercaPage } from './personacerca.page';

const routes: Routes = [
  {
    path: '',
    component: PersonacercaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonacercaPageRoutingModule {}
