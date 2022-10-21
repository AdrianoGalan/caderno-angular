import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './../../material.module';
import { AtualizarUsuarioComponent } from './atualizar-usuario/atualizar-usuario.component';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { UsuarioRoutingModule } from './usuario-routing.module';


@NgModule({
  declarations: [
    NovoUsuarioComponent,
    AtualizarUsuarioComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class UsuarioModule { }
