import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {SPACESHIPMODEL_MODULE_DECLARATIONS, SpaceshipModelRoutingModule} from  './SpaceshipModel-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    SpaceshipModelRoutingModule
  ],
  declarations: SPACESHIPMODEL_MODULE_DECLARATIONS,
  exports: SPACESHIPMODEL_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SpaceshipModelModule { }