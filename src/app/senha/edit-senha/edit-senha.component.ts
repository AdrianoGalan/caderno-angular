import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Maquina } from 'src/app/model/maquina';
import { environment } from 'src/environments/environment';

import { Senha } from './../../model/senha';
import { SenhaService } from './../senha.service';

@Component({
  selector: 'app-edit-senha',
  templateUrl: './edit-senha.component.html',
  styleUrls: ['./edit-senha.component.scss']
})
export class EditSenhaComponent implements OnInit {


  formulario: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditSenhaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Senha,

    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private service: SenhaService
  ) {

    this.formulario = this.formBuilder.group({
      descricao: [this.data.descricao, [Validators.required]],
      senha: [this.data.senha, [Validators.required]],
      login: [this.data.login, [Validators.required]]
    });
  }


  ngOnInit(): void {



  }

  onSubmit() {

    if (this.formulario.valid) {


      let obj = this.data

      obj.descricao = this.formulario.value['descricao'];
      obj.login = this.formulario.value['login'];
      obj.senha = this.formulario.value['senha'];
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
