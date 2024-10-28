import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestDrifeHomeComponent } from './home/TestDrife-home.component';
import { TestDrifeNewComponent } from './new/TestDrife-new.component';
import { TestDrifeDetailComponent } from './detail/TestDrife-detail.component';

const routes: Routes = [
  {path: '', component: TestDrifeHomeComponent},
  { path: 'new', component: TestDrifeNewComponent },
  { path: ':id', component: TestDrifeDetailComponent,
    data: {
      oPermission: {
        permissionId: 'TestDrife-detail-permissions'
      }
    }
  }
];

export const TESTDRIFE_MODULE_DECLARATIONS = [
    TestDrifeHomeComponent,
    TestDrifeNewComponent,
    TestDrifeDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestDrifeRoutingModule { }