
/**
 * Created by bibon on 1/2/2017.
 */
import {Routes, CanActivate, CanDeactivate}               from '@angular/router';
import {Injectable} from '@angular/core';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';
@Injectable()
export class CheckSaveFormGuard implements CanDeactivate<EmployeeDetailComponent>{
    canDeactivate(component:EmployeeDetailComponent){
        // alert("Ban chua luu du lieu");
        // return false;
        return true;
    }
}