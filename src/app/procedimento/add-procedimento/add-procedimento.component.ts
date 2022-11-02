import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Maquina } from 'src/app/model/maquina';

import { Procedimento } from './../../model/procedimento';
import { ProcedimentoService } from './../procedimento.service';

@Component({
  selector: 'app-add-procedimento',
  templateUrl: './add-procedimento.component.html',
  styleUrls: ['./add-procedimento.component.scss']
})
export class AddProcedimentoComponent implements OnInit {


  formulario: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddProcedimentoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Maquina,

    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private service: ProcedimentoService
  ) {

    this.formulario = this.formBuilder.group({
      descricao: [null, [Validators.required]],
      procedimento: [null, [Validators.required]]
    });
  }


  ngOnInit(): void {



  }

  onSubmit() {

    if (this.formulario.valid) {

      let obj: Procedimento = this.formulario.value
      obj.maquina = this.data;



      this.service.insert(obj).subscribe({
        next: (rest) => {

          this.dialogRef.close();

        },
        error: (erro) => {
          this.snackBar.open('erro', 'Ok', {
            duration: 3000,
          })
        }
      });





    } else {

      this.snackBar.open('Formulario invalido', 'Ok', {
        duration: 3000,
      });

    }

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getErrorMessage(msg: string) {
    return msg;
  }



}
