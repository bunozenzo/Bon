import {Routes}               from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { DemoComponent } from './demo/demo.component';
import {HomeComponent} from './home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home',  component: HomeComponent },
    { path: 'demo',  component: EmployeeComponent },
    { path: 'emp', component: DemoComponent  }
];
