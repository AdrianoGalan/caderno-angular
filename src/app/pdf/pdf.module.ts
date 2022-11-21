import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdfRoutingModule } from './pdf-routing.module';
import { GerarPdfComponent } from './gerar-pdf/gerar-pdf.component';


@NgModule({
  declarations: [
    GerarPdfComponent
  ],
  imports: [
    CommonModule,
    PdfRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class PdfModule { }
