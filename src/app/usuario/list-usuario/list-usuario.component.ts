import { Usuario } from './../../model/usuairo';
import { UsuarioService } from './../usuario.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrls: ['./list-usuario.component.scss']
})
export class ListUsuarioComponent implements OnInit {



  dataSource: Usuario[] = [];
  dataSourceInactive: Usuario[] = [];
  displayedColumns: string[] = ['nome', 'email', 'iconRest', 'iconDelete'];
  displayedColumnsInative: string[] = ['nome', 'email', 'iconRest'];




  constructor(
    private service: UsuarioService,
    private router: Router

  ) {

  }

  ngOnInit(): void {

    this.service.list().subscribe({ next: (res) => this.dataSource = res })
    this.service.listInactive().subscribe({ next: (res) => this.dataSourceInactive = res })

  }

  onClick(usuario: any) {

    console.log(usuario)
    //this.router.navigate(['maquina/detalhe']);

  }

  onRest(usuario: Usuario) {

    this.service.reset(usuario).subscribe({ next: () => this.router.navigate(['/']) })

  }

  onDelete(usuario: Usuario) {

    this.service.delete(usuario).subscribe({ next: () => this.router.navigate(['/']) })
  }



}

