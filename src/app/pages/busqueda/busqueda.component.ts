import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { Usuario } from '../../models/usuario.model';
import { Servicio } from '../../models/servicio.model';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [`
    mat-card{
      margin-right: 1%;
    }
    mat-icon {
      cursor: pointer;
      color: #3f51b5;
    }
    table {
      width: 100%;
    }
    .avatar {
      width: 50px;
      border-radius: 50%;
      padding-top: 5px;
    }
    .alert {
      background: rgba(24, 224, 198, .1);
      padding: 15px 15px;
    }
  `
  ]
})
export class BusquedaComponent implements OnInit {

  displayedColumns: string[] = ['imagen', 'nombre', 'edit'];

  displayedColumnsService: string[] = ['nombre', 'descripcion', 'edit'];

  usuarios: Usuario[] = [];
  servicios: Servicio[] = [];

  constructor(public activateRoute: ActivatedRoute, public http: HttpClient) {
    activateRoute.params
      .subscribe( params => {
        // tslint:disable-next-line: no-string-literal
        const termino = params['termino'];
        this.buscar(termino);
      });
  }

  ngOnInit(): void {
  }

  buscar(termino: string) {

    const url = URL_SERVICIOS + '/busqueda/todo/' + termino;

    this.http.get(url)
        .subscribe( (resp: any) => {
          this.usuarios = resp.usuarios;
          this.servicios = resp.servicios;
        });
  }

}
