import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioLogin } from 'src/app/model/usuarioLogin';

import { Usuario } from './../../model/usuairo';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formulario!: FormGroup;
  usuario: UsuarioLogin = new UsuarioLogin();
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
    ) {
    this.formulario = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, Validators.required],
    });
  }

  onSubmit() {
    if(this.formulario.valid){
      this.usuario.senha = this.formulario.value['senha'];
      this.usuario.email = this.formulario.value['email']

      this.authService.login(this.usuario);
    }
  }

  getErrorMessage(msg: string) {
    return msg;
  }

  ngOnInit(): void {}
}
