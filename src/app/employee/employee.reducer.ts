import { createReducer, on } from '@ngrx/store';
import * as EmployeeActions from './employee.actions';
import { Employee } from './employee.model';

export interface EmployeeState {
  employees: Employee[];
  loading: boolean;
  error: any;
}

export const initialState: EmployeeState = {
  employees: [],
  loading: false,
  error: null,
};

export const employeeReducer = createReducer(
  initialState,
  on(EmployeeActions.loadEmployees, (state) => ({ ...state, loading: true })),
  on(EmployeeActions.loadEmployeesSuccess, (state, { employees }) => ({
    ...state,
    loading: false,
    employees,
  })),
  on(EmployeeActions.loadEmployeesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(EmployeeActions.addEmployee, (state, { employee }) => ({
    ...state,
    employees: [...state.employees, employee],
  })),
  on(EmployeeActions.updateEmployee, (state, { employee }) => ({
    ...state,
    employees: state.employees.map((e) =>
      e.id === employee.id ? { ...employee } : e
    ),
  })),
  on(EmployeeActions.deleteEmployee, (state, { id }) => ({
    ...state,
    employees: state.employees.filter((e) => e.id !== id),
  }))
);
