import {animate, state, style, transition, trigger} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { MaquinaService } from './../../maquina/maquina.service';
import { Alarme } from './../../model/alarme';
import { Defeito } from './../../model/defeito';
import { Procedimento } from './../../model/procedimento';
import { Senha } from './../../model/senha';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class HomeComponent implements OnInit {

  alarmes!: Alarme[];
  defeitos!: Defeito[];
  procedimentos!: Procedimento[];
  senhas!: Senha[];
  formulario: FormGroup;
  sigla: string = 'Maquina';

  columnsToDisplay = ['codigo', 'descricao'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: Alarme | null | undefined;


  constructor(
    private formBuilder: FormBuilder,
    private service: MaquinaService,
    private snackBar: MatSnackBar) {

    this.formulario = this.formBuilder.group({

      sigla: [null, [Validators.required]]

    });

    this.service.getBySigla('aaa').subscribe({
      next: (m) => {
        if (m) {

          this.alarmes = m.alarmes;
          this.defeitos = m.defeitos;
          this.procedimentos = m.procedimentos;
          this.senhas = m.senhas;
          this.sigla = m.sigla;



        } else {

          this.snackBar.open('Maquina não cadastrada', 'Ok', {
            duration: 3000,
          });

        }
      }
    });

  }

  getErrorMessage(msg: string) {
    return msg;
  }

  ngOnInit(): void {



  }

  buscar() {

    if (this.formulario.valid) {


    } else {

      this.snackBar.open('Digite a Sigla', 'Ok', {
        duration: 3000,
      });

    }
  }

  onSubmit() {
    this.buscar();
  }

}
