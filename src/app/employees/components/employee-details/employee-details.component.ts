import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { ActivatedRoute } from '@angular/router';
import { IEmployee } from '../../models/iemployee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styles: [
  ]
})
export class EmployeeDetailsComponent implements OnInit {
  employee: IEmployee;
  duplicateEmployee: IEmployee;
  isDeleted = false;
  isInvalid = false;
  isUpdated = false;

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    var id = this.route.snapshot.paramMap.get('id');
    if (Number(id)) {
      this.employeeService.getEmployee(id)
        .subscribe((res: IEmployee) => {
          console.log(res);
          this.employee = res;
        });
    } else {
      this.isInvalid = true;
    }
  }

  handleDeleteEmployee(): any {
    const id = this.route.snapshot.paramMap.get('id');
    this.employeeService.deleteEmployee(id)
      .subscribe((res: any) => {
        console.log(res);
        if (res) {
          this.isDeleted = true;
        }
      });
  }

  handleEditModalOpen() {
    this.duplicateEmployee = { ...this.employee };
  }

  handleUpdateEmployee() {
    console.log(this.duplicateEmployee);
    this.employeeService.updateEmployee(this.duplicateEmployee)
      .subscribe((res: IEmployee) => {
        console.log(res);
        this.employee = res;
        if (res && res.id) {
          this.isUpdated = true;
          this.employee = res;
        }
      });
  }
}
