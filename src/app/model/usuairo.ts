import { Perfis } from "./perfis";

export class Usuario {

  id!: number;
  nome!: string;
  email!: string;
  senha!: string;
  perfis!: Perfis[];
  status!: number;
  restSenha!: number;

}
