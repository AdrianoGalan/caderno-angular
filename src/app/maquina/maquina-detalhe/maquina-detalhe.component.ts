import { EditAlarmeComponent } from './../../alarme/edit-alarme/edit-alarme.component';
import { environment } from 'src/environments/environment';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { DefeitoModule } from './../../defeito/defeito.module';
import { AlarmeModule } from './../../alarme/alarme.module';
import { ProcedimentoModule } from 'src/app/procedimento/procedimento.module';
import { SenhaModule } from 'src/app/senha/senha.module';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Maquina } from 'src/app/model/maquina';

import { AddAlarmeComponent } from './../../alarme/add-alarme/add-alarme.component';
import { AddDefeitoComponent } from './../../defeito/add-defeito/add-defeito.component';
import { MaquinaService } from './../../maquina/maquina.service';
import { Alarme } from './../../model/alarme';
import { Defeito } from './../../model/defeito';
import { Procedimento } from './../../model/procedimento';
import { Senha } from './../../model/senha';
import { AddProcedimentoComponent } from './../../procedimento/add-procedimento/add-procedimento.component';
import { AddSenhaComponent } from './../../senha/add-senha/add-senha.component';

@Component({
  selector: 'app-maquina-detalhe',
  templateUrl: './maquina-detalhe.component.html',
  styleUrls: ['./maquina-detalhe.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class MaquinaDetalheComponent implements OnInit {




  com: any[] = [AddAlarmeComponent, AddDefeitoComponent, AddProcedimentoComponent, AddSenhaComponent]
  maquina!: Maquina;
  alarmes!: Alarme[];
  defeitos!: Defeito[];
  procedimentos!: Procedimento[];
  senhas!: Senha[];
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

    private service: MaquinaService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {



    this.buscaMaquina();

  }

  showEdit(obj:any):boolean{

    if( environment.usuario.perfis.length > 1 || obj.autor.id == environment.usuario.id ){
      return true
    }

    return false
  }

  edit(pos: number, obj: any){

    obj.maquina = this.maquina;

    this.openDialogEdite(0,obj);

  }

  buscaMaquina() {

    this.service.getBySigla(localStorage.getItem('sigla')!).subscribe({
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


  openDialog(pos: number): void {

    const dialogRef = this.dialog.open(this.com[pos], {
      width: '350px',
      data: this.maquina,


    });

    dialogRef.afterClosed().subscribe(result => {

      this.buscaMaquina();

    });
  }

  openDialogEdite(pos: number, obj:any): void {

    const dialogRef = this.dialog.open(EditAlarmeComponent, {
      width: '350px',
      data: obj,


    });

    dialogRef.afterClosed().subscribe(result => {

      this.buscaMaquina();

    });
  }
}


