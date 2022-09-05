import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvitarAmigosPageRoutingModule } from './invitar-amigos-routing.module';

import { InvitarAmigosPage } from './invitar-amigos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvitarAmigosPageRoutingModule
  ],
  declarations: [InvitarAmigosPage]
})
export class InvitarAmigosPageModule {}
