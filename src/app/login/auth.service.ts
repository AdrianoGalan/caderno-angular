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
    private loginService: LoginService,
    private snackBar: MatSnackBar
  ) {}

  login(usuario: UsuarioLogin) {
    this.loginService.logar(usuario).subscribe(
      (success) => {
        localStorage.setItem('token', success.headers.get('authorization'));
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

  checkAuth() {
    if (localStorage.getItem('token')) {
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);

      return true;
    }

    this.usuarioAutenticado = false;
    this.mostrarMenuEmitter.emit(false);

    return false;
  }

  toLogout() {
    localStorage.clear();
    this.usuarioAutenticado = false;
    this.mostrarMenuEmitter.emit(false);
    this.router.navigate(['login']);
  }

  get getTokenUser(): string {
    const token = localStorage.getItem('token');

    return token ? token : '';
  }
}
