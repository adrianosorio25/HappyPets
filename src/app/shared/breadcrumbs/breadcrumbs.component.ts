import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { SidebarService } from '../../services/service.index';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  titulo: string;

  constructor( private router: Router, private _sidebar: SidebarService ) {
    this.getDataRoute()
      .subscribe( data => {
        this.titulo = data.titulo;
      });
  }

  ngOnInit(): void {
  }

  getDataRoute() {
    return this.router.events.pipe(
      filter( evento => evento instanceof ActivationEnd),
      filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null),
      map( (evento: ActivationEnd) => evento.snapshot.data)
    );
  }

}
