import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute}               from '@angular/router';
import {AbcService} from "../services/abc.service";
@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  public employees2: any;

  constructor(private router: Router,
              private activatedRouter: ActivatedRoute,
              private abcSevice: AbcService) {
  }

  ngOnInit() {
    // params cho phep lay params tu tren url tra ve 1 obsaveable
    this.employees2={};
  }
  SaveForm(){
    this.abcSevice.Add(this.employees2).subscribe(response=>{
      if(response){
        alert('add success');
        this.router.navigate(['/demo'])
      }
    })
  }
  GotoDemo(){
    this.router.navigate(['demo']);
  }}
