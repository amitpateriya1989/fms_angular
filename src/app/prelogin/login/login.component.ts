import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { Login } from 'src/app/model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  isLoggedIn: boolean = false;
  loginMessage;
  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private loginService:LoginService
    ) { }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
   
/* this.loginService.loginVerification(this.loginForm.value).subscribe(data=>{
console.log(data);
}); */

this.router.navigate(['dashboard']);
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userId: ['', [Validators.required]],
      userPwd: ['', [Validators.required]]
    });

   
  }
}
