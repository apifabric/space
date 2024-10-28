import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpaceshipModelHomeComponent } from './home/SpaceshipModel-home.component';
import { SpaceshipModelNewComponent } from './new/SpaceshipModel-new.component';
import { SpaceshipModelDetailComponent } from './detail/SpaceshipModel-detail.component';

const routes: Routes = [
  {path: '', component: SpaceshipModelHomeComponent},
  { path: 'new', component: SpaceshipModelNewComponent },
  { path: ':id', component: SpaceshipModelDetailComponent,
    data: {
      oPermission: {
        permissionId: 'SpaceshipModel-detail-permissions'
      }
    }
  },{
    path: ':spaceship_model_id/Spaceship', loadChildren: () => import('../Spaceship/Spaceship.module').then(m => m.SpaceshipModule),
    data: {
        oPermission: {
            permissionId: 'Spaceship-detail-permissions'
        }
    }
},{
    path: ':spaceship_model_id/TestDrife', loadChildren: () => import('../TestDrife/TestDrife.module').then(m => m.TestDrifeModule),
    data: {
        oPermission: {
            permissionId: 'TestDrife-detail-permissions'
        }
    }
}
];

export const SPACESHIPMODEL_MODULE_DECLARATIONS = [
    SpaceshipModelHomeComponent,
    SpaceshipModelNewComponent,
    SpaceshipModelDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpaceshipModelRoutingModule { }