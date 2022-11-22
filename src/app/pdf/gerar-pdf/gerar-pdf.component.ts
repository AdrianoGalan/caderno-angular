import { PdfService } from './../pdf.service';
import { MaquinaService } from './../../maquina/maquina.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Maquina } from 'src/app/model/maquina';



@Component({
  selector: 'app-gerar-pdf',
  templateUrl: './gerar-pdf.component.html',
  styleUrls: ['./gerar-pdf.component.scss']
})
export class GerarPdfComponent implements OnInit {


  formulario: FormGroup;



  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: PdfService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog) {

    this.formulario = this.formBuilder.group({

      sigla: [null, [Validators.required]]

    });

  }

  getErrorMessage(msg: string) {
    return msg;
  }

  ngOnInit(): void {



  }

  gerar() {



    this.service.gerar().subscribe((res: any)=>{
      const file = new Blob([res], {
        type: res.type


      });
    const blob = window.URL.createObjectURL(file);

    const link = document.createElement('a');
    link.href = blob;
    link.download = 'maquinas.pdf'
    link.click();

    window.URL.revokeObjectURL(blob);
    link.remove();


    });




  }

  onSubmit() {
    this.gerar();
  }




}


