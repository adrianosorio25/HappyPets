import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServicioService } from '../../services/servicio/servicio.service';
import { AddServiciosComponent } from './dialog/add/add-servicios.component';
import { Servicio } from '../../models/servicio.model';
import Swal from 'sweetalert2';
import { EditServiciosComponent } from './dialog/edit/edit-servicios.component';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;


  servicios: Servicio[] = [];

  desde: number = 0;

  totalRegistros: number = 0;

  index: number;
  id: number;

  displayedColumns: string[] = ['nombre', 'descripcion', 'icono1', 'icono2'];

  constructor(public _servicioService: ServicioService,
              public dialog: MatDialog) {}

  ngOnInit(): void {
    this.cargarServicios();
  }

  actualizarServicio(servicio: Servicio) {
    this.dialog.open(EditServiciosComponent, {
      data: { servicios: this.servicios }
    }).afterClosed().subscribe(result => {
      this._servicioService.cargarServicio()
        .subscribe( resp => {
          this.cargarServicios();
        });
    });
  }

  addDialog() {
    this.dialog.open(AddServiciosComponent, {
      data: { servicios: this.servicios }
    }).afterClosed().subscribe(result => {
      this._servicioService.cargarServicio()
        .subscribe( resp => {
          this.cargarServicios();
        });
    });
  }

  cargarServicios() {
    this._servicioService.cargarServicio(this.desde)
      .subscribe( (resp: any) => {
        console.log(resp);
        this.totalRegistros = resp.total;
        this.servicios = resp.servicios;
      });
  }

  cambiarDesde(valor: number) {
    const desde = this.desde + valor;

    if (desde >= this.totalRegistros) {
      return;
    }

    this.desde += valor;
    this.cargarServicios();
  }

  buscarServicio(termino: string) {
    if (termino.length <= 0) {
      this.cargarServicios();
      return;
    }

    this._servicioService.buscarServicio(termino)
      .subscribe( (servicios: Servicio[]) => {
        this.servicios = servicios;
      });
  }

  borrarServicio(servicio: Servicio) {
    Swal.fire({
      title: '¿Esta Seguro?',
      text: 'Esta a punto de borrar a ' + servicio.nombre,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar!'
    }).then((borrar) => {
      if (borrar.value) {
        this._servicioService.borrarUsuario(servicio._id)
          .subscribe( resp => {
            this.cargarServicios();
          });
      }
    });
  }

}

