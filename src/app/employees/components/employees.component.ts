import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { IEmployee } from '../models/iemployee';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styles: [
  ]
})
export class EmployeesComponent implements OnInit {
  employeeList: IEmployee[] = [];
  employeeSubscription : Subscription | any;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeSubscription = this.employeeService.getAllEmployees()
      .subscribe((res: IEmployee[]) => {
        console.log(res);
        this.employeeList = res;
      });
  }

  ngOnDestroy(): void{
    console.log('ngOnDestroy called');
    this.employeeSubscription.unsubscribe();
    if(this.employeeList && this.employeeList.length>0){
      this.employeeList.length=0;
    }
  }
}
