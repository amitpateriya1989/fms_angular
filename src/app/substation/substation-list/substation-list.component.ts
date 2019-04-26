import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-substation-list',
  templateUrl: './substation-list.component.html',
  styleUrls: ['./substation-list.component.css']
})
export class SubstationListComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
add(){
  this.router.navigate(['substation-add']);
}
edit(){
  this.router.navigate(['substation-edit']);
}
}
