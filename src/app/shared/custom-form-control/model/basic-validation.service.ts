import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable()
export class BasicValidationService {

  constructor() { }
  InputMinLength(minlength: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

      const inputlength = control.value?.length;
      if (inputlength >= minlength) {
        return null

      } else {
        return { 'custom-minlength': true }
      }
    }
  }


  InputMaxLength(maxlength: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const inputlength = control.value?.length;
      if (inputlength <= maxlength) {
        return null

      } else {
        return { 'custom-maxlength': true }
      }
    }
  }
}
