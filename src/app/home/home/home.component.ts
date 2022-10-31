import { Observable } from 'rxjs';
import { Alarme } from './../../model/alarme';
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

  alarmes$!: Observable<Alarme[]>;
  formulario: FormGroup;
  maquina: Maquina = new Maquina();

  constructor(
    private formBuilder: FormBuilder,
    private service: MaquinaService,
    private snackBar: MatSnackBar) {

    this.formulario = this.formBuilder.group({

      sigla: [null, [Validators.required]]

    });

    this.service.getBySigla('cbc').subscribe({
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

  }

  getErrorMessage(msg: string) {
    return msg;
  }

  ngOnInit(): void {



  }

  buscar() {

    if (this.formulario.valid) {


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
