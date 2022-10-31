import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Maquina } from 'src/app/model/maquina';

import { MaquinaService } from './../maquina.service';

@Component({
  selector: 'app-maquina',
  templateUrl: './maquina.component.html',
  styleUrls: ['./maquina.component.scss']
})
export class MaquinaComponent implements OnInit {

  formulario: FormGroup;
  maquina: Maquina = new Maquina();

  constructor(
    private formBuilder: FormBuilder,
    private service: MaquinaService,
    private snackBar: MatSnackBar) {

    this.formulario = this.formBuilder.group({

      sigla: [null, [Validators.required]]

    });

  }

  getErrorMessage(msg: string) {
    return msg;
  }

  ngOnInit(): void {



  }

  buscar() {

    if (this.formulario.valid) {

      this.service.getBySigla(this.formulario.value['sigla']).subscribe({
        next: (m) => {
          if(m){
            console.log(m)
          }else{

            this.snackBar.open('Maquina não cadastrada', 'Ok', {
              duration: 3000,
            });

          }
        }
      });
    } else {

      this.snackBar.open('Digite a Sigla', 'Ok', {
        duration: 3000,
      });

    }
  }

  onSubmit() {
    this.buscar();
  }

}

