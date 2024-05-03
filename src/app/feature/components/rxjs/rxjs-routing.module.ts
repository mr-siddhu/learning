import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsComponent } from './rxjs.component';


const routes: Routes = [
  {path:'', redirectTo:'/operators',pathMatch:'full'},
  {path:'operators',component:RxjsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
