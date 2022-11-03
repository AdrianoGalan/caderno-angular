import { DefeitoService } from './../defeito.service';
import { Defeito } from './../../model/defeito';
import { AlarmeService } from './../../alarme/alarme.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Alarme } from 'src/app/model/alarme';
import { Maquina } from 'src/app/model/maquina';

@Component({
  selector: 'app-edit-defeito',
  templateUrl: './edit-defeito.component.html',
  styleUrls: ['./edit-defeito.component.scss']
})
export class EditDefeitoComponent implements OnInit {


  formulario: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditDefeitoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Defeito,

    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private service: DefeitoService
  ) {

    this.formulario = this.formBuilder.group({
      descricao: [this.data.descricao, [Validators.required]],
      solucao: [this.data.solucao, [Validators.required]]
    });
  }


  ngOnInit(): void {



  }

  onSubmit() {

    if (this.formulario.valid) {

      let obj = this.data;

      obj.descricao = this.formulario.value['descricao']
      obj.solucao = this.formulario.value['solucao']
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
