import { Component, OnInit } from '@angular/core';
import { ARREGLO_DOCENTES } from 'src/app/mocks/docente-mock';
import { Docente } from 'src/app/models/docente';
import { ArregloPipe } from 'src/app/pipes/arreglo.pipe';

@Component({
  selector: 'app-menu-side',
  templateUrl: './menu-side.component.html',
  styleUrls: ['./menu-side.component.css'],
  providers: [ArregloPipe]
})
export class MenuSideComponent implements OnInit {

  public arrDocentes: Array<Docente>;
  public objDocenteSeleccionado : Docente;
  

  constructor(private ordenar: ArregloPipe) {
    this.arrDocentes = [];
    this.objDocenteSeleccionado = new Docente(0,0,'','','');
   }

  ngOnInit(): void {
    const parametros = ['nombreDocente', 'asc'];
    this.arrDocentes = this.ordenar.transform(ARREGLO_DOCENTES, parametros);
  }

  public seleccionarProfe(objD: Docente):void{
    this.objDocenteSeleccionado = objD;
  }

  public inicializar():void {
    const parametros = ['nombreDocente', 'asc'];
    this.arrDocentes = this.ordenar.transform(ARREGLO_DOCENTES, parametros);
    this.objDocenteSeleccionado = new Docente(0,0,'','','');
  }
}
