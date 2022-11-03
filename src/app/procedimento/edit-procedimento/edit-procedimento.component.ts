import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Maquina } from 'src/app/model/maquina';

import { Procedimento } from './../../model/procedimento';
import { ProcedimentoService } from './../procedimento.service';

@Component({
  selector: 'app-edit-procedimento',
  templateUrl: './edit-procedimento.component.html',
  styleUrls: ['./edit-procedimento.component.scss']
})
export class EditProcedimentoComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditProcedimentoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Procedimento,

    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private service: ProcedimentoService
  ) {

    this.formulario = this.formBuilder.group({
      descricao: [this.data.descricao, [Validators.required]],
      procedimento: [this.data.procedimento, [Validators.required]]
    });
  }


  ngOnInit(): void {



  }

  onSubmit() {

    if (this.formulario.valid) {

      let obj = this.data;

      obj.descricao = this.formulario.value['descricao']
      obj.procedimento = this.formulario.value['procedimento']
      obj.maquina.alarmes = [];
      obj.maquina.defeitos = [];
      obj.maquina.procedimentos = [];
      obj.maquina.senhas = [];



      this.service.update(obj).subscribe({
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

