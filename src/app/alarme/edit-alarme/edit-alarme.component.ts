import { environment } from 'src/environments/environment';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Alarme } from 'src/app/model/alarme';
import { Maquina } from 'src/app/model/maquina';

import { AlarmeService } from './../alarme.service';

@Component({
  selector: 'app-edit-alarme',
  templateUrl: './edit-alarme.component.html',
  styleUrls: ['./edit-alarme.component.scss']
})
export class EditAlarmeComponent implements OnInit {


  formulario: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditAlarmeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Alarme,

    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private service: AlarmeService
  ) {

    this.formulario = this.formBuilder.group({
      codigo: [this.data.codigo, [Validators.required]],
      descricao: [this.data.descricao, [Validators.required]],
      solucao: [this.data.solucao, [Validators.required]]
    });
  }


  ngOnInit(): void {



  }

  onSubmit() {

    if (this.formulario.valid) {

      let alarme = this.data

      alarme.codigo = this.formulario.value['codigo'];
      alarme.descricao = this.formulario.value['descricao'];
      alarme.solucao = this.formulario.value['solucao'];
      alarme.maquina.alarmes = [];
      alarme.maquina.defeitos = [];
      alarme.maquina.senhas = [];
      alarme.maquina.procedimentos = [];






      this.service.update(alarme).subscribe({
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
