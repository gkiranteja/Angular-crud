import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../../models/employee.model';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  
 private _id: number; 
 employee: Employee;

  constructor( private _activatedRoute: ActivatedRoute,
               private _employeeService: EmployeeService,
               private _router: Router
   ) { }

  ngOnInit() {
      //snapshot approch is wont work because when click on next button it increments the id but it wont display the id values so that use observable
      // const id = +this._activatedRoute.snapshot.paramMap.get('id');
      // this.employee = this._employeeService.getEmployeeById(id);
      
       this._activatedRoute.paramMap.subscribe(params => {
           this._id = +params.get('id');
           this.employee = this._employeeService.getEmployeeById(this._id);
      });

  }

  viewNextEmploy(){
    if(this._id < 3){
       this._id = this._id + 1;
    } else {
       this._id = 1;
    }  
     this._router.navigate(['/employees', this._id], {
        queryParamsHandling: 'preserve'
     })
  }

}
