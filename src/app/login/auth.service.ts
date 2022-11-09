import { environment } from 'src/environments/environment';
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
  ) {



  }

  login(usuario: UsuarioLogin) {

    this.loginService.logar(usuario).subscribe({
      next: (success) => {

        this.checkFirstLogin(usuario, success);

      },
      error: () => {
        localStorage.clear();
        this.usuarioAutenticado = false;
        this.mostrarMenuEmitter.emit(false);
        this.snackBar.open('Email ou senha invalido', 'Ok', {
          duration: 3000,
        });
      }
    });





  }

  checkAuth() {


    if (localStorage.getItem('token')) {


      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);

      this.usuarioService.getUsuarioByEmail(localStorage.getItem('email')!).subscribe({
        next: (u) => environment.usuario = u
      })

      return true;



    } else {

      this.toLogout()

      return false;
    }
  }

  toLogout() {
    localStorage.clear();
    this.usuarioAutenticado = false;
    this.mostrarMenuEmitter.emit(false);
    this.router.navigate(['login']);
    environment.usuario = new Usuario();
  }

  checkFirstLogin(usuario: UsuarioLogin, success: any) {

    this.usuarioService.getUsuarioByEmail(usuario.email).subscribe({
      next: (u) => {

        if (u.status == 1) {

          if (u.restSenha == 1) {

            this.router.navigate(['/usuario/update']);
            localStorage.setItem('email', usuario.email)


          } else {

            localStorage.setItem('token', success.headers.get('authorization'));
            localStorage.setItem('email', usuario.email)
            this.usuarioAutenticado = true;
            this.mostrarMenuEmitter.emit(true);
            this.router.navigate(['']);

          }

        } else {

          localStorage.clear();
          this.usuarioAutenticado = false;
          this.mostrarMenuEmitter.emit(false);
          this.snackBar.open('Usuario inativo', 'Ok', {
            duration: 3000,
          });

        }

      }
    });



  }

  get getTokenUser(): string {
    const token = localStorage.getItem('token');

    return token ? token : '';
  }
}
