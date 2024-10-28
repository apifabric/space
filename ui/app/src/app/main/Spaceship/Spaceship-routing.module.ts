import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpaceshipHomeComponent } from './home/Spaceship-home.component';
import { SpaceshipNewComponent } from './new/Spaceship-new.component';
import { SpaceshipDetailComponent } from './detail/Spaceship-detail.component';

const routes: Routes = [
  {path: '', component: SpaceshipHomeComponent},
  { path: 'new', component: SpaceshipNewComponent },
  { path: ':id', component: SpaceshipDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Spaceship-detail-permissions'
      }
    }
  },{
    path: ':spaceship_id/InsurancePolicy', loadChildren: () => import('../InsurancePolicy/InsurancePolicy.module').then(m => m.InsurancePolicyModule),
    data: {
        oPermission: {
            permissionId: 'InsurancePolicy-detail-permissions'
        }
    }
},{
    path: ':spaceship_id/Loan', loadChildren: () => import('../Loan/Loan.module').then(m => m.LoanModule),
    data: {
        oPermission: {
            permissionId: 'Loan-detail-permissions'
        }
    }
},{
    path: ':spaceship_id/Sale', loadChildren: () => import('../Sale/Sale.module').then(m => m.SaleModule),
    data: {
        oPermission: {
            permissionId: 'Sale-detail-permissions'
        }
    }
},{
    path: ':spaceship_id/ServiceAgreement', loadChildren: () => import('../ServiceAgreement/ServiceAgreement.module').then(m => m.ServiceAgreementModule),
    data: {
        oPermission: {
            permissionId: 'ServiceAgreement-detail-permissions'
        }
    }
},{
    path: ':spaceship_id/ServiceRecord', loadChildren: () => import('../ServiceRecord/ServiceRecord.module').then(m => m.ServiceRecordModule),
    data: {
        oPermission: {
            permissionId: 'ServiceRecord-detail-permissions'
        }
    }
},{
    path: ':spaceship_id/SpaceshipManufacturerLink', loadChildren: () => import('../SpaceshipManufacturerLink/SpaceshipManufacturerLink.module').then(m => m.SpaceshipManufacturerLinkModule),
    data: {
        oPermission: {
            permissionId: 'SpaceshipManufacturerLink-detail-permissions'
        }
    }
}
];

export const SPACESHIP_MODULE_DECLARATIONS = [
    SpaceshipHomeComponent,
    SpaceshipNewComponent,
    SpaceshipDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpaceshipRoutingModule { }