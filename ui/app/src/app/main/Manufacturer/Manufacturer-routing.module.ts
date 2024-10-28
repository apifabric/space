import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManufacturerHomeComponent } from './home/Manufacturer-home.component';
import { ManufacturerNewComponent } from './new/Manufacturer-new.component';
import { ManufacturerDetailComponent } from './detail/Manufacturer-detail.component';

const routes: Routes = [
  {path: '', component: ManufacturerHomeComponent},
  { path: 'new', component: ManufacturerNewComponent },
  { path: ':id', component: ManufacturerDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Manufacturer-detail-permissions'
      }
    }
  },{
    path: ':manufacturer_id/SpaceshipManufacturerLink', loadChildren: () => import('../SpaceshipManufacturerLink/SpaceshipManufacturerLink.module').then(m => m.SpaceshipManufacturerLinkModule),
    data: {
        oPermission: {
            permissionId: 'SpaceshipManufacturerLink-detail-permissions'
        }
    }
},{
    path: ':manufacturer_id/SpaceshipModel', loadChildren: () => import('../SpaceshipModel/SpaceshipModel.module').then(m => m.SpaceshipModelModule),
    data: {
        oPermission: {
            permissionId: 'SpaceshipModel-detail-permissions'
        }
    }
}
];

export const MANUFACTURER_MODULE_DECLARATIONS = [
    ManufacturerHomeComponent,
    ManufacturerNewComponent,
    ManufacturerDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManufacturerRoutingModule { }