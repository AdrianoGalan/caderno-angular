import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { UsuarioService } from './../../usuario/usuario.service';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.scss']
})
export class NovoUsuarioComponent implements OnInit {

  formulario: FormGroup;
  hide = true;



  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private usuarioService: UsuarioService
  ) {
    this.formulario = this.formBuilder.group({

      email: [null, [Validators.required, Validators.email]]

    });
  }

  ngOnInit(): void {
  }

  onSubmit() {





    if (this.formulario.valid) {

      this.usuarioService.getUsuarioByEmail(this.formulario.value['email']).subscribe({
        next: (rest) => {

          if (!rest) {
            this.insert();
          } else {
            this.snackBar.open('Email já cadastrado', 'Ok', {
              duration: 3000,
            })
          }



        },
        error: (erro) => {
          this.snackBar.open('Erro', 'Ok', {
            duration: 3000,
          })
        }
      });


    }

  }

  insert() {


    this.usuarioService.insert(this.formulario.value).subscribe({
      next: () => {



          this.router.navigate(['']);



      },
      error: (erro) => {
        this.snackBar.open('erro', 'Ok', {
          duration: 3000,
        })
      }
    });

  }
  getErrorMessage(msg: string) {
    return msg;
  }

}






