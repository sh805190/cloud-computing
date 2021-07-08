import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-submitone',
  templateUrl: './submitone.component.html',
  styleUrls: ['./submitone.component.scss']
})
export class SubmitoneComponent implements OnInit {
  Submit1: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient ) { }

  ngOnInit() {
    this.Submit1 = this.formBuilder.group({
      Name: ['', Validators.required],
      Address: ['', Validators.required],
      Email:['',Validators.required],
      Phonenum: ['', Validators.required],
      LoanAmount: ['', Validators.required]
    });
  }
 
  
  onSubmit() {
    
    console.log(this.Submit1.value);

    this.submitted = true;
    if (this.Submit1.invalid) {
        return;
    } else {
      let headers = new HttpHeaders({'Content-Type': 'application/json'});
      this.httpClient.post("https://assign5backend.azurewebsites.net/mortgage",
      {
      "name": this.Submit1.get('name').value,
      "address":this.Submit1.get('address').value,
      "email": this.Submit1.get('email').value ,
      "phoneNumber": this.Submit1.get('Phonenum').value,
      "loanAmount": this.Submit1.get('loanAmount').value

      },{
        headers: headers
      })
      .subscribe(
      data  => {
      console.log("POST Request is successful ", data);
      },
      error  => {

      console.log("Error", error);
      }
      );     
      this.success = true;
    }
}

}
