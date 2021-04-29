import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ARREGLO_DOCENTEUNI } from 'src/app/mocks/docenteUni-mock';
import { Docente } from 'src/app/models/docente';
import { DocenteUni } from 'src/app/models/docenteUni';
import { Universidad } from 'src/app/models/universidad';



@Component({
  selector: 'app-detalle-universidad',
  templateUrl: './detalle-universidad.component.html',
  styleUrls: ['./detalle-universidad.component.css']
})
export class DetalleUniversidadComponent implements OnInit {
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
      this.tmp = parametro.get('codUniversidad');
      const universidadCodigo = parseFloat(this.tmp);

      if (Number.isNaN(universidadCodigo) || universidadCodigo == 0) {
        this.arregloUniversidadesDocente = ARREGLO_DOCENTEUNI;
        this.tmp = 0;
      } else {
        this.arregloUniversidadesDocente = ARREGLO_DOCENTEUNI.filter(
          (miDocenteUni) => miDocenteUni.codigoUniversidad.codigoUniversidad === universidadCodigo
        );
      }

      this.cantidadUniversidades = this.arregloUniversidadesDocente.length;
      this.docenteUniSeleccionado = new DocenteUni(
        new Docente(0, 0, '', '', ''),
        new Universidad(0, '', '', '')
      );
    });
  }

  public seleccionardocenteUni(objUP: DocenteUni):void {
    this.docenteUniSeleccionado = objUP;
  }
}
