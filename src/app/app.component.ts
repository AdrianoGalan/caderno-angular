import { UsuarioService } from './usuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './login/auth.service';
import { Usuario } from './model/usuairo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'caderno-angular';

  mostrarMenu: boolean = false;

  usuario: Usuario = new Usuario();

  constructor(private authService: AuthService,
    private usuarioService: UsuarioService
  ) {
    this.usuario.nome = 'usuario';
    this.usuario.perfis = [];

    this.authService.mostrarMenuEmitter.subscribe(

      mostrar => {
        this.mostrarMenu = mostrar
        this.getUsuario()

      }
    );



  }



  getUsuario() {

    if (localStorage.getItem("email") != this.usuario.email) {

      this.usuarioService.getUsuarioByEmail(localStorage.getItem("email")!).subscribe({
        next: (usu) => {

          if (usu) {
            this.usuario = usu

          }

        }

      })


    }

  }

  logout() {
    this.authService.toLogout();
  }

}
