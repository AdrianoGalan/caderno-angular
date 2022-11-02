import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSenhaComponent } from './add-senha/add-senha.component';



@NgModule({
  declarations: [
    AddSenhaComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SenhaModule { }
