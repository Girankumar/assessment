import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home2Component } from '../home2/home2.component';
import { HomeComponent } from '../home/home.component';
import { SharedhomeComponent } from '../sharedhome/sharedhome.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: 'home2', component: Home2Component },
      { path: 'sharedhome', component: SharedhomeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
