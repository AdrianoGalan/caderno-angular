import { environment } from 'src/environments/environment';
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
  selector: 'app-add-defeito',
  templateUrl: './add-defeito.component.html',
  styleUrls: ['./add-defeito.component.scss']
})
export class AddDefeitoComponent implements OnInit {


  formulario: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddDefeitoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Maquina,

    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private service: DefeitoService
  ) {

    this.formulario = this.formBuilder.group({
      descricao: [null, [Validators.required]],
      solucao: [null, [Validators.required]]
    });
  }


  ngOnInit(): void {



  }

  onSubmit() {

    if (this.formulario.valid) {

      let obj: Defeito = this.formulario.value
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
