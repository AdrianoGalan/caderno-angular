import { MaquinaService } from './../maquina.service';
import { Component, OnInit } from '@angular/core';
import { Maquina } from 'src/app/model/maquina';

@Component({
  selector: 'app-maquina',
  templateUrl: './maquina.component.html',
  styleUrls: ['./maquina.component.scss']
})
export class MaquinaComponent implements OnInit {

  maquina: Maquina = new Maquina();

  constructor(private service: MaquinaService) { }

  ngOnInit(): void {

 this.service.list().subscribe({ next: (m) => console.log(m)});

  }

}
