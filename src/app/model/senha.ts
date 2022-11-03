import { Usuario } from './usuairo';
import { Maquina } from './maquina';
export class Senha {

  id!: number;
  descricao!: string;
  login!: string;
  senha!: string;
  autor!: Usuario;
  maquina!: Maquina;
}
