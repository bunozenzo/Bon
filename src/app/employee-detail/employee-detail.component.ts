import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute}               from '@angular/router';
import {Subscription} from 'rxjs';
import {AbcService} from "../services/abc.service";
@Component({
    selector: 'app-employee-detail',
    templateUrl: './employee-detail.component.html',
    styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit,OnDestroy {
    public _id: number;
    public subcription: Subscription;
    public employees1: any[];

    constructor(private router: Router,
                private activatedRouter: ActivatedRoute,
                private abcSevice: AbcService) {
    }

    ngOnInit() {
        // params cho phep lay params tu tren url tra ve 1 obsaveable
        this.subcription = this.activatedRouter.params.subscribe(params => {
            this._id = params['id'];
        });
        this.abcSevice.Getlistid(this._id).subscribe((response: any) => {
                this.employees1 = response;
            }, error => {
                console.log("System arror API");
            }
        )

    }

    ngOnDestroy() {
        //
        this.subcription.unsubscribe();
    }
}
