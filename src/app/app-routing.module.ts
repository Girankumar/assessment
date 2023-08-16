import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { Test1Component } from './components/test1/test1.component';
import { NavComponent } from './components/nav/nav.component';

const routes: Routes = [
  {path:'',component:TestComponent},
  {path:'test1',component:Test1Component},
  {path:'nav',component:NavComponent},
  {path:'shared',loadChildren:() => import('./shared/modules/shared/shared.module').then(m => m.SharedModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
