import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Spaceship-new',
  templateUrl: './Spaceship-new.component.html',
  styleUrls: ['./Spaceship-new.component.scss']
})
export class SpaceshipNewComponent {
  @ViewChild("SpaceshipForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}