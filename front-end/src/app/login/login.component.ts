import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginBox: FormGroup;
  submitted = false;
  success = false;
  
  constructor( private formBuilder: FormBuilder, private httpClient: HttpClient, private router:Router ) { }

  ngOnInit() {
    this.LoginBox = this.formBuilder.group({
      EmployerId: ['', Validators.required],
      Password: ['', Validators.required]
    });
  }
  showMsg: boolean = false;

  onSubmit() {
    this.submitted = true;
    if (this.LoginBox.invalid) {
        return;
    } else {
      this.success = true;
      this.showMsg= true;
      this.router.navigate(['/submit2', { EmployerId: '123456', Password: '123456' }]);
      
    }
    // const  params = new  HttpParams({fromString:  '_page=1&_limit=1'});

    // this.customersObservable = this.http.request("GET","http://127.0.0.1:3000/customers",{responseType:"json",params});
  }
   
}
