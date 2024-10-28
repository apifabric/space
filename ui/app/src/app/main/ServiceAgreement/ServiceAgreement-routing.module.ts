import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceAgreementHomeComponent } from './home/ServiceAgreement-home.component';
import { ServiceAgreementNewComponent } from './new/ServiceAgreement-new.component';
import { ServiceAgreementDetailComponent } from './detail/ServiceAgreement-detail.component';

const routes: Routes = [
  {path: '', component: ServiceAgreementHomeComponent},
  { path: 'new', component: ServiceAgreementNewComponent },
  { path: ':id', component: ServiceAgreementDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ServiceAgreement-detail-permissions'
      }
    }
  }
];

export const SERVICEAGREEMENT_MODULE_DECLARATIONS = [
    ServiceAgreementHomeComponent,
    ServiceAgreementNewComponent,
    ServiceAgreementDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceAgreementRoutingModule { }