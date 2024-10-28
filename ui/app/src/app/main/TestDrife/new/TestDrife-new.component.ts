import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'TestDrife-new',
  templateUrl: './TestDrife-new.component.html',
  styleUrls: ['./TestDrife-new.component.scss']
})
export class TestDrifeNewComponent {
  @ViewChild("TestDrifeForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}