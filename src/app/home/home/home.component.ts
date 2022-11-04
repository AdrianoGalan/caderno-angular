import { Router } from '@angular/router';
import { MaquinaService } from './../../maquina/maquina.service';
import { Maquina } from 'src/app/model/maquina';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {



  dataSource: Maquina[] = [];
  displayedColumns: string[] = ['sigla'];



  constructor(
    private service: MaquinaService,
    private router: Router

  ) {

  }

  ngOnInit(): void {

    this.service.list().subscribe({ next: (res) => this.dataSource = res })

  }

  onClick(maquina: any) {

    localStorage.setItem('sigla', maquina.sigla)
    this.router.navigate(['maquina/detalhe']);

  }




}

