import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/service.index';
import { Usuario } from '../../../models/usuario.model';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styles: [`
    .profile-card {
      text-align: center;
    }

    .avatar {
      width: 144px;
      border-radius: 50%;
    }
  `
  ]
})
export class ProfileDetailsComponent implements OnInit {

  usuario: Usuario;

  constructor( private _usuarioService: UsuarioService ) { }

  ngOnInit(): void {
    this.usuario = this._usuarioService.usuario;
  }

}
