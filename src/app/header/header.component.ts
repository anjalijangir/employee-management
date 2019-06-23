import { Component, Input, Output } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { EventEmitter } from 'events';

/**
 * HeaderComponent is responsible to display the title of the Application
 */

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input('title') title: string;

  constructor() { }

}
