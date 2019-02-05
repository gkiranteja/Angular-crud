import { PipeTransform, Pipe } from '@angular/core';
import { Employee } from '../models/employee.model';

@Pipe({
    name: 'employeeFilter',
    pure: true 
})

export class EmployeeFilterPipe implements PipeTransform{

    private count = 0;

    transform(employees: Employee[], searchTerm: string): Employee[] {
        
        this.count++;
        console.log("this is the count value " + this.count) 


        if(!employees || !searchTerm){
            return employees;
        } 

        return employees.filter(employee => 
        employee.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
        
    }  
}