import { Usuario } from './usuairo';
import { Maquina } from './maquina';
export class Procedimento {
  id!: number;
  descricao!: string;
  procedimento!: string;
  autor!: Usuario;
  maquina!: Maquina;

}
