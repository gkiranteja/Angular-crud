import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { EmployeeTitlePipe } from '../employee-title.pipe';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.scss']
})
export class DisplayEmployeeComponent implements OnInit {
  
 @Input() employee: Employee;
 @Input() searchTerm: string; 
 @Output() notifyDelete: EventEmitter<number> = new EventEmitter<number>();
  
  private slectedEmployee: number;

  confirmDelete = false;
  isHidden = false;

  constructor( private _activatedRoute: ActivatedRoute, private _router: Router, private _employeeService: EmployeeService ) { }

  ngOnInit() {
      this.slectedEmployee = +this._activatedRoute.snapshot.paramMap.get('id');
  }



  viewDetails(){
     this._router.navigate(['/employees', this.employee.id], {
          queryParams: {
              "searchTerm": this.searchTerm
          }
      })
  }


  editEmployee(){
     this._router.navigate(['/edit', this.employee.id]);
  }
  
  deleteEmployee(){
    this._employeeService.deleteEmployeeId(this.employee.id).subscribe(
        () => console.log(`Employee Id = ${this.employee.id} Deleted`),
        (err) => console.log(err)
    );
    this.notifyDelete.emit(this.employee.id);
  }



}
