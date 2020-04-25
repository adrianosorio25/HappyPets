import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {
  SidebarService,
  UsuarioService,
  LoginGuardGuard,
  SubirArchivoService
} from './service.index';


@NgModule({
  declarations: [],
  providers: [
    SidebarService,
    UsuarioService,
    LoginGuardGuard,
    SubirArchivoService
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ServiceModule { }
