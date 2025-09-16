import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee/employee-list.component';

@Component({
  selector: 'app-root',
  template: `<app-employee-list></app-employee-list>`,
  standalone: true,
  imports: [RouterModule, EmployeeListComponent],
})
export class AppComponent {}
