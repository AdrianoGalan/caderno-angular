import { UsuarioService } from './../../usuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Usuario } from './../../model/usuairo';

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
      email1: [null, [Validators.required, Validators.email]],
      senha: [null, Validators.required],
      senha1: [null, Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {

    if (this.formulario.value['email'] == this.formulario.value['email1']) {
      if (this.formulario.value['senha'] == this.formulario.value['senha1']) {
        if (this.formulario.valid) {

          this.usuarioService.getUsuarioByEmail(this.formulario.value['email']).subscribe({
            next: () => {

              this.snackBar.open('Email Já Cadastrado', 'Ok', {
                duration: 3000,
              });

            },
            error: (erro) => {
             

            }
          });


        }
      } else {
        this.snackBar.open('Senhas não são iguais', 'Ok', {
          duration: 3000,
        });
      }
    } else {

      this.snackBar.open('Emails não são iguais', 'Ok', {
        duration: 3000,
      });
    }

  }



  getErrorMessage(msg: string) {
    return msg;
  }

}
