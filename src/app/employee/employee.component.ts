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
    public keyword:string;
    constructor(private abcSevice: AbcService,
                private router: Router,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.LoadData();
        this.activatedRoute.queryParams.subscribe(params => {
            this.currentPage = params['pageNumber'];
            console.log(this.currentPage);
        });
        this.pages = [1, 2, 3, 4, 5];

    }
    Search(){
        this.abcSevice.Search(this.keyword).subscribe((response: any) => {
                this.employees = response;
            }, error => {
                console.log("System arror API");
            }
        );
    }
    Delete(id:number){
        let confirmResult=confirm("Are you sure to delete employee?");
        if(confirmResult){
            this.abcSevice.Delete(id).subscribe(response=>{
              if(response){
                  alert("delete ok");
                  this.LoadData();
              }
            })
        }
    }
    LoadData(){
        this.abcSevice.Getlist().subscribe((response: any) => {
                this.employees = response;
            }, error => {
                console.log("System arror API");
            }
        );
    }

}
