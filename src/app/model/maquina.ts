import { Defeito } from './defeito';
import { Senha } from './senha';
import { Alarme } from './alarme';
import { Procedimento } from './procedimento';
export class Maquina {

  id!: number;
  sigla!: string;
  procedimentos!: Procedimento[];
  alarmes!: Alarme[];
  defeitos!: Defeito[];
  senhas!: Senha[];


}
