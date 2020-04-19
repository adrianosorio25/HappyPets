import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  usuario: Usuario;

  constructor( private _usuarioService: UsuarioService ) {}

  ngOnInit(): void {
    this.usuario = this._usuarioService.usuario;
  }

}
