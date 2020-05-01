import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../../../services/servicio/servicio.service';
import { Servicio } from '../../../../models/servicio.model';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, FormGroup, Validators } from '@angular/forms';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-edit-servicios',
  templateUrl: './edit-servicios.component.html',
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
export class EditServiciosComponent implements OnInit {

  servicio: Servicio[] = [];
  matcher = new MyErrorStateMatcher();

  constructor(public _servicioService: ServicioService) { }

  ngOnInit(): void {
  }

}
