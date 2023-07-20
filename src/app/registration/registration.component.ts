import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  alert:boolean=false
  register = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private resto: RestoService) {}

  collection() {
    console.log(this.register.value);
    this.resto.registerUser(this.register.value).subscribe((result) => {
      console.log(result);
      this.alert=true
    });
  }
  closeAlert()
  {
    this.alert=false
  }
}
