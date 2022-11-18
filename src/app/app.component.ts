import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Component, HostBinding } from '@angular/core';
import { NgbNavItem } from '@ng-bootstrap/ng-bootstrap';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    // animation triggers go here
    
  ]
})
export class AppComponent {
  title = 'soa-project';
}
