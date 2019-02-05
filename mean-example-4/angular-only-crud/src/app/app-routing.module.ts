import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeesComponent } from './employees/list-employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee/create-employee.component';
import { CreateEmployeeCanDeactivateGuardService } from './employees/create-employee-can-deactivate-guard.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { EmployeeResolverService } from  './employees/employee-resolver.service';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';

const routes: Routes = [
   { path: 'list', 
     component: ListEmployeesComponent,
     resolve: { employeeList : EmployeeResolverService } 
   },
   { 
     path: 'edit/:id', 
     component: CreateEmployeeComponent,
     canDeactivate: [CreateEmployeeCanDeactivateGuardService] 
    },
   { path: 'employees/:id', 
     component: EmployeeDetailsComponent
   },
   { path: '', redirectTo: '/list', pathMatch: 'full' },
   { path: 'nouser', component: PageNotFoundComponent }
];

@NgModule({
   //enableTracing is use to trase the navigation details. like navigationStart, end, error, cancel
  // imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
