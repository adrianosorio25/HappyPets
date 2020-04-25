import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  home: any = [
    {
      titulo: 'Home',
      submenu: [
        { titulo: 'Dashboard', url: '/dashboard', icon: 'dashboard'},
        { titulo: 'Profile', url: '/profile', icon: 'person'},
        { titulo: 'Logout', url: '/login', icon: 'power_settings_new'}
      ]
    }
  ];

  menu: any = [
    {
      titulo: 'Páginas',
      submenu: [
        { titulo: 'Servicios', url: '/services', icon: 'settings'},
        { titulo: 'Usuarios', url: '/users-setting', icon: 'people'}
      ]
    }
  ];

  constructor() { }
}
