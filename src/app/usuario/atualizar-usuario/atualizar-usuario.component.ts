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
    private usuarioService: UsuarioService
  ) {
    this.getUsuario();

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required]],
      outraSenha: [null, Validators.required]
    });
  }

  ngOnInit(): void {
  }

  getUsuario() {

    if (!this.usuario.nome) {


      this.usuarioService.getUsuarioByEmail(localStorage.getItem("email")!).subscribe({
        next: (usu) => {
          this.usuario = usu;

          this.formulario.value['email'] = "usu.email";
        }
      })


    }

  }

  onSubmit() {


    if (this.formulario.value['senha'] == this.formulario.value['outraSenha']) {
      if (this.formulario.valid) {


        this.usuarioService.update(this.formulario.value).subscribe({
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
