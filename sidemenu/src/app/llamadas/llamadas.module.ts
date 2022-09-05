import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LlamadasPageRoutingModule } from './llamadas-routing.module';

import { LlamadasPage } from './llamadas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LlamadasPageRoutingModule
  ],
  declarations: [LlamadasPage]
})
export class LlamadasPageModule {}
