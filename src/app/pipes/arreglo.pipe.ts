import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arreglo',
})
export class ArregloPipe implements PipeTransform {
  transform(arregloExterno: Array<any>, params: Array<string>): Array<any> {

    const CAMPO = params[0];
    const ORDEN = params[1];

    return arregloExterno.sort(this.ordenarArreglo(CAMPO, ORDEN));
  }

  public ordenarArreglo(campo: string, orden = 'ASC') {
    return (arregloA: any, arregloB: any) => {
      if (!arregloA.hasOwnProperty(campo)) {
        return 0;
      }

      let obj1 = arregloA[campo];
      let obj2 = arregloB[campo];

      const ORDEN_FINAL = orden.toUpperCase();

      if (typeof arregloA[campo] === 'string') {
        obj1 = arregloA[campo].toUpperCase();
        obj2 = arregloB[campo].toUpperCase();
      }

      let resultado = 0;

      if (obj1 > obj2) {
        resultado = 1;
      } else if (obj1 < obj2) {
        resultado = -1;
      }

      return ORDEN_FINAL === 'ASC' ? resultado : resultado * -1;
    };
  }
}
