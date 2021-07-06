import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { EmailValidationService } from './model/email-validation.service';
import { BasicValidationService } from './model/basic-validation.service';



@NgModule({
  declarations: [
    CustomInputComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CustomInputComponent
  ],
  providers: [
    EmailValidationService,
    BasicValidationService
  ]
})
export class CustomFormControlModule { }
