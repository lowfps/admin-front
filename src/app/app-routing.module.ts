import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DetalleComponent } from './components/private/detalle/detalle.component';
import { PrivateMainComponent } from './components/private/private-main/private-main.component';
import { DetalleUniversidadComponent } from './components/private/publica-universidad/detalle-universidad/detalle-universidad.component';
import { PrincipalUniversidadComponent } from './components/private/publica-universidad/principal-universidad/principal-universidad.component';
import { DocenteAdminComponent } from './components/public/docente-admin/docente-admin.component';
import { DocenteCrearComponent } from './components/public/docente-crear/docente-crear.component';
import { DocenteEditarComponent } from './components/public/docente-editar/docente-editar.component';
import { DocenteListarComponent } from './components/public/docente-listar/docente-listar.component';
import { DocenteMainComponent } from './components/public/docente-main/docente-main.component';
import { UniversidadAdminComponent } from './components/public/universidad/universidad-admin/universidad-admin.component';
import { UniversidadCrearComponent } from './components/public/universidad/universidad-crear/universidad-crear.component';
import { UniversidadEditarComponent } from './components/public/universidad/universidad-editar/universidad-editar.component';
import { UniversidadListarComponent } from './components/public/universidad/universidad-listar/universidad-listar.component';
import { UniversidadMainComponent } from './components/public/universidad/universidad-main/universidad-main.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'docente', component: DocenteMainComponent, children:[
    {path: 'admin', component: DocenteAdminComponent},
    {path: 'crear', component: DocenteCrearComponent},
    {path: 'editar/:codDocente', component: DocenteEditarComponent},
    {path: 'listar', component: DocenteListarComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', component: NotFoundComponent}
  ]},
  {path: 'universidad', component: UniversidadMainComponent, children:[
    {path: 'admin', component: UniversidadAdminComponent},
    {path: 'crear', component: UniversidadCrearComponent},
    {path: 'editar/:codUniversidad', component: UniversidadEditarComponent},
    {path: 'listar', component: UniversidadListarComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', component: NotFoundComponent}
  ]},
  {
    path: 'privado',
    component: PrivateMainComponent,
    children: [
      { path: 'detalle', component: DetalleComponent },
      { path: 'detalle/:codDocente', component: DetalleComponent },
      { path: '', redirectTo: 'detalle', pathMatch: 'full' },
      { path: '**', component: NotFoundComponent },
    ],
  },
  {
    path: 'publica-universidad', component: PrincipalUniversidadComponent, children:[
      {path: 'detalle', component: DetalleUniversidadComponent},
      {path: 'detalle/:codUniversidad', component: DetalleUniversidadComponent},
      { path: '', redirectTo: 'detalle', pathMatch: 'full' },
      { path: '**', component: NotFoundComponent },
    ]
  },

  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
