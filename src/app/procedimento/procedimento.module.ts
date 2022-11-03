import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProcedimentoComponent } from './add-procedimento/add-procedimento.component';
import { EditProcedimentoComponent } from './edit-procedimento/edit-procedimento.component';



@NgModule({
  declarations: [
    AddProcedimentoComponent,
    EditProcedimentoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class ProcedimentoModule { }
