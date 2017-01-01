import { Component, OnInit } from '@angular/core';
import {AbcService} from "../services/abc.service";
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public employees:any[];
  constructor(private abcSevice : AbcService){

  }
  ngOnInit(){
    this.abcSevice.Getlist().subscribe((response:any)=>{
          this.employees=response;
        },error =>{
          console.log("System arror API");
        }
    )
  }
}
