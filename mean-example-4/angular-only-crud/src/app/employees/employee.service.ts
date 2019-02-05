import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

import { Observable, Subject, throwError, pipe  } from 'rxjs';
import { of, merge } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';


@Injectable()

export class EmployeeService {

    constructor(private http: HttpClient) { }

    _url: string = "http://localhost:3000/employees/";
   
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

 getEmployees(): Observable<Employee[]> {
    //return of(this.listEmployee);
    return this.http.get<Employee[]>(this._url)
              // .pipe(catchError(this.handleError))
 }

// private handleError(errorResponse: HttpErrorResponse) {
//     if(errorResponse.error instanceof ErrorEvent) {
//        console.error('Client Side Error: ', errorResponse.error.message)
//     } else {
//        console.error('Server Side Error: ', errorResponse)
//     }

//     return new ErrorObservable('There is a problem with service. we ae notified & working on it.')
// }



 getEmployeeById(id: number): Observable<Employee> {
       return this.http.get<Employee>(`${this._url}/${id}`);
 }

 addEmployee(employee : Employee): Observable<Employee>{
         return this.http.post<Employee>(this._url, employee, {
             headers: new HttpHeaders({
                 'Content-Type': 'application/json'
             })
         });
 }


 updateEmployee(employee : Employee): Observable<void>{
         return this.http.put<void>(`${this._url}/${employee.id}`, employee, {
             headers: new HttpHeaders({
                 'Content-Type': 'application/json'
             })
         })   
 }



deleteEmployeeId(id: number){
    return this.http.delete<Employee>(`${this._url}/${id}`);
}


}