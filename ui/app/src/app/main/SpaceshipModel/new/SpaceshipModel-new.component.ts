import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'SpaceshipModel-new',
  templateUrl: './SpaceshipModel-new.component.html',
  styleUrls: ['./SpaceshipModel-new.component.scss']
})
export class SpaceshipModelNewComponent {
  @ViewChild("SpaceshipModelForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}