import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EmployeeState } from './employee.reducer';

export const selectEmployeeState = createFeatureSelector<EmployeeState>('employees');

export const selectAllEmployees = createSelector(
  selectEmployeeState,
  (state) => state.employees
);

export const selectEmployeeLoading = createSelector(
  selectEmployeeState,
  (state) => state.loading
);

export const selectEmployeeError = createSelector(
  selectEmployeeState,
  (state) => state.error
);
