export class Universidad {
  public codigoUniversidad: number;
  public nombreUniversidad: string;
  public nombreLogo: string;
  public logoBase64: string;

  constructor(cod: number, nomUni: string, nomLogo: string, base64: string) {
    this.codigoUniversidad = cod;
    this.nombreUniversidad = nomUni;
    this.nombreLogo = nomLogo;
    this.logoBase64 = base64;
  }
}
