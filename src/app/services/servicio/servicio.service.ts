import { Injectable } from '@angular/core';
import { Servicio } from '../../models/servicio.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { URL_SERVICIOS } from 'src/app/config/config';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  servicio: Servicio;
  token: string;

  constructor(public http: HttpClient,
              public router: Router,
              private _snackbar: MatSnackBar) {}

  crearServicio( servicio: Servicio) {

    const url = URL_SERVICIOS + '/servicio';

    return this.http.post( url, servicio )
      .pipe(map( (resp: any) => {
        this._snackbar.open('Servicio Creado', resp.servicio.nombre, {
          duration: 2900,
          panelClass: ['success-snackbar']
        });
        return resp.usuario;
      })).pipe(catchError( err => {
        console.log(err);
        this._snackbar.open(err.error.mensaje, err.error.errors.message, {
          duration: 2900
        });
        // tslint:disable-next-line: deprecation
        return Observable.throw(err);
      }));
  }

  actualizarServicio(servicio: Servicio) {

    let url = URL_SERVICIOS + '/servicio/' + servicio._id;
    url += '?token=' + this.token;

    return this.http.put(url, servicio)
      .pipe(map( (resp: any) => {
        this._snackbar.open('Servicio Actualizado', resp.servicio.nombre, {
          duration: 2900,
          panelClass: ['info-snackbar']
        });

        return true;
      }));
  }

  cargarServicio(desde: number = 0) {
    const url = URL_SERVICIOS + '/servicio?desde=' + desde;

    return this.http.get(url);
  }

  buscarServicio(termino: string) {
    const url = URL_SERVICIOS + '/busqueda/coleccion/servicios/' + termino;

    return this.http.get(url)
        .pipe(map((resp: any) => resp.servicios));
  }

  borrarUsuario(id: string) {
    const url = URL_SERVICIOS + '/servicio/' + id;
    // url += '?token=' + this.token;

    return this.http.delete(url)
      .pipe(map( (resp: any) => {
        this._snackbar.open('Servicio Eliminado', resp.servicio.nombre, {
          duration: 2900,
          panelClass: ['danger-snackbar']
        });
        return true;
      }));
  }

}
