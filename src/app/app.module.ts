import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeModule } from 'src/app/employee-maintanance/employee.module';
import { HeaderComponent } from 'src/app/header/header.component';


/**
 * Application level module. Imports all the required submodules and 3rd patry module
 */
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    EmployeeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
