import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {TESTDRIFE_MODULE_DECLARATIONS, TestDrifeRoutingModule} from  './TestDrife-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    TestDrifeRoutingModule
  ],
  declarations: TESTDRIFE_MODULE_DECLARATIONS,
  exports: TESTDRIFE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestDrifeModule { }