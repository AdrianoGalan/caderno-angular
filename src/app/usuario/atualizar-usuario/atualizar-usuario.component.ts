import { AuthService } from './../../login/auth.service';
import { Router } from '@angular/router';
import { Usuario } from './../../model/usuairo';
import { UsuarioService } from './../../usuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-atualizar-usuario',
  templateUrl: './atualizar-usuario.component.html',
  styleUrls: ['./atualizar-usuario.component.scss']
})
export class AtualizarUsuarioComponent implements OnInit {

  formulario: FormGroup;
  hide = true;
  usuario: Usuario = new Usuario();



  constructor(

    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private usuarioService: UsuarioService,
    private authService: AuthService
  ) {
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required]],
      email: [localStorage.getItem("email")],
      senha: [null, [Validators.required]],
      outraSenha: [null, Validators.required]
    });
  }

  ngOnInit(): void {

  }



  salvar() {

    this.formulario.value['email'] = localStorage.getItem("email");


    if (this.formulario.value['senha'] == this.formulario.value['outraSenha']) {
      if (this.formulario.valid) {


        this.usuarioService.update(this.formulario.value).subscribe({
          next: (rest) => {
            this.authService.toLogout();

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

  cancelar() {
    this.authService.toLogout();
  }

}
