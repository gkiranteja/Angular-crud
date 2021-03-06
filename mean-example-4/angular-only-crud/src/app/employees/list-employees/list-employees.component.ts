import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit {

 employees: Employee[];
 filteredEmployees : Employee[];

 private _searchTerm: string;

 get searchTerm(): string{
    return this._searchTerm;
 }
 set searchTerm(value: string){
     this._searchTerm = value;
     this.filteredEmployees = this.filterEmployees(value)
 }

 filterEmployees(searchString: string){
     return this.employees.filter(employee => 
             employee.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
 }


  constructor( private _router: Router,
               private _activatedRoute: ActivatedRoute
  ) {

         this.employees = this._activatedRoute.snapshot.data['employeeList'];
            if (this._activatedRoute.snapshot.queryParamMap.has('searchTerm')){
                this.searchTerm = this._activatedRoute.snapshot.queryParamMap.get('searchTerm');
            } else {
                this.filteredEmployees = this.employees;
            }

   }

  ngOnInit() {
    
  }

  onDeleteNotification(id: number){
      const i = this.filteredEmployees.findIndex(e => e.id === id);
        if( i !== -1){
        this.filteredEmployees.splice(i, 1);
        }
    }



}
