import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public userName:string=null;
  public role:string=null;
  constructor() { }

  ngOnInit() {
    let userCredentials=JSON.parse(sessionStorage.getItem('user'));
    this.userName=userCredentials.userName;
    this.role=userCredentials.role;
  }

}
