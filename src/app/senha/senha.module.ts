import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSenhaComponent } from './add-senha/add-senha.component';
import { EditSenhaComponent } from './edit-senha/edit-senha.component';



@NgModule({
  declarations: [
    AddSenhaComponent,
    EditSenhaComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SenhaModule { }
