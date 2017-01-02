import {Component, OnInit} from '@angular/core';
import {LoginService} from "./services/login.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public isLoggedin:boolean;
  constructor(
      private loginService:LoginService,
  ) { }
  ngOnInit(){
    this.isLoggedin=this.loginService.IsLogged();
  }
  Logout(){
    alert("ban da logout");
    this.loginService.SetLogin(false);
  }
}
