import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { Login } from 'src/app/model/login.model';
import { User } from 'src/app/model/user.model';

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
  user:User=new User();
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
    sessionStorage.removeItem("user");
this.loginService.loginVerification(this.loginForm.value).subscribe(data=>{
  this.user.id=data["id"];
  this.user.userName=data["userName"];
  this.user.role=data["role"];
console.log(this.user);
  sessionStorage.setItem("user",JSON.stringify(this.user));
this.router.navigate(['dashboard']);
}); 


  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

   
  }
}
