import { Component, OnInit } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';
import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ServicioService } from '../../../../services/servicio/servicio.service';
import { Servicio } from '../../../../models/servicio.model';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-add-servicios',
  templateUrl: './add-servicios.component.html',
  styles: [`
    .text-danger {
      color: #f44336;
      font-size: 80%;
      margin-top: -0.5em;
      top: calc(100% - 1.7916666667em);
    }
    .btn {
      display: block;
      margin: auto;
      margin-top: 5px;
    }
    mat-form-field{
      width:300px;
    }
  `
  ]
})
export class AddServiciosComponent implements OnInit {

  forma: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(public _servicioService: ServicioService) { }

  ngOnInit(): void {
    this.forma = new FormGroup({
      nombre: new FormControl( null, Validators.required ),
      descripcion: new FormControl( null, Validators.required )
    });
  }

  public registrarServicio(): void {

    if ( this.forma.invalid ) {
      return;
    }

    console.log('Forma Valida', this.forma.valid );
    console.log( this.forma.value );

    const servicio  = new Servicio(
      this.forma.value.nombre,
      this.forma.value.descripcion
    );

    this._servicioService.crearServicio( servicio )
        .subscribe();
  }

}
