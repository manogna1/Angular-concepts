import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styles: [
  ]
})
export class AddEmployeeComponent implements OnInit {
  isSaved = false;
  addEmployeeForm = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),

  });
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }
  handleAddMe(): void {
    console.log('submitted');
    console.log(this.addEmployeeForm);
    console.log(this.addEmployeeForm.value);

    this.employeeService.createEmployee(this.addEmployeeForm.value).subscribe((res: any) => {
      console.log(res);

      if (res && res.id) {
        this.isSaved = true;
      }
    });

  }
}

