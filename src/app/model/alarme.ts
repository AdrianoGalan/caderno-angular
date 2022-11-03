import { Usuario } from './usuairo';
import { Maquina } from './maquina';

export class Alarme {

  id!: number;
  codigo!: string;
  descricao!: string;
  solucao!: string;
  autor!: Usuario;
  maquina!: Maquina;

}
