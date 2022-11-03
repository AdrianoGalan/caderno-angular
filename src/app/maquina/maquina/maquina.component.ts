import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Maquina } from 'src/app/model/maquina';

import { MaquinaService } from './../maquina.service';

@Component({
  selector: 'app-maquina',
  templateUrl: './maquina.component.html',
  styleUrls: ['./maquina.component.scss']
})
export class MaquinaComponent implements OnInit {


  formulario: FormGroup;
  maquina: Maquina = new Maquina();
  salvar: boolean = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: MaquinaService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog) {

    this.formulario = this.formBuilder.group({

      sigla: [null, [Validators.required]]

    });

  }

  getErrorMessage(msg: string) {
    return msg;
  }

  ngOnInit(): void {



  }

  buscar() {

    if (this.formulario.valid) {

      this.service.getBySigla(this.formulario.value['sigla']).subscribe({
        next: (m) => {
          if(m){

            localStorage.setItem('sigla', m.sigla)
            this.router.navigate(['maquina/detalhe']);

          }else{

            localStorage.setItem('sigla', '')

            this.salvar = true;

            this.snackBar.open('Maquina não cadastrada', 'Ok', {
              duration: 3000,
            });

          }
        }
      });
    } else {

      this.snackBar.open('Digite a Sigla', 'Ok', {
        duration: 3000,
      });

    }
  }

  onSubmit() {
    this.buscar();
  }
  onAdd(){

    if(this.formulario.valid){

      this.service.insert(this.formulario.value).subscribe({
        next:(res) =>{

          localStorage.setItem('sigla', this.formulario.value['sigla'])
          this.router.navigate(['maquina/detalhe']);

        }
      })

    }

  }

}

