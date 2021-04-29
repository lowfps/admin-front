import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ARREGLO_DOCENTES } from 'src/app/mocks/docente-mock';
import { Docente } from 'src/app/models/docente';

@Component({
  selector: 'app-docente-editar',
  templateUrl: './docente-editar.component.html',
  styleUrls: ['./docente-editar.component.css'],
})
export class DocenteEditarComponent implements OnInit {
  public tmpBase64: any;
  public objDocente: Docente;

  constructor(private toastr: ToastrService, private route: ActivatedRoute) {
    this.objDocente = new Docente(0, 0, '', '', '');
  }
  //Generalmente se usa para consumir servicios
  ngOnInit(): void {
    this.route.paramMap.subscribe((parametro: ParamMap) => {

      let tmpObj: any;
      const dato = String(parametro.get('codDocente'));
      const datoNumerico = parseFloat(dato);

      tmpObj = ARREGLO_DOCENTES.find((docente) => docente.codigo === datoNumerico );
      this.objDocente = tmpObj;
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

      this.objDocente.fotoBase64 = this.tmpBase64;
      this.objDocente.nombreFoto = input.target.files[0].name;
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
