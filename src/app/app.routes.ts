import {Routes}               from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { DemoComponent } from './demo/demo.component';
import {HomeComponent} from './home/home.component';
import {NotfoundComponent} from './notfound/notfound.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import {  EmployeeOverviewComponent } from './employee-overview/employee-overview.component';
import { EmployProjectsComponent } from './employ-projects/employ-projects.component';
import { LoginComponent } from './login/login.component';
import { CheckLoginGuard } from './guards/check-login.guard';
import {CheckSaveFormGuard} from "./guards/check-save-form.guard";
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home',  component: HomeComponent},
    { path: 'demo',  component: EmployeeComponent,canActivate:[CheckLoginGuard] },
    { path: 'login', component: LoginComponent  },
    { path: 'emp', component: DemoComponent  },
    { path: 'add', component: EmployeeAddComponent },
    { path: 'edit/:id', component: EmployeeEditComponent },
    { path: 'detail/:id', component: EmployeeDetailComponent,canDeactivate:[CheckSaveFormGuard],
        children:[
        { path: 'overview', component: EmployeeOverviewComponent  },
        { path: 'projects', component:  EmployProjectsComponent  },
    ]  },

    { path: '**', component: NotfoundComponent  }
];
