import { Usuario } from './../model/usuairo';
import { UsuarioService } from './../usuario/usuario.service';
import { EventEmitter, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { UsuarioLogin } from '../model/usuarioLogin';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usuarioAutenticado: boolean = false;
  mostrarMenuEmitter = new EventEmitter<boolean>();


  constructor(
    private router: Router,
    private usuarioService: UsuarioService,
    private loginService: LoginService,
    private snackBar: MatSnackBar
  ) { }

  login(usuario: UsuarioLogin) {
    this.checkFirstLogin(usuario);

  }

  checkAuth() {


    if (localStorage.getItem('token')) {


      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);

      return true;



    } else {

      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);

      return false;
    }
  }

  toLogout() {
    localStorage.clear();
    this.usuarioAutenticado = false;
    this.mostrarMenuEmitter.emit(false);
    this.router.navigate(['login']);
  }

  checkFirstLogin(usuario: UsuarioLogin) {

    this.usuarioService.getUsuarioByEmail(usuario.email).subscribe({
      next: (u) => {



        if (u.restSenha == 1) {

          this.router.navigate(['/usuario/update']);
          localStorage.setItem('email', usuario.email)


        } else {

          this.loginService.logar(usuario).subscribe(
            (success) => {

              localStorage.setItem('token', success.headers.get('authorization'));
              localStorage.setItem('email', usuario.email)
              this.usuarioAutenticado = true;
              this.mostrarMenuEmitter.emit(true);
              this.router.navigate(['']);

            },
            (error) => {
              this.usuarioAutenticado = false;
              this.mostrarMenuEmitter.emit(false);
              console.log(error)
              this.snackBar.open('Email ou senha invalido', 'Ok', {
                duration: 3000,
              });
            }
          );


        }

      }
    });



  }

  get getTokenUser(): string {
    const token = localStorage.getItem('token');

    return token ? token : '';
  }
}
