import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UpdateUserDetailsComponent } from './update-user-details/update-user-details.component';

const routes: Routes = [
  {path:'',component:DashboardComponent,pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'updateDetails',component:UpdateUserDetailsComponent},
];

console.log('in child');

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingRoutingModule { }
