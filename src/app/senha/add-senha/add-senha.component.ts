import { environment } from 'src/environments/environment';
import { Senha } from './../../model/senha';
import { SenhaService } from './../senha.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Maquina } from 'src/app/model/maquina';

import { Procedimento } from './../../model/procedimento';
import { ProcedimentoService } from 'src/app/procedimento/procedimento.service';

@Component({
  selector: 'app-add-senha',
  templateUrl: './add-senha.component.html',
  styleUrls: ['./add-senha.component.scss']
})
export class AddSenhaComponent implements OnInit {



  formulario: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddSenhaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Maquina,

    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private service: SenhaService
  ) {

    this.formulario = this.formBuilder.group({
      descricao: [null, [Validators.required]],
      senha: [null, [Validators.required]],
      login: [null, [Validators.required]]
    });
  }


  ngOnInit(): void {



  }

  onSubmit() {

    if (this.formulario.valid) {

      let obj: Senha = this.formulario.value
      obj.maquina = this.data;
      obj.autor = environment.usuario;



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
