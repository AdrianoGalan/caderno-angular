import { MaquinaDetalheComponent } from './maquina-detalhe/maquina-detalhe.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MaquinaComponent } from './maquina/maquina.component';

const routes: Routes = [{ path: '', component: MaquinaComponent },
{ path: 'detalhe', component: MaquinaDetalheComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaquinaRoutingModule { }
