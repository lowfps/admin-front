import { Docente } from './docente';
import { Universidad } from './universidad';

export class DocenteUni {
  public codigoDocente: Docente;
  public codigoUniversidad: Universidad;


  constructor(codDocente: Docente, codUni: Universidad) {
    this.codigoDocente = codDocente;
    this.codigoUniversidad = codUni;
  }
}
