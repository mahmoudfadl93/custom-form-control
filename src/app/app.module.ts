import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  CustomWidgetWrapperModule } from './shared/custom-widget-wrapper/custom-widget-wrapper.module';
import { CustomFormControlModule } from './shared/custom-form-control/custom-form-control.module';
import { WidgetExampleComponent } from './widget-example/widget-example.component';

@NgModule({
  declarations: [
    AppComponent,
    WidgetExampleComponent
  ],
  imports: [
    BrowserModule,
    CustomWidgetWrapperModule,
    CustomFormControlModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
