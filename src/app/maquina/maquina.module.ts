import { MaterialModule } from './../../material.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaquinaDetalheComponent } from './maquina-detalhe/maquina-detalhe.component';
import { MaquinaRoutingModule } from './maquina-routing.module';
import { MaquinaComponent } from './maquina/maquina.component';



@NgModule({
  declarations: [
    MaquinaComponent,
    MaquinaDetalheComponent
  ],
  imports: [
    CommonModule,
    MaquinaRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class MaquinaModule { }
