// Modulos
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../theme/theme.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Rutas
import { PagesRouting } from './pages.routing';

// Pipes
import { PipesModule } from '../pipes/pipes.module';

// Componentes
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { AccountProfileComponent } from './profile/account-profile/account-profile.component';
import { ProfileDetailsComponent } from './profile/profile-details/profile-details.component';
import { ProfilePasswordComponent } from './profile/profile-password/profile-password.component';
import { MantenimientoUsuariosComponent } from './mantenimiento-usuarios/mantenimiento-usuarios.component';
import { MantenimientoModalComponent } from './mantenimiento-usuarios/mantenimiento-modal.component';
import { BusquedaComponent } from './busqueda/busqueda.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ServiciosComponent,
    AccountProfileComponent,
    ProfileDetailsComponent,
    ProfilePasswordComponent,
    MantenimientoUsuariosComponent,
    MantenimientoModalComponent,
    BusquedaComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ThemeModule,
    PipesModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    PagesRouting
  ]
})
export class PagesModule { }
