import { AlarmeService } from './../alarme.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Maquina } from 'src/app/model/maquina';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { Alarme } from 'src/app/model/alarme';

@Component({
  selector: 'app-add-alarme',
  templateUrl: './add-alarme.component.html',
  styleUrls: ['./add-alarme.component.scss']
})
export class AddAlarmeComponent implements OnInit {


  formulario: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddAlarmeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Maquina,

    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private service: AlarmeService
  ) {

    this.formulario = this.formBuilder.group({
      codigo: [null, [Validators.required]],
      descricao: [null, [Validators.required]],
      solucao: [null, [Validators.required]]
    });
  }


  ngOnInit(): void {



  }

  onSubmit() {

    if (this.formulario.valid) {

      let alarme: Alarme = this.formulario.value
      alarme.maquina = this.data;



      this.service.insert(alarme).subscribe({
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
