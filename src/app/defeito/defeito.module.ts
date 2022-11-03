import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDefeitoComponent } from './add-defeito/add-defeito.component';
import { EditDefeitoComponent } from './edit-defeito/edit-defeito.component';



@NgModule({
  declarations: [
    AddDefeitoComponent,
    EditDefeitoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DefeitoModule { }
