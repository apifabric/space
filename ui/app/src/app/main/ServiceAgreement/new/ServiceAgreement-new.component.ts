import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'ServiceAgreement-new',
  templateUrl: './ServiceAgreement-new.component.html',
  styleUrls: ['./ServiceAgreement-new.component.scss']
})
export class ServiceAgreementNewComponent {
  @ViewChild("ServiceAgreementForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}