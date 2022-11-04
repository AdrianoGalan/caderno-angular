import { ListUsuarioComponent } from './list-usuario/list-usuario.component';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizarUsuarioComponent } from './atualizar-usuario/atualizar-usuario.component';

const routes: Routes = [
  { path: '', component: ListUsuarioComponent },
  { path: 'update', component: AtualizarUsuarioComponent },
  { path: 'new', component: NovoUsuarioComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
