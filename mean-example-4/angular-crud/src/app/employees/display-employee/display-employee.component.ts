import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { ActivatedRoute } from '@angular/router';
import { EmployeeTitlePipe } from '../employee-title.pipe';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.scss']
})
export class DisplayEmployeeComponent implements OnInit {
  
 @Input() employee: Employee;

 @Output() notify: EventEmitter<Employee> = new EventEmitter<Employee>();  
  
  private slectedEmployee: number;

  constructor( private _activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
      this.slectedEmployee = +this._activatedRoute.snapshot.paramMap.get('id');
  }

  handleClick(){
     this.notify.emit(this.employee);
  }



}
