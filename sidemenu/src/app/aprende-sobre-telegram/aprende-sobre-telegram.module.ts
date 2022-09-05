import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AprendeSobreTelegramPageRoutingModule } from './aprende-sobre-telegram-routing.module';

import { AprendeSobreTelegramPage } from './aprende-sobre-telegram.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AprendeSobreTelegramPageRoutingModule
  ],
  declarations: [AprendeSobreTelegramPage]
})
export class AprendeSobreTelegramPageModule {}
