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
      width: 197.5px;
      border-radius: 50%;
    }
  `
  ]
})
export class ProfileDetailsComponent implements OnInit {

  usuario: Usuario;

  imagenSubir: File;

  imagenTempotal: string | ArrayBuffer;

  constructor( private _usuarioService: UsuarioService ) { }

  ngOnInit(): void {
    this.usuario = this._usuarioService.usuario;
  }

  seleccionImagen(archivo: File) {

    if (!archivo) {
      this.imagenSubir = null;
      return;
    }

    if ( archivo.type.indexOf('image') < 0) {
      this.imagenSubir = null;
      return;
    }

    this.imagenSubir = archivo;

    const reader = new FileReader();

    const urlImageTemp = reader.readAsDataURL(archivo);

    reader.onloadend = () => this.imagenTempotal = reader.result;

  }

  cambiarImagen() {

    this._usuarioService.cambiarImagen( this.imagenSubir, this.usuario._id);

  }

}
