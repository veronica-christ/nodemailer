import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  Form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  submitted = false;
  userType: any;
  myData!: any;
  fullname: any;
  email: any;
  id:any
  logedtype: any;
  logeduser: any;
  rememberMe!: boolean;
  errorMessage = '';
  

  constructor(private formBuilder: FormBuilder,
    private auth:AuthenticateService,
    private router:Router,
    private activeRoute:ActivatedRoute,) { }

  ngOnInit(): void {
    this.Form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(40)]],
    });
  }
  get f():{ [key: string]: AbstractControl }{
    return this.Form.controls;
  }

  onSubmit():void{
    this.submitted = true;
    let user = {
      email: this.Form.value.email,
      password: this.Form.value.password
    }
    this.auth.signin(user).subscribe((data:any)=>{
      this.myData=data;
      this.email = data.arrData[0].email;
      this.userType = data.arrData[0].usertype;
      this.fullname = data.arrData[0].firstname;
      this.id = data.arrData[0].userid;
      console.log(this.email);
      console.log(this.userType);

      Swal.fire(
        'Registration success',
        'Registration successull. You may proceed with login'
      );

       sessionStorage.setItem('user_details', data);
       localStorage.setItem('user_id', this.id);
       localStorage.setItem('username', this.fullname);
       localStorage.setItem('email', this.email);

       if(this.userType == 'coordinator'){
          this.logedtype =  "Logged user: "+this.fullname+" "+this.email;
          this.logeduser = "usertype as: "+this.userType 
          this.router.navigate(['/coordinator'])
       }else{
          this.logedtype =  "Logged user: "+this.fullname+" "+this.email;
          this.logeduser = "usertype as: "+this.userType;
          this.router.navigate(['/responded'])
       }
    },(err) => {
        this.errorMessage = err.message;
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="">Click here to Re-login'
        })
      }
    );
    console.log(JSON.stringify(this.Form.value));
  }
}

