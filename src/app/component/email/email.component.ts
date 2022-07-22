import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../email/http.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
})
export class EmailComponent implements OnInit {
  
   
  submitted = false;
  Form = new FormGroup({
    emailbody: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  constructor(public http:HttpService){}
  ngOnInit(): void {
    
  }
  sendMail() {
    this.submitted = true;
    
    let user = {
      emailbody: this.Form.value.emailbody,
      email: this.Form.value.email
    };


    console.log(user)

    this.http.sendMail(user).subscribe((link)=>{
      console.table(link)
    })
   
  }
}


