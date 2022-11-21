import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'usuario',
    loadChildren: () =>
      import('./usuario/usuario.module').then((m) => m.UsuarioModule),
      canActivate: [AuthGuard]
  },
  {
    path: 'maquina',
    loadChildren: () =>
      import('./maquina/maquina.module').then((m) => m.MaquinaModule),
      canActivate: [AuthGuard]
  },
  {
    path: 'pdf',
    loadChildren: () =>
      import('./pdf/pdf.module').then((m) => m.PdfModule),
      canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
