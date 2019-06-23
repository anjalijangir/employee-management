import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import {FormsModule}   from '@angular/forms';
import { EmployeeComponent } from 'src/app/employee-maintanance/employee/employee.component';
import { EmployeeListComponent } from 'src/app/employee-maintanance/employee-list/employee-list.component';
import { EmployeeMaintananceComponent } from 'src/app/employee-maintanance/employee-maintanance.component';
import { HeaderComponent } from 'src/app/header/header.component';

/**
 * Employee Maintainance components has all the components to maintian the employee list
 * 
 * It exposes only the top component to other modules
 */
@NgModule({

    //Components in this module
    declarations:[
        EmployeeComponent,
        EmployeeListComponent,
        EmployeeMaintananceComponent
    ],
    //Module 
    imports:[
        CommonModule,
        FormsModule
    ],

    //Service in this module
    providers:[
        
    ],

    //the set of components which are used for other componets 
    exports:[
        EmployeeMaintananceComponent
    ],


})

export class EmployeeModule { }