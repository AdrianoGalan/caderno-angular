import { AlarmeModule } from './../../alarme/alarme.module';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Maquina } from 'src/app/model/maquina';

import { AddAlarmeComponent } from './../../alarme/add-alarme/add-alarme.component';
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
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class HomeComponent implements OnInit {




  maquina!: Maquina;
  alarmes!: Alarme[];
  defeitos!: Defeito[];
  procedimentos!: Procedimento[];
  senhas!: Senha[];
  formulario: FormGroup;
  sigla: string = 'Maquina';

  columnsToDisplayAlarme = ['codigo', 'descricao'];
  columnsToDisplayWithExpandAlarme = [...this.columnsToDisplayAlarme, 'expand'];
  expandedElementAlarme: Alarme | null | undefined;

  columnsToDisplayDefeito = ['descricao'];
  columnsToDisplayWithExpandDefeito = [...this.columnsToDisplayDefeito, 'expand'];
  expandedElementDefeito: Defeito | null | undefined;

  columnsToDisplayProcedimento = ['descricao'];
  columnsToDisplayWithExpandProcedimento = [...this.columnsToDisplayProcedimento, 'expand'];
  expandedElementProcedimento: Defeito | null | undefined;

  columnsToDisplaySenha = ['login', 'senha'];
  columnsToDisplayWithExpandSenha = [...this.columnsToDisplaySenha, 'expand'];
  expandedElementSenha: Defeito | null | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private service: MaquinaService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {

    this.formulario = this.formBuilder.group({

      sigla: [null, [Validators.required]]

    });

    this.buscaMaquina();

  }

  buscaMaquina() {
    this.service.getBySigla('aaa').subscribe({
      next: (m) => {
        if (m) {
          this.maquina = m;
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

  onAdd(arg0: string) {



    switch (arg0) {
      case 'alarme':

        break;

      default:
        break;
    }
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(AddAlarmeComponent, {
      width: '350px',
      data: this.maquina,
    });

    dialogRef.afterClosed().subscribe(result => {

      this.buscaMaquina();

    });
  }
}

