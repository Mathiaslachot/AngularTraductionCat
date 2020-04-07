import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import LoginService from "../services/LoginService";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isLogin;
  myForm: FormGroup;
  submitted = false;

  constructor(private loginService: LoginService, fb: FormBuilder) {
    this.myForm = fb.group({
      email: fb.control(""),
      password: fb.control("", [Validators.minLength(4)])
    });
    this.loginService.connected.subscribe(realLoaging => {
      this.isLogin = realLoaging;
    });
  }

  onSubmit() {
    this.loginService.connect(this.myForm.value);
    this.myForm.reset();
  }

}
