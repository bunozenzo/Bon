import {Component, OnInit} from '@angular/core';
import {AbcService} from "../services/abc.service";
import {Router, ActivatedRoute} from '@angular/router';
@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
    public employees: any[];
    public pages: number[];
    public currentPage: number;

    constructor(private abcSevice: AbcService,
                private router: Router,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {
            this.currentPage = params['pageNumber'];
            console.log(this.currentPage);
        });
        this.abcSevice.Getlist().subscribe((response: any) => {
                this.employees = response;
            }, error => {
                console.log("System arror API");
            }
        );
        this.pages = [1, 2, 3, 4, 5];

    }
}
