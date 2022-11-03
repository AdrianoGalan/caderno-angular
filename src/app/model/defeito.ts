import { Usuario } from './usuairo';
import { Maquina } from './maquina';
export class Defeito {

  id!: number;
  descricao!: string;
  solucao!: string;
  autor!: Usuario;
  maquina!: Maquina;

}
