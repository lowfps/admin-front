import { Component, OnInit } from '@angular/core';

import { ArregloPipe } from 'src/app/pipes/arreglo.pipe';

import { ARREGLO_DOCENTES } from '../../../mocks/docente-mock';
import { Docente } from '../../../models/docente';

@Component({
  selector: 'app-docente-admin',
  templateUrl: './docente-admin.component.html',
  styleUrls: ['./docente-admin.component.css'],
  providers: [ArregloPipe]
})
export class DocenteAdminComponent implements OnInit {
  public arrDocentes: Array<Docente>;
  public paginaActual: number;
  public cantidadMostrar: number;
  public cantidadPaginas: number;
  public cantidadTotalRegistros: number;

  constructor(private ordenar: ArregloPipe) {
    const PARAMETROS = ['codigo', 'desc'];
    this.arrDocentes = ordenar.transform(ARREGLO_DOCENTES, PARAMETROS);
    this.paginaActual = 1;
    this.cantidadMostrar = 10;
    this.cantidadTotalRegistros = this.arrDocentes.length;
    this.cantidadPaginas = Math.ceil(
      this.cantidadTotalRegistros / this.cantidadMostrar
    );
  }

  ngOnInit(): void {}
}
