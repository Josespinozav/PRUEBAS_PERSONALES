import { NuevoGrupoPageRoutingModule } from './nuevo-grupo/nuevo-grupo-routing.module';
import { NuevoGrupoPage } from './nuevo-grupo/nuevo-grupo.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'NuevoGrupo',
    redirectTo: 'NuevoGrupoPageRouting',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'folder/Contacto',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'folder/Llamadas',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'folder/Personacerca',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'folder/Mensajesguardados',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'nuevo-grupo',
    loadChildren: () => import('./nuevo-grupo/nuevo-grupo.module').then( m => m.NuevoGrupoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
