// Modulos
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../theme/theme.module';
import { FormsModule } from '@angular/forms';

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



@NgModule({
  declarations: [
    DashboardComponent,
    ServiciosComponent,
    AccountProfileComponent,
    ProfileDetailsComponent,
    ProfilePasswordComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ThemeModule,
    PipesModule,
    PagesRouting
  ]
})
export class PagesModule { }
