import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ARREGLO_DOCENTEUNI } from 'src/app/mocks/docenteUni-mock';
import { Docente } from 'src/app/models/docente';
import { DocenteUni } from 'src/app/models/docenteUni';
import { Universidad } from 'src/app/models/universidad';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  public arregloUniversidadesDocente: Array<DocenteUni>;
  public cantidadUniversidades: number;
  public docenteUniSeleccionado: DocenteUni;
  public tmp: any;

  constructor(private route: ActivatedRoute) {
    this.arregloUniversidadesDocente = [];
    this.cantidadUniversidades = 0;
    this.docenteUniSeleccionado = new DocenteUni(
      new Docente(0, 0, '', '', ''),
      new Universidad(0, '', '', '')
    );
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((parametro: ParamMap) => {
      this.tmp = parametro.get('codDocente');
      const docenteCodigo = parseFloat(this.tmp);

      if (Number.isNaN(docenteCodigo) || docenteCodigo == 0) {
        this.arregloUniversidadesDocente = ARREGLO_DOCENTEUNI;
        this.tmp = 0;
      } else {
        this.arregloUniversidadesDocente = ARREGLO_DOCENTEUNI.filter(
          (miDocenteUni) => miDocenteUni.codigoDocente.codigo === docenteCodigo
        );
      }

      this.cantidadUniversidades = this.arregloUniversidadesDocente.length;
      this.docenteUniSeleccionado = new DocenteUni(
        new Docente(0, 0, '', '', ''),
        new Universidad(0, '', '', '')
      );
    });
  }

  public seleccionardocenteUni(objPU: DocenteUni):void {
    this.docenteUniSeleccionado = objPU;
  }

}
