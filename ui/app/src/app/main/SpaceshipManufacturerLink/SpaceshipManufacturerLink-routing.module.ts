import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpaceshipManufacturerLinkHomeComponent } from './home/SpaceshipManufacturerLink-home.component';
import { SpaceshipManufacturerLinkNewComponent } from './new/SpaceshipManufacturerLink-new.component';
import { SpaceshipManufacturerLinkDetailComponent } from './detail/SpaceshipManufacturerLink-detail.component';

const routes: Routes = [
  {path: '', component: SpaceshipManufacturerLinkHomeComponent},
  { path: 'new', component: SpaceshipManufacturerLinkNewComponent },
  { path: ':id', component: SpaceshipManufacturerLinkDetailComponent,
    data: {
      oPermission: {
        permissionId: 'SpaceshipManufacturerLink-detail-permissions'
      }
    }
  }
];

export const SPACESHIPMANUFACTURERLINK_MODULE_DECLARATIONS = [
    SpaceshipManufacturerLinkHomeComponent,
    SpaceshipManufacturerLinkNewComponent,
    SpaceshipManufacturerLinkDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpaceshipManufacturerLinkRoutingModule { }