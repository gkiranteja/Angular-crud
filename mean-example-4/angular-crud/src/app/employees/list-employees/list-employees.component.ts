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
 dataFromChild: Employee;
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

    //   this._employeeService.getEmployees().subscribe( (empList) => {
    //        this.employees = empList;

    //        if (this._activatedRoute.snapshot.queryParamMap.has('searchTerm')){
    //             this.searchTerm = this._activatedRoute.snapshot.queryParamMap.get('searchTerm');
    //         } else {
    //             this.filteredEmployees = this.employees;
    //         }
    //   } )

      
    //   console.log(this._activatedRoute.snapshot.queryParamMap.has('searchTerm'));
    //   console.log(this._activatedRoute.snapshot.queryParamMap.get('searchTerm'));
    //   console.log(this._activatedRoute.snapshot.queryParamMap.getAll('searchTerm'));
    //   console.log(this._activatedRoute.snapshot.queryParamMap.keys);
    
  }

  // handleNotify(eventData: Employee){
  //    this.dataFromChild = eventData;
  // }


  onClick(employeeId: number){
      this._router.navigate(['/employees', employeeId], {
          queryParams: {
              "searchTerm": this.searchTerm, "testParam": "testValue"
          }
      })
  }

  nameChange(){
      this.employees[0].name = "Joker";
      this.filteredEmployees = this.filterEmployees(this.searchTerm);
    //   const newEmployeeArray: Employee[] = Object.assign([], this.employees)
    //   newEmployeeArray[0].name = "Joker"; 
    //   this.employees = newEmployeeArray;
  }

}
