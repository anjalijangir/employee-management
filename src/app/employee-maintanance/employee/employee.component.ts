import { Component, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';
import { EmployeeModel } from 'src/app/employee-maintanance/models/employee.model';

/**
 * This component is responble for allow user to provide data for the given employee
 * and allows the user to Save the values. 
 * Based on the mode either the value is added or updated
 */
@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css']
  })

export class EmployeeComponent implements OnChanges{
    @Input('mode') mode = 'Edit'; // If nothing is passed in then default is 'Edit'
    @Input('employee') employee: EmployeeModel = new EmployeeModel(); // If nothing is passed then new Employee will be added

    @Output('save-add') saveAdd: EventEmitter<EmployeeModel> = new EventEmitter<EmployeeModel>();
    @Output('save-edit') saveEdit: EventEmitter<EmployeeModel> = new EventEmitter<EmployeeModel>();
    @Output('cancel') cancelSave: EventEmitter<EmployeeModel> = new EventEmitter<EmployeeModel>();

    /**
     * Create cloned copy for editing the employee only if the employee input is changed
     * It has to clone employee, as it has feature of cancelling the change.
     * 
     * @param changes 
     */
    ngOnChanges(changes: SimpleChanges) {
      if (changes.employee) {
        
        this.employee = this.employee.clone();
      }
    }

    save($event: any) {
      if (this.mode == 'Add') {
        this._saveAdd($event);
      } else {
        // If not adde then the comonent assumes it is edit
        this._saveEdit($event);
      }
    }

    _saveAdd($event: any) {
      this.saveAdd.emit(this.employee);
    }

    _saveEdit($event: any) {
      this.saveEdit.emit(this.employee);
    }

    cancel($event: any) {
      this.cancelSave.emit(this.employee);
    }
}