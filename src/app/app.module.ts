import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { Test1Component } from './components/test1/test1.component';
import { NavComponent } from './components/nav/nav.component';
import { ButtonDirective } from './shared/modules/button.directive';
import { HomeComponent } from './shared/modules/home/home.component';
import { SharedRoutingModule } from './shared/modules/shared/shared-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test1Component,
    NavComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
