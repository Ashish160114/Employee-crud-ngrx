import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from './employee.model';

@Injectable()
export class EmployeeService {
  private employees: Employee[] = [
    { id: 1, name: 'John Doe', role: 'Developer' },
    { id: 2, name: 'Jane Smith', role: 'Designer' },
  ];

  getEmployees(): Observable<Employee[]> {
    return of(this.employees);
  }

  addEmployee(employee: Employee): Observable<Employee> {
    this.employees.push(employee);
    return of(employee);
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    const index = this.employees.findIndex(e => e.id === employee.id);
    if (index >= 0) this.employees[index] = employee;
    return of(employee);
  }

  deleteEmployee(id: number): Observable<number> {
    this.employees = this.employees.filter(e => e.id !== id);
    return of(id);
  }
}
