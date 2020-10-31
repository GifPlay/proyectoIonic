import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'visualizar1',
    loadChildren: () => import('./visualizar/visualizar.module').then( m => m.VisualizarPageModule)
  },
  {
    path: 'visualizar',
    loadChildren: () => import('./servicios/visualizar/visualizar.module').then( m => m.VisualizarPageModule)
  },
  {
    path: 'agregarServicio',
    loadChildren: () => import('./servicios/agregar/agregar.module').then( m => m.AgregarPageModule)
  },
  {
    path: 'agregarTecnico',
    loadChildren: () => import('./tecnicos/agregar/agregar.module').then( m => m.AgregarPageModule)
  },
  {
    path: 'agregarCliente',
    loadChildren: () => import('./clientes/agregar/agregar.module').then( m => m.AgregarPageModule)
  },
  /*{
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  }*/
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
