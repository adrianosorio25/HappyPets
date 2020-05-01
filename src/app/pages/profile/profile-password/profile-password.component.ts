import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../models/usuario.model';
import { UsuarioService } from 'src/app/services/service.index';

@Component({
  selector: 'app-profile-password',
  templateUrl: './profile-password.component.html',
  styles: [`
    .password-rules .mat-divider {
      position: unset !important;
    }

    .container {
      padding-top: 20px;
    }
  `
  ]
})
export class ProfilePasswordComponent implements OnInit {

  usuario: Usuario;

  hide = true;
  hide2 = true;
  hide3 = true;

  constructor(public _usuarioService: UsuarioService) {
    this.usuario = this._usuarioService.usuario;
  }

  ngOnInit(): void {
  }

  guardar(usuario: Usuario) {
    this.usuario.nombre = usuario.nombre;

    if (!this.usuario.google) {
      this.usuario.email = usuario.email;
      this.usuario.password = usuario.password;
    }

    this._usuarioService.actualizarUsuario(this.usuario)
      .subscribe();
  }

}
