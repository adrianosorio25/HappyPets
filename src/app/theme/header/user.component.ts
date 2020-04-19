import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/service.index';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./header.component.scss']
})
export class UserComponent implements OnInit {

  usuario: Usuario;

  constructor(public _usuarioService: UsuarioService) {
  }

  ngOnInit(): void {
    this.usuario = this._usuarioService.usuario;
  }

}
