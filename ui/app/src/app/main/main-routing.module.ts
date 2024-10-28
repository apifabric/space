import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Customer', loadChildren: () => import('./Customer/Customer.module').then(m => m.CustomerModule) },
    
        { path: 'InsurancePolicy', loadChildren: () => import('./InsurancePolicy/InsurancePolicy.module').then(m => m.InsurancePolicyModule) },
    
        { path: 'Loan', loadChildren: () => import('./Loan/Loan.module').then(m => m.LoanModule) },
    
        { path: 'Manufacturer', loadChildren: () => import('./Manufacturer/Manufacturer.module').then(m => m.ManufacturerModule) },
    
        { path: 'Sale', loadChildren: () => import('./Sale/Sale.module').then(m => m.SaleModule) },
    
        { path: 'Salesperson', loadChildren: () => import('./Salesperson/Salesperson.module').then(m => m.SalespersonModule) },
    
        { path: 'ServiceAgreement', loadChildren: () => import('./ServiceAgreement/ServiceAgreement.module').then(m => m.ServiceAgreementModule) },
    
        { path: 'ServiceRecord', loadChildren: () => import('./ServiceRecord/ServiceRecord.module').then(m => m.ServiceRecordModule) },
    
        { path: 'Spaceship', loadChildren: () => import('./Spaceship/Spaceship.module').then(m => m.SpaceshipModule) },
    
        { path: 'SpaceshipManufacturerLink', loadChildren: () => import('./SpaceshipManufacturerLink/SpaceshipManufacturerLink.module').then(m => m.SpaceshipManufacturerLinkModule) },
    
        { path: 'SpaceshipModel', loadChildren: () => import('./SpaceshipModel/SpaceshipModel.module').then(m => m.SpaceshipModelModule) },
    
        { path: 'TestDrife', loadChildren: () => import('./TestDrife/TestDrife.module').then(m => m.TestDrifeModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }