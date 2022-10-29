import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaquinaRoutingModule } from './maquina-routing.module';
import { MaquinaComponent } from './maquina/maquina.component';


@NgModule({
  declarations: [
    MaquinaComponent
  ],
  imports: [
    CommonModule,
    MaquinaRoutingModule
  ]
})
export class MaquinaModule { }
