export class Docente {

  public codigo: number;
  public documento: number;
  public nombreDocente: string;
  public nombreFoto: string;
  public fotoBase64: string;

  public constructor (cod: number, doc: number, nomDocente: string, nomFoto: string, base64: string){

  this.codigo = cod;
  this.documento = doc;
  this.nombreDocente = nomDocente;
  this.nombreFoto = nomFoto;
  this.fotoBase64 = base64;

  }
}

