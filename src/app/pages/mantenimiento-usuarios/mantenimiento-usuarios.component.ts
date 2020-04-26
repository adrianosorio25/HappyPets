import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/service.index';
import Swal from 'sweetalert2';
import { MantenimientoModalComponent } from './mantenimiento-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-mantenimiento-usuarios',
  templateUrl: './mantenimiento-usuarios.component.html',
  styleUrls: ['./mantenimiento-usuarios.component.scss']
})
export class MantenimientoUsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];

  desde: number = 0;

  totalRegistros: number = 0;

  displayedColumns: string[] = ['imagen', 'email', 'nombre', 'role', 'auth', 'icono1', 'icono2'];

  constructor(public _usuarioService: UsuarioService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  openDialog() {
    console.log('Dialogo');
    this.dialog.open(MantenimientoModalComponent);
  }

  cargarUsuarios() {
    this._usuarioService.cargarUsuarios(this.desde)
      .subscribe( (resp: any) => {
        console.log(resp);
        this.totalRegistros = resp.total;
        this.usuarios = resp.usuarios;
      });
  }

  cambiarDesde(valor: number) {
    const desde = this.desde + valor;

    if (desde >= this.totalRegistros) {
      return;
    }

    this.desde += valor;
    this.cargarUsuarios();
  }

  buscarUsuario(termino: string) {
    if (termino.length <= 0) {
      this.cargarUsuarios();
      return;
    }

    this._usuarioService.buscarUsuarios(termino)
      .subscribe( (usuarios: Usuario[]) => {
        this.usuarios = usuarios;
      });
  }

  borrarUsuario(usuario: Usuario) {
    if (usuario._id === this._usuarioService.usuario._id) {
      Swal.fire('No puede borrar usuario', 'No se puede borrar asi mismo', 'error');
      return;
    }

    Swal.fire({
      title: '¿Esta Seguro?',
      text: 'Esta a punto de borrar a ' + usuario.nombre,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar!'
    }).then((borrar) => {
      if (borrar.value) {
        this._usuarioService.borrarUsuario(usuario._id)
          .subscribe( resp => {
            this.cargarUsuarios();
          });
      }
    });

  }

  guardarUsuario(usuario: Usuario){

    this._usuarioService.actualizarusuario(usuario)
      .subscribe();
  }

}
