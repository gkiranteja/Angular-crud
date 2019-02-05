import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';
import { EmployeeService } from './employee.service';

@Injectable()

export class employeeDetailGuardService implements CanActivate {

    constructor(private _employeeService: EmployeeService, private _router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const employeeExist = !!this._employeeService.getEmployees(+route.paramMap.get('id'));
        
        if(employeeExist){
            return true;
        } else {
            this._router.navigate(['nouser']);
            return false;
        }
    }

}