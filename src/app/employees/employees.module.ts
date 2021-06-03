import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeesRoutingModule } from './employees-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,FormsModule,
    ReactiveFormsModule,HttpClientModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
