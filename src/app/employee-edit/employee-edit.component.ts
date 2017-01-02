import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute}               from '@angular/router';
import {Subscription} from 'rxjs';
import {AbcService} from "../services/abc.service";
@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  public _id: number;
  public subcription: Subscription;
  public employees2: any[];

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
          this.employees2 = response;
        }, error => {
          console.log("System arror API");
        }
    )
  }
  SaveForm(){
  }

}
