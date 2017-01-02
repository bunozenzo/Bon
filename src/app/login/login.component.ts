import { Component, OnInit } from '@angular/core';
import {Router}               from '@angular/router';
import {LoginService} from "../services/login.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
      private  router:Router,
      private loginService:LoginService,
  ) { }

  ngOnInit() {
  }
  Checklogin(value:any){
    if(value.username=="admin" && value.password=="123"){
      this.loginService.SetLogin(true);
      this.router.navigate(['/']);
    }
    // this.router.navigate(['/']);
  }
}
