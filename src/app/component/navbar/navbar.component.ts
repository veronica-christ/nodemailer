import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
 

  constructor( private router:Router) { }

  ngOnInit(): void {
  }
  username = localStorage.getItem('username')
  email = localStorage.getItem('email')
  login = localStorage.getItem('islogged')
  usertpe = localStorage.getItem('usertype')

  signout(): void{
    if(this.login == 'false')
    {
      this.router.navigate(['signin']);
      return;
    }  
    
  }
}
