import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'SpaceshipManufacturerLink-new',
  templateUrl: './SpaceshipManufacturerLink-new.component.html',
  styleUrls: ['./SpaceshipManufacturerLink-new.component.scss']
})
export class SpaceshipManufacturerLinkNewComponent {
  @ViewChild("SpaceshipManufacturerLinkForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}