import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirebaseComponent } from './feature/components/firebase/firebase.component';
import { HomeComponent } from './feature/components/home/home.component';
import { ParentComponent } from './feature/components/angular/parent/parent.component';
import { ChildComponent } from './feature/components/angular/child/child.component';
import { PwaComponent } from './feature/components/pwa/pwa.component';
import { JavascriptComponent } from './feature/components/javascript/javascript.component';
import { DashboardComponent } from './feature/application-components/dashboard/dashboard.component';


const routes: Routes = [
  {path:'', redirectTo:'/home' , pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'firebase',component:FirebaseComponent},
  {path:'parent',component:ParentComponent},
  {path:'child',component:ChildComponent},
  {path:'pwa',component:PwaComponent},
  {path:'javascript',component:JavascriptComponent},
  {path:'spring-application',loadChildren:() => import('../app/feature/application-components/shopping.module').then(m=> m.ShoppingModule)},
  {path:'rxjs',loadChildren: () => import('../app/feature/components/rxjs/rxjs.module').then(m => m.RxjsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
