import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddAlarmeComponent } from './add-alarme/add-alarme.component';


const routes: Routes = [
 { path: '', component: AddAlarmeComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlarmeRoutingModule { }
