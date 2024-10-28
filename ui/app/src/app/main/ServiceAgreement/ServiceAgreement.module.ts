import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {SERVICEAGREEMENT_MODULE_DECLARATIONS, ServiceAgreementRoutingModule} from  './ServiceAgreement-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ServiceAgreementRoutingModule
  ],
  declarations: SERVICEAGREEMENT_MODULE_DECLARATIONS,
  exports: SERVICEAGREEMENT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ServiceAgreementModule { }