import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { UsuarioService } from '../../services/service.index';
import { Usuario } from '../../models/usuario.model';
import { Router } from '@angular/router';

// validacion error en el input de correo no valido
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.scss']
})
export class RegisterComponent implements OnInit {

  forma: FormGroup;

  hide = true;
  hide2 = true;

  matcher = new MyErrorStateMatcher();

  constructor( public _usuarioService: UsuarioService, public router: Router) { }

  sonIguales( campo1: string, campo2: string ) {

    return ( group: FormGroup ) => {

      const pass1 = group.controls[campo1].value;
      const pass2 = group.controls[campo2].value;

      if ( pass1 === pass2 ) {
        return null;
      }

      return {
        sonIguales: true
      };

    };
  }

  ngOnInit(): void {
    this.forma = new FormGroup({
      nombre: new FormControl( null, Validators.required ),
      correo: new FormControl( null, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')] ),
      password: new FormControl( null, Validators.required ),
      password2: new FormControl( null, Validators.required )
    }, { validators: this.sonIguales( 'password', 'password2') });
  }

  registrarUsuario() {

    if ( this.forma.invalid ) {
      return;
    }

    console.log('Forma Valida', this.forma.valid );
    console.log( this.forma.value );

    const usuario  = new Usuario(
      this.forma.value.nombre,
      this.forma.value.correo,
      this.forma.value.password
    );

    this._usuarioService.crearUsuario( usuario )
        .subscribe( resp => this.router.navigate(['/login']));
  }

}
