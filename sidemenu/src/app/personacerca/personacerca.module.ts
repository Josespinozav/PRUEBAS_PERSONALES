import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonacercaPageRoutingModule } from './personacerca-routing.module';

import { PersonacercaPage } from './personacerca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonacercaPageRoutingModule
  ],
  declarations: [PersonacercaPage]
})
export class PersonacercaPageModule {}
