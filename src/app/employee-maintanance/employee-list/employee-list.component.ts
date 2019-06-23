import { Component, Input, EventEmitter, Output } from '@angular/core';
import { EmployeeModel } from 'src/app/employee-maintanance/models/employee.model';

@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.css']
  })

/**
 * The main functionality of this calss are as follows:<br>
 * 
 * 1. List the employees
 * 2. Allow to edit or delete the selected employee
 * 3. Initiate Add New Employee
 */
export class EmployeeListComponent {
  @Input('employees') employees: EmployeeModel[] = [];

  @Output('add') add: EventEmitter<any> = new EventEmitter<any>();
  @Output('edit') edit: EventEmitter<EmployeeModel> = new EventEmitter<EmployeeModel>();
  @Output('delete') delete: EventEmitter<EmployeeModel> = new EventEmitter<EmployeeModel>();
  
  constructor() {}

  searchQuery: string;

  /**
   * Initiates the Add the new employee 
   */
  initiateAdd($event: any) {
    this.add.emit($event);
  }

  /**
   * Initiates the Edit of the selected Employee
   * 
   * @param employee to be edited
   */
  initiateEdit(employee: EmployeeModel) {
    this.edit.emit(employee);
  }

  /**
   *  Initiates the Delete of the selected Employee
   * 
   * @param employee to be deleted
   */
  initiateDelete(employee: EmployeeModel) {
    this.delete.emit(employee);
  } 
  

  // TODO
  search($event: any) {

  }

}