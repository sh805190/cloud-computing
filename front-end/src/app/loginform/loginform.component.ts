import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 
  loginUser(e){
    var username = e.elements[0].value;
  }
}
