import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Guard
import { LoginGuardGuard } from '../services/guards/login-guard.guard';

// Componentes
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { AccountProfileComponent } from './profile/account-profile/account-profile.component';
import { NavComponent } from '../shared/nav/nav.component';
import { MantenimientoUsuariosComponent } from './mantenimiento-usuarios/mantenimiento-usuarios.component';

const PagesRoutes: Routes = [
  {
    path: '',
    component: NavComponent,
    canActivate: [ LoginGuardGuard ],
    children: [
      { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard'} },
      { path: 'services', component: ServiciosComponent, data: { titulo: 'Servicios'} },
      { path: 'profile', component: AccountProfileComponent, data: { titulo: 'Perfil'} },
      // mantenimiento
      { path: 'users-setting', component: MantenimientoUsuariosComponent, data: { titulo: 'Mantenimiento Usuarios'} },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(PagesRoutes)],
  exports: [RouterModule]
})
export class PagesRouting { }
