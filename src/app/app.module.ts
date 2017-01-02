import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {AbcService} from './services/abc.service';
import {LoginService } from './services/login.service';
import {EmployeeComponent} from './employee/employee.component';
import {DemoComponent} from './demo/demo.component';
import {RouterModule}   from '@angular/router';
import {routes}   from './app.routes';
import {HomeComponent} from './home/home.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { EmployeeOverviewComponent } from './employee-overview/employee-overview.component';
import { EmployProjectsComponent } from './employ-projects/employ-projects.component';
import { LoginComponent } from './login/login.component';
import { CheckLoginGuard } from './guards/check-login.guard';
import { CheckSaveFormGuard } from './guards/check-save-form.guard';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
@NgModule({
    declarations: [
        AppComponent,
        EmployeeComponent,
        DemoComponent,
        HomeComponent,
        EmployeeDetailComponent,
        NotfoundComponent,
        EmployeeOverviewComponent,
        EmployProjectsComponent,
        LoginComponent,
        EmployeeEditComponent,
        EmployeeAddComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes),
    ],
    providers: [AbcService,LoginService,CheckLoginGuard,CheckSaveFormGuard],
    bootstrap: [AppComponent]
})
export class AppModule {
}
