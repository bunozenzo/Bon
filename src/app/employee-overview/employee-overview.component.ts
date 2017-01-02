import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute}               from '@angular/router';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-employee-overview',
  templateUrl: './employee-overview.component.html',
  styleUrls: ['./employee-overview.component.css']
})
export class EmployeeOverviewComponent implements OnInit,OnDestroy {
  public subcription: Subscription;
  public parentid: number;
  constructor(
      private router: Router,
      private activatedRouter: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.subcription = this.activatedRouter.parent.params.subscribe(params => {
      this.parentid = params['id'];
    });
  }
  ngOnDestroy(){

  }

}
