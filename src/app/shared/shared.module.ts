// Modulos
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../theme/theme.module';
import { RouterModule } from '@angular/router';

// Componentes
import { NavComponent } from './nav/nav.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ModalUploadComponent } from './modal-upload/modal-upload.component';

@NgModule({
  declarations: [
    NavComponent,
    NopagefoundComponent,
    BreadcrumbsComponent,
    ModalUploadComponent
  ],
  exports: [
    NavComponent,
    NopagefoundComponent,
    BreadcrumbsComponent,
    ModalUploadComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ThemeModule
  ]
})
export class SharedModule { }
