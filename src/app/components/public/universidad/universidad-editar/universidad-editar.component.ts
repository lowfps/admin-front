import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ARREGLO_UNIVERSIDADES } from 'src/app/mocks/universidad-mock';
import { Universidad } from 'src/app/models/universidad';

@Component({
  selector: 'app-universidad-editar',
  templateUrl: './universidad-editar.component.html',
  styleUrls: ['./universidad-editar.component.css']
})
export class UniversidadEditarComponent implements OnInit {
  public tmpBase64: any;
  public objUniversidad: Universidad;

  constructor(private toastr: ToastrService, private route: ActivatedRoute) {
    this.objUniversidad = new Universidad(0, '0', '', '');
  }
  //Generalmente se usa para consumir servicios
  ngOnInit(): void {
    this.route.paramMap.subscribe((parametro: ParamMap) => {

      let tmpObj: any;
      const dato = String(parametro.get('codUniversidad'));
      const datoNumerico = parseFloat(dato);

      tmpObj = ARREGLO_UNIVERSIDADES.find((univeridad) => univeridad.codigoUniversidad === datoNumerico );
      this.objUniversidad = tmpObj;
    });
  }

  public seleccionarFoto(input: any): any {
    if (!input.target.files[0] || input.target.files[0].length === 0) {
      return;
    }
    const mimeType = input.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      const parametros = {
        closeButton: true,
        enableHtml: true,
        progressBar: true,
        positionClass: 'toast-top-right',
        timeOut: 8000,
      };
      this.toastr.error(
        'Solo se permiten <strong>imágenes</strong>',
        'Advertencia',
        parametros
      );
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(input.target.files[0]);
    reader.onload = () => {
      this.tmpBase64 = reader.result;

      this.objUniversidad.logoBase64 = this.tmpBase64;
      this.objUniversidad.nombreLogo = input.target.files[0].name;
    };
  }

  public enviarInfo(fomr: NgForm): boolean {
    this.mensajeOk();
    return true;
  }

  public mensajeOk(): void {
    const parametros = {
      closeButton: true,
      enableHtml: true,
      progressBar: true,
      positionClass: 'toast-top-right',
      timeOut: 8000,
    };
    this.toastr.success(
      'Se ha actualizado correctamente el docente',
      'Éxito!',
      parametros
    );
  }
}
