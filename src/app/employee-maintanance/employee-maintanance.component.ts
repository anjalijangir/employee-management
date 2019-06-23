import { Component } from '@angular/core';
import { EmployeeModel } from 'src/app/employee-maintanance/models/employee.model';

/**
 * Employee Maintanne component provides Employee List and Employee, also maintains the employee list
 * 
 * Roles of this compoment
 *  1. Container for EmployeeList and Employee Component
 *  2. Decides the Navigation between the list and employee component (for add and edit)
 */

 @Component({
     selector: 'app-employee-maintanance',
     templateUrl: 'employee-maintanance.component.html',
     styleUrls: ['./employee-maintanance.component.scss']
 })
export class EmployeeMaintananceComponent {
    mode = 'List';
    employees: EmployeeModel[] = []; // Initialied with empty list
    employee: EmployeeModel;

    /**
     * Navigates to the List Page
     * 
     * @param 
     */
    showList($event: any) {
        this.mode = 'List';
    }

    /**
     * Navigates to the Add Employee Page
     * 
     * @param  
     */
    showAdd($event: any) {
        this.mode = 'Add';
        this.employee = new EmployeeModel();
    }

    /**
     * Navigates to the Edit Employee Page with the selectedEmployee as input
     * 
     * @param  employee - selected employee for edit
     */
    showEdit(employee: EmployeeModel) {
        this.mode = 'Edit';
        this.employee = employee;
    }

    /**
     * Hanle for the save-add event (which is raised by the employee compnent to save the employee)
     * @param employee 
     */
    handleSaveAdd(employee: EmployeeModel) {
        // Generate employee id
        employee.employeeId = this.employees.length + 1;

        // Add save is just pushing the new employee into the list
        this.employees.push(employee);
        this.showList(employee);
    }

    handleSaveEdit(editedEmployee: EmployeeModel) {
        this.employees.forEach((employee, index) => {
            if (employee.employeeId == editedEmployee.employeeId) {
                this.employees[index] = editedEmployee;
            }
        });
        this.showList(editedEmployee);
    }

    /**
     * Handle the cancel event (from Add or Edit Employee)
     * It will not update anything inthe employee list and simply shows the list 
     * 
     * @param employee 
     */
    handleCancelSave(employee: EmployeeModel) {
        this.showList(employee);
    }

    /**
     * Handle the delete event.Deletes the selected employee from the list
     *
     *  @param employee 
     * 
     * *Need review from Sarva*
     */
    handleDelete(employeeTobeDeletd: EmployeeModel){
        let indexOfEmployeeTobeDeleted = -1;
        this.employees.forEach((employee, index) => {
            if (employee.employeeId == employeeTobeDeletd.employeeId) {
                indexOfEmployeeTobeDeleted = index;
            }
        });
        if (indexOfEmployeeTobeDeleted >= 0) {
            this.employees.splice(indexOfEmployeeTobeDeleted, 1);
        } else {
            // if not found in the array then we can not delete.
            // This scenario will never happen.
        }
    }
}