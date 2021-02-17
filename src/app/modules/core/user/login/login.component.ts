import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupName, Validators } from '@angular/forms'
import {ApiService} from 'src/app/services/api.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private apiService:ApiService
  ) { }

  loginForm = new FormGroup({
    phonenumber: new FormControl(null, { validators: [Validators.required] }),
    password: new FormControl(null, { validators: [Validators.required] }),
  })
  get checkLogin() {
    return this.loginForm.controls
  }
  logindata() {
    this.apiService.callAPI("post", this.loginForm.value, "api/users/login").subscribe((data) => {
      console.log('==================');
      console.log('data===> ', data)
    })
    console.log(this.loginForm.value);

  }
  ngOnInit(): void {
  }

}
