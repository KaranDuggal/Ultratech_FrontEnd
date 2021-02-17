import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupName, Validators } from '@angular/forms'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }
  signupForm = new FormGroup({
    firstname: new FormControl(null, { validators: [Validators.required] }),
    lastname: new FormControl(null, { validators: [Validators.required] }),
    phonenumber: new FormControl(null, { validators: [Validators.required] }),
    email: new FormControl(null, { validators: [Validators.required, Validators.email] }),
    password: new FormControl(null, { validators: [Validators.required] }),
  })
  get checkSignup() {
    return this.signupForm.controls
  }
  signupdata(){
    // this.apiService.callAPI("post",this.signupForm.value,"api/user/signup").subscribe((data)=>{
    //   console.log('==================');
    //   console.log('data===> ', data)
    //   console.log('data===> ', data)
    // })
    console.log(this.signupForm.value);
    
  }
  ngOnInit(): void {
  }

}