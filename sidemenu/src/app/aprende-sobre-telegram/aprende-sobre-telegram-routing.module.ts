import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AprendeSobreTelegramPage } from './aprende-sobre-telegram.page';

const routes: Routes = [
  {
    path: '',
    component: AprendeSobreTelegramPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AprendeSobreTelegramPageRoutingModule {}
