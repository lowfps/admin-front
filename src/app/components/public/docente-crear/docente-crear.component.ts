import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ARREGLO_DOCENTES } from 'src/app/mocks/docente-mock';
import { ARREGLO_DOCENTEUNI } from 'src/app/mocks/docenteUni-mock';
import { Docente } from 'src/app/models/docente';

@Component({
  selector: 'app-docente-crear',
  templateUrl: './docente-crear.component.html',
  styleUrls: ['./docente-crear.component.css'],
})
export class DocenteCrearComponent implements OnInit {
  public tmpBase64: any;
  public objDocente: Docente;

  constructor(private toastr: ToastrService, private router: Router) {
    this.objDocente = new Docente(0, 0, '', '', '');
  }

  ngOnInit(): void {}

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
    this.crearDocente();
    this.objDocente = new Docente(0, 0, '', '', '');
    this.mensajeOk();
    //Routeo de redireccionamiento
    this.router.navigate(['/docente/listar'])
    return true;
  }


  public crearDocente():void{
    this.objDocente.codigo = ARREGLO_DOCENTES.length + 1;
    ARREGLO_DOCENTES.push(this.objDocente);
  }

  public mensajeOk():void{
    const parametros = {
      closeButton: true,
      enableHtml: true,
      progressBar: true,
      positionClass: 'toast-top-right',
      timeOut: 8000,
    };
    this.toastr.success(
      'Se ha creado correctamente el docente',
      '',
      parametros
    );
  }

}
