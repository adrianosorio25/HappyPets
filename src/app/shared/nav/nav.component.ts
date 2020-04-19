import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/service.index';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  sideBarOpen = true;

  constructor(public _usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  sideBarToggler(event) {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
