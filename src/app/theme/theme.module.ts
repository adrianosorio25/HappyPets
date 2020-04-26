// Modulos
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Pipes
import { PipesModule } from '../pipes/pipes.module';

// Componentes
import { UserComponent } from './header/user.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserPanelComponent } from './sidebar/user-panel.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    HeaderComponent,
    UserComponent,
    SidebarComponent,
    UserPanelComponent
  ],
  exports: [
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    PipesModule,
    RouterModule
  ]
})
export class ThemeModule { }
