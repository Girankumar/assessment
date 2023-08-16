import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { Home2Component } from '../home2/home2.component';
import { SharedhomeComponent } from '../sharedhome/sharedhome.component';
import { HomeComponent } from '../home/home.component';
import { ButtonDirective } from '../button.directive';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    Home2Component,
    SharedhomeComponent,
    ButtonDirective

  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }
