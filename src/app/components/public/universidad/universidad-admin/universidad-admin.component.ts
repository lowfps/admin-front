import { Component, OnInit } from '@angular/core';
import { ARREGLO_UNIVERSIDADES } from 'src/app/mocks/universidad-mock';
import { Universidad } from 'src/app/models/universidad';
import { ArregloPipe } from 'src/app/pipes/arreglo.pipe';

@Component({
  selector: 'app-universidad-admin',
  templateUrl: './universidad-admin.component.html',
  styleUrls: ['./universidad-admin.component.css'],
  providers: [ArregloPipe]
})
export class UniversidadAdminComponent implements OnInit {
  public arrUniversidades: Array<Universidad>;
  public paginaActual: number;
  public cantidadMostrar: number;
  public cantidadPaginas: number;
  public cantidadTotalRegistros: number;

  constructor(private ordenar: ArregloPipe) {
    const PARAMETROS = ['codigoUniversidad', 'desc'];
    this.arrUniversidades = ordenar.transform(ARREGLO_UNIVERSIDADES, PARAMETROS);
    this.paginaActual = 1;
    this.cantidadMostrar = 10;
    this.cantidadTotalRegistros = this.arrUniversidades.length;
    this.cantidadPaginas = Math.ceil(
      this.cantidadTotalRegistros / this.cantidadMostrar
    );
  }

  ngOnInit(): void {}

}
