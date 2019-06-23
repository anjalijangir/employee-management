/**
 * Employee model class. holds employee related attributes
 */
export class EmployeeModel{
    //Employee id
    employeeId: number;

    //Employee name
    name: string;

    //Department name
    department: string;

    /**
     * Creates the cloned object (copy) of employee
     */
    clone(): EmployeeModel {
        let employeeClone = new EmployeeModel();
        employeeClone.employeeId = this.employeeId;
        employeeClone.name = this.name;
        employeeClone.department = this.department;
        return employeeClone;
    }
   }