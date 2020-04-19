import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-password',
  templateUrl: './profile-password.component.html',
  styles: [`
    .password-rules .mat-divider {
      position: unset !important;
    }

    .container {
      padding-top: 20px;
    }
  `
  ]
})
export class ProfilePasswordComponent implements OnInit {

  hide = true;
  hide2 = true;
  hide3 = true;

  constructor() { }

  ngOnInit(): void {
  }

}
