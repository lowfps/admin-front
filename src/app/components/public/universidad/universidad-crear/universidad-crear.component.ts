import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ARREGLO_UNIVERSIDADES } from 'src/app/mocks/universidad-mock';
import { Universidad } from 'src/app/models/universidad';

@Component({
  selector: 'app-universidad-crear',
  templateUrl: './universidad-crear.component.html',
  styleUrls: ['./universidad-crear.component.css']
})
export class UniversidadCrearComponent implements OnInit {
  public tmpBase64: any;
  public objUniversidad: Universidad;

  constructor(private toastr: ToastrService, private router: Router) {
    this.objUniversidad = new Universidad(0, '', '', '');
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

      this.objUniversidad.logoBase64 = this.tmpBase64;
      this.objUniversidad.nombreLogo = input.target.files[0].name;
    };
  }

  public enviarInfo(fomr: NgForm): boolean {
    this.crearDocente();
    this.objUniversidad = new Universidad(0, '0', '', '');
    this.mensajeOk();
    //Routeo de redireccionamiento
    this.router.navigate(['/universidad/listar'])
    return true;
  }


  public crearDocente():void{
    this.objUniversidad.codigoUniversidad = ARREGLO_UNIVERSIDADES.length + 1;
    ARREGLO_UNIVERSIDADES.push(this.objUniversidad)
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
      'Se ha creado correctamente la institución',
      '',
      parametros
    );
  }

}
