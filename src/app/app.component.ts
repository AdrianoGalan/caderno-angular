import { UsuarioService } from './usuario/usuario.service';
import { Component } from '@angular/core';
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
    this.authService.mostrarMenuEmitter.subscribe(

      mostrar => {
        this.mostrarMenu = mostrar
        this.getUsuario()
      }
    );

   // this.getUsuario();


  }

  getUsuario() {

    if(!this.usuario.nome){

      this.usuarioService.getUsuarioByEmail(localStorage.getItem("email")!).subscribe({
        next:(usu) => this.usuario = usu
      })


    }

  }

  logout() {
    this.authService.toLogout();
  }

}
