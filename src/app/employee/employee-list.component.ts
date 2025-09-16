import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as EmployeeActions from './employee.actions';
import { Employee } from './employee.model';
import {
  selectAllEmployees,
  selectEmployeeLoading,
  selectEmployeeError,
} from './employee.selectors';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
})
export class EmployeeListComponent implements OnInit {
  employees$: Observable<Employee[]>;
  loading$: Observable<boolean>;
  error$: Observable<any>;

  constructor(private store: Store) {
    this.employees$ = this.store.select(selectAllEmployees);
    this.loading$ = this.store.select(selectEmployeeLoading);
    this.error$ = this.store.select(selectEmployeeError);
  }

  ngOnInit() {
    this.store.dispatch(EmployeeActions.loadEmployees());
  }

  addEmployee() {
    const emp: Employee = {
      id: Math.floor(Math.random() * 10000),
      name: 'New Employee',
      role: 'Role',
    };
    this.store.dispatch(EmployeeActions.addEmployee({ employee: emp }));
  }

  deleteEmployee(id: number) {
    this.store.dispatch(EmployeeActions.deleteEmployee({ id }));
  }
}
