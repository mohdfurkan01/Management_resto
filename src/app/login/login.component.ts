import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  alert:boolean=false

  login = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    address: new FormControl('')
  });

  constructor(private resto: RestoService) {}

  loginpage()
  {
    console.log(this.loginpage)
    this.resto.loginUser(this.login.value).subscribe((result) => {
      console.log(result);
      this.alert=true
  })
  }
  closeAlert()
  {
    this.alert=false
  }
}
