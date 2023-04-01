import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminParentComponent } from './admin-parent/admin-parent.component';

const routes: Routes = [
  { path: 'adminChild', component: AdminComponent },
  { path: 'adminParent', component: AdminParentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
