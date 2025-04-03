import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {RegistreComponent} from "./pages/registre/registre.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path:'login',
    pathMatch:'full',
    component:LoginComponent
  }
  ,
  {
    path:'registre',
    pathMatch:'full',
    component:RegistreComponent
  }
  ,
  {
    path:'dashboard',
    pathMatch:'full',
    component:DashboardComponent
  }
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('./feature-module/feature-module.module').then(
  //       (m) => m.FeatureModuleModule
  //     ),
  // },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
