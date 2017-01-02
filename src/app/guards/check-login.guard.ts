/**
 * Created by bibon on 1/2/2017.
 */
import {Routes, CanActivate}               from '@angular/router';
import {Injectable} from '@angular/core';
import {LoginService} from "../services/login.service";
@Injectable()
export class CheckLoginGuard implements CanActivate{
    constructor(
        private loginService:LoginService,
    ) { }
    canActivate(){
        let status= this.loginService.IsLogged();
        return status;
    }
}