import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/material.module';

import { AlertModalComponent } from './alert-modal/alert-modal.component';



@NgModule({
  declarations: [
    AlertModalComponent

  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[AlertModalComponent]
})
export class SharedModule { }
