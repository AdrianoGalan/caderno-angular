import { environment } from 'src/environments/environment';
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
        this.getUsuario();
        this.mostrarMenu = mostrar;



      }
    );



  }



  getUsuario() {

    if (localStorage.getItem('email') && localStorage.getItem("email") != this.usuario.email) {

      this.usuarioService.getUsuarioByEmail(localStorage.getItem("email")!).subscribe({
        next: (usu) => {

          if (usu) {
            this.usuario = usu
            environment.usuario = usu;


          }

        }

      })


    }

  }

  logout() {
    this.authService.toLogout();
  }

}
