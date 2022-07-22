import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from './utils/must-match.validator';
import {AuthenticateService} from 'src/app/services/authenticate.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  Form = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    phonenumber: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    usertype: new FormControl(''),
  });
  submitted = false;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private formBuilder: FormBuilder, 
    private userService : AuthenticateService, 
    private router:Router) { }

  ngOnInit(): void {
    this.Form = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phonenumber:  ['', [Validators.required, Validators.pattern('[0-9]{3}-[0-9]{3}-[0-9]{4}'), Validators.maxLength(12)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]],
      confirmpassword: ['', Validators.required],
      usertype: ['', Validators.required],
    },
    );
  }
  get f():{ [key: string]: AbstractControl }{
    return this.Form.controls;
  }

  onSubmit():void{
    this.submitted = true;
    let usertype = this.Form.value.usertype;
    let status = true;

    let user = {
      firstname : this.Form.value.firstname,
      lastname: this.Form.value.lastname,
      email: this.Form.value.email,
      phonenumber : this.Form.value.phonenumber,
      status : status,
      password : this.Form.value.password,
    }

    this.userService.signup(user, usertype).subscribe({
      next:data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        Swal.fire(
          'Registration success',
          'Registration successull. You may proceed with login'
          );
        this.router.navigate(['/signin']);
      },
      error: err => {
        this.errorMessage = err.error.message;
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="">Click here to Re-register'
        })
      }
    });

    console.log(JSON.stringify(this.Form.value));
  }
}
