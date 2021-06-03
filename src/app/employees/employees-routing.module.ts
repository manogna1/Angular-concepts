import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './components/employees.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { AuthGuard } from '../shared/guards/auth.guard';

const routes: Routes = [
  {path:'employees', component:EmployeesComponent},
  {path:'employees/new', component:AddEmployeeComponent, canActivate:[AuthGuard]},
  {path:'employees/:id', component:EmployeeDetailsComponent},
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
