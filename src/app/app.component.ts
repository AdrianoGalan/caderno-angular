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
  usuario!: Usuario;

  constructor(private authService: AuthService) {
    this.authService.mostrarMenuEmitter.subscribe(

      mostrar => this.mostrarMenu = mostrar

    );
  }

  logout() {
    this.authService.toLogout();
  }

}
