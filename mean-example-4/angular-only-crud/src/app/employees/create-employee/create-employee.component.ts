import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../../models/department.model';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  
  //gender = 'male';
  //isActive = true;
  //department = "3";

  @ViewChild('employeeForm') public createEmployeeForm: NgForm;

  previewPhoto = false;

  public employee: Employee;

  panelTitle: string;

  departments: Department[] = [
      {id: 1, name: 'Help Desk'},
      {id: 2, name: 'HR'},      
      {id: 3, name: 'IT'},      
      {id: 4, name: 'Payroll'},      
  ]

  constructor( private _employeeService: EmployeeService, 
              private _router: Router,
              private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
      this._activatedRoute.paramMap.subscribe(parameterMap => {
          const id = +parameterMap.get('id');
          this.getEmployee(id);
      });
  }

  
  private getEmployee(id: number) {
     if (id === 0){
         this.employee = {
              id: null,
              name: null,
              gender: null,
              email: null,
              phoneNumber: null,
              contactPreference: null,
              dateOfBirth: null,
              department: 'select',
              isActive: null,
              photoPath :null
          }; 
          this.panelTitle = 'Create Employee';
          this.createEmployeeForm.reset();
     } else {
             this.panelTitle = 'Edit Employee';
             this._employeeService.getEmployeeById(id).subscribe(
                 (employee) => this.employee = employee,
                 (err: any) => console.log(err)
             )
          }
  }



  saveEmployee(){
     if(this.employee.id == null){
         this._employeeService.addEmployee(this.employee).subscribe(
            (data: Employee) => { 
                console.log(data);
                this.createEmployeeForm.reset();
                this._router.navigate(['list']);
        },
            (error: any) => console.log(error)
        );
     } else{
         this._employeeService.updateEmployee(this.employee).subscribe(
            () => { 
               this.createEmployeeForm.reset();
                this._router.navigate(['list']);
            },
            (error: any) => console.log(error)
        );
     }
  }



  togglePhotoPreview(){
     this.previewPhoto = !this.previewPhoto;
  }

}
