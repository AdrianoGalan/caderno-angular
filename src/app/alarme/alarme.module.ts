import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAlarmeComponent } from './add-alarme/add-alarme.component';
import { EditAlarmeComponent } from './edit-alarme/edit-alarme.component';



@NgModule({
  declarations: [
    AddAlarmeComponent,
    EditAlarmeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AlarmeModule { }
