// Modulos
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../theme/theme.module';
import { RouterModule } from '@angular/router';

// Componentes
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { NavComponent } from './nav/nav.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';



@NgModule({
  declarations: [
    NopagefoundComponent,
    NavComponent,
    BreadcrumbsComponent
  ],
  exports: [
    NopagefoundComponent,
    NavComponent,
    BreadcrumbsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ThemeModule
  ]
})
export class SharedModule { }
