import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submittwo',
  templateUrl: './submittwo.component.html',
  styleUrls: ['./submittwo.component.scss']
})
export class SubmittwoComponent implements OnInit {
  submitTwoForm: FormGroup;
  submitted = false;
  success = false;

  states: Array<String> =['True','False'];

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient, private router:Router) { }

  ngOnInit() {
    this.submitTwoForm = this.formBuilder.group({
      mortgaeId: ['', Validators.required],
      address:['',Validators.required]
    });
  }

  onSubmit() {

    console.log(this.submitTwoForm.value);
    this.submitted = true;
    console.log("submitform", this.submitTwoForm);
    if (this.submitTwoForm.invalid) {
        return;
    } else {
      
      this.httpClient.post("https://assign5backend.azurewebsites.net/employer",
      {
       
        "mortgaeId": this.submitTwoForm.get('mortgaeId').value,
        "address": this.submitTwoForm.get('address').value,
        "acceptedToShareInfo": true  
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
  
  handleClick() {
    this.router.navigate(['/submit1', { email: 'fwf', Password: 'wfef' }]);
    // console.log('Click!');
  }
}
