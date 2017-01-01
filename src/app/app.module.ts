import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {AbcService} from './services/abc.service';
import {EmployeeComponent} from './employee/employee.component';
import {DemoComponent} from './demo/demo.component';
import {RouterModule}   from '@angular/router';
import {routes}   from './app.routes';
import {HomeComponent} from './home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        EmployeeComponent,
        DemoComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes),
    ],
    providers: [AbcService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
