import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {SPACESHIPMANUFACTURERLINK_MODULE_DECLARATIONS, SpaceshipManufacturerLinkRoutingModule} from  './SpaceshipManufacturerLink-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    SpaceshipManufacturerLinkRoutingModule
  ],
  declarations: SPACESHIPMANUFACTURERLINK_MODULE_DECLARATIONS,
  exports: SPACESHIPMANUFACTURERLINK_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SpaceshipManufacturerLinkModule { }