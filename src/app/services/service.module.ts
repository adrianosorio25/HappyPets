import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {
  SidebarService,
  UsuarioService,
  LoginGuardGuard
} from './service.index';


@NgModule({
  declarations: [],
  providers: [
    SidebarService,
    UsuarioService
  ],
  imports: [
    CommonModule,
    LoginGuardGuard,
    HttpClientModule
  ]
})
export class ServiceModule { }
