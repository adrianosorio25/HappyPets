import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Guard
import { LoginGuardGuard } from '../services/guards/login-guard.guard';
import { AdminGuard } from '../services/service.index';
import { VerificaTokenGuard } from '../services/guards/verifica-token.guard';

// Componentes
import { NavComponent } from '../shared/nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { AccountProfileComponent } from './profile/account-profile/account-profile.component';
import { MantenimientoUsuariosComponent } from './mantenimiento-usuarios/mantenimiento-usuarios.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { PerfilComponent } from './perfil/perfil.component';

const PagesRoutes: Routes = [
  {
    path: '',
    component: NavComponent,
    canActivate: [ LoginGuardGuard ],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [VerificaTokenGuard],
        data: { titulo: 'Dashboard'}
      },
      { path: 'services', component: ServiciosComponent, data: { titulo: 'Servicios'} },
      { path: 'profile', component: AccountProfileComponent, data: { titulo: 'Perfil'} },
      { path: 'perfil', component: PerfilComponent, data: { titulo: 'Perfil'} },
      { path: 'busqueda/:termino', component: BusquedaComponent, data: { titulo: 'Buscador'} },
      // mantenimiento
      {
        path: 'users-setting',
        component: MantenimientoUsuariosComponent,
        canActivate: [ AdminGuard ],
        data: { titulo: 'Mantenimiento Usuarios'}
      },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(PagesRoutes)],
  exports: [RouterModule]
})
export class PagesRouting { }

