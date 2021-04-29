import { Component, OnInit } from '@angular/core';
import { ARREGLO_UNIVERSIDADES } from 'src/app/mocks/universidad-mock';
import { Universidad } from 'src/app/models/universidad';
import { ArregloPipe } from 'src/app/pipes/arreglo.pipe';

@Component({
  selector: 'app-side-menu-universidad',
  templateUrl: './side-menu-universidad.component.html',
  styleUrls: ['./side-menu-universidad.component.css'],
  providers: [ArregloPipe]
})
export class SideMenuUniversidadComponent implements OnInit {

  public arrUniversidades: Array<Universidad>;
  public objUniversidadSeleccionada : Universidad;
  

  constructor(private ordenar: ArregloPipe) {
    this.arrUniversidades = [];
    this.objUniversidadSeleccionada = new Universidad(0,'','','');
   }

  ngOnInit(): void {
    const parametros = ['nombreDocente', 'asc'];
    this.arrUniversidades = this.ordenar.transform(ARREGLO_UNIVERSIDADES, parametros);
  }

  public seleccionarProfe(objD: Universidad):void{
    this.objUniversidadSeleccionada = objD;
  }

  public inicializar():void {
    const parametros = ['nombreDocente', 'asc'];
    this.arrUniversidades = this.ordenar.transform(ARREGLO_UNIVERSIDADES, parametros);
    this.objUniversidadSeleccionada = new Universidad(0,'','','');
  }

}
