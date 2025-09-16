import { ApplicationConfig } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { employeeReducer } from './employee/employee.reducer';
import { EmployeeEffects } from './employee/employee.effects';
import { EmployeeService } from './employee/employee.service';

export const appConfig: ApplicationConfig = {
  providers: [
    EmployeeService,                      // provide service
    provideStore({ employees: employeeReducer }),
    provideEffects([EmployeeEffects]),    // provide effects
  ],
};
