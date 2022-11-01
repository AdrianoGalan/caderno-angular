import { Maquina } from './maquina';

export class Alarme {

  id!: number;
  codigo!: string;
  descricao!: string;
  solucao!: string;
  maquina!: Maquina;

}
