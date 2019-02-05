import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../../models/department.model';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
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

  employee: Employee = {
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
  }

  departments: Department[] = [
      {id: 1, name: 'Help Desk'},
      {id: 2, name: 'HR'},      
      {id: 3, name: 'IT'},      
      {id: 4, name: 'Payroll'},      
  ]

  constructor(private _employeService: EmployeeService, 
              private _router: Router
  ) { }

  ngOnInit() {
  }

  // saveEmployee(empForm: NgForm){
  //    this._employeService.saveEmployee(this.employee);
  //    empForm.reset();
  //    this._router.navigate(['list']);
  // }
  saveEmployee(){
    //  this._employeService.saveEmployee(this.employee);
    // //  this.createEmployeeForm.reset({
    // //     name: 'kiran',
    // //     contactPreference: 'phone'
    // //  });
    // this.createEmployeeForm.reset();
    //  this._router.navigate(['list']);

    const newEmployee = Object.assign({}, this.employee);
    this._employeService.saveEmployee(newEmployee);
    this.createEmployeeForm.reset();
    this._router.navigate(['list']);
  }



  togglePhotoPreview(){
     this.previewPhoto = !this.previewPhoto;
  }

}
