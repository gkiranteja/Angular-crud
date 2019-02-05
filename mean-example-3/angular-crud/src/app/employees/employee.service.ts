import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable()

export class EmployeeService {
   
   private listEmployee: Employee[] = [
     {
       id: 1,
        name: "kiran",
        gender: "Male",
        contactPreference: "Email",
        email: 'kiran@g.com',
        dateOfBirth: new Date('09/10/1992'),
        department: "1",
        isActive: true,
        photoPath : "assets/images/a.jpg"
     },
     {
       id: 2,
        name: "Mary",
        gender: "Female",
        contactPreference: "Phone",
        phoneNumber: 12345,
        dateOfBirth: new Date('09/10/1932'),
        department: "2",
        isActive: true,
        photoPath : "assets/images/b.jpg"
     },
     {
       id: 3,
        name: "Jhon",
        gender: "Male",
        contactPreference: "Email",
        email: 'jhon@g.com',
        dateOfBirth: new Date('10/01/1942'),
        department: "3",
        isActive: true,
        photoPath : "assets/images/c.jpg"
     }
 ];

 getEmployees(): Employee[] {
    return this.listEmployee;
 }

 saveEmployee(employee : Employee){
     this.listEmployee.push(employee);
 }

}