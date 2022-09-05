import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoGrupoPageRoutingModule } from './nuevo-grupo-routing.module';

import { NuevoGrupoPage } from './nuevo-grupo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoGrupoPageRoutingModule
  ],
  declarations: [NuevoGrupoPage]
})
export class NuevoGrupoPageModule {}
