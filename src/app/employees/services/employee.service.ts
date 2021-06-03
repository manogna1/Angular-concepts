import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IEmployee } from '../models/iemployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  constructor(private http: HttpClient) { }

  createEmployee(formData: any): any {

    return this.http.post("http://jsonplaceholder.typicode.com/users/", formData)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }))
  }

  getAllEmployees(): Observable<IEmployee[]> {

    return this.http.get("http://jsonplaceholder.typicode.com/users/")
      .pipe(map((res: any) => {
        console.log(res);
        return res as IEmployee[];
      }))
  }

  getEmployee(id: any): Observable<IEmployee> {
    return this.http.get("http://jsonplaceholder.typicode.com/users/" + id)
      .pipe(map((res: any) => {
        console.log(res);
        return res as IEmployee;
      }))
  }

  updateEmployee(updateForm: any): Observable<IEmployee> {
    return this.http.put("http://jsonplaceholder.typicode.com/users/" + updateForm.id, updateForm)
      .pipe(map((res: any) => {
        console.log(res);
        return res as IEmployee;
      }))
  }

  deleteEmployee(id: any): any {

    return this.http.delete("http://jsonplaceholder.typicode.com/users/" + id)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }))
  }
}
