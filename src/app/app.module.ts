import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
//Imports
import {NgxPaginationModule} from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuSuperiorComponent } from './components/menu-superior/menu-superior.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { DocenteAdminComponent } from './components/public/docente-admin/docente-admin.component';
import { DocenteCrearComponent } from './components/public/docente-crear/docente-crear.component';
import { DocenteEditarComponent } from './components/public/docente-editar/docente-editar.component';
import { DocenteListarComponent } from './components/public/docente-listar/docente-listar.component';
import { DocenteMainComponent } from './components/public/docente-main/docente-main.component';
import { MenuSideComponent } from './components/private/menu-side/menu-side.component';
import { PrivateMainComponent } from './components/private/private-main/private-main.component';
import { DetalleComponent } from './components/private/detalle/detalle.component';
import { ArregloPipe } from './pipes/arreglo.pipe';
import { PrincipalUniversidadComponent } from './components/private/publica-universidad/principal-universidad/principal-universidad.component';
import { SideMenuUniversidadComponent } from './components/private/publica-universidad/side-menu-universidad/side-menu-universidad.component';
import { DetalleUniversidadComponent } from './components/private/publica-universidad/detalle-universidad/detalle-universidad.component';
import { LoginComponent } from './components/login/login.component';
import { UniversidadMainComponent } from './components/public/universidad/universidad-main/universidad-main.component';
import { UniversidadAdminComponent } from './components/public/universidad/universidad-admin/universidad-admin.component';
import { UniversidadCrearComponent } from './components/public/universidad/universidad-crear/universidad-crear.component';
import { UniversidadEditarComponent } from './components/public/universidad/universidad-editar/universidad-editar.component';

import { UniversidadListarComponent } from './components/public/universidad/universidad-listar/universidad-listar.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuSuperiorComponent,
    NotFoundComponent,
    HomeComponent,
    DocenteAdminComponent,
    DocenteCrearComponent,
    DocenteEditarComponent,
    DocenteListarComponent,
    DocenteMainComponent,
    MenuSideComponent,
    PrivateMainComponent,
    DetalleComponent,
    ArregloPipe,
    PrincipalUniversidadComponent,
    SideMenuUniversidadComponent,
    DetalleUniversidadComponent,
    LoginComponent,
    UniversidadMainComponent,
    UniversidadAdminComponent,
    UniversidadCrearComponent,
    UniversidadEditarComponent,
    UniversidadListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ToastrModule.forRoot(),
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
