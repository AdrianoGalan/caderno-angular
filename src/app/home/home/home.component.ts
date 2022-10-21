import { UsuarioService } from './../../usuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Usuario } from './../../model/usuairo';
import { ConnectableObservable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  formulario: FormGroup;
  hide = true;

  usuario = new Usuario();

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private usuarioService: UsuarioService
  ) {
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required]],
      outraSenha: [null, Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {


    if (this.formulario.value['senha'] == this.formulario.value['outraSenha']) {
      if (this.formulario.valid) {

        this.usuarioService.insert(this.formulario.value).subscribe({
          next: (rest) => {
            console.log(rest)

          },
          error: (erro) => {
            this.snackBar.open('erro', 'Ok', {
              duration: 3000,
            })
          }
        });


      }
    } else {
      this.snackBar.open('Senhas não são iguais', 'Ok', {
        duration: 3000,
      });
    }
  }
  getErrorMessage(msg: string) {
    return msg;
  }

}






