import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { HomeComponent } from './home/home/home.component';
import { LandingComponent } from './home/landing/landing.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path : 'user', component : UserComponent},
  { path: 'dataBinding', component : DatabindingComponent},
  // { path : '**' , component : PagenotfoundComponent},
  { path : 'homeModule-home', component : HomeComponent},
  { path : 'landing' , component : LandingComponent},

  //lazy loading concept
  { path : 'home-Module', loadChildren : () => import('./home/home.module').then(mod => mod.HomeModule)},
  { path : 'aboutUs-Module', loadChildren:()=>import('./aboutus/aboutus.module').then(mod => mod.AboutusModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
