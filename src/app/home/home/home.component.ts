import { MaquinaService } from './../../maquina/maquina.service';
import { Maquina } from './../../model/maquina';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { UsuarioService } from './../../usuario/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


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
