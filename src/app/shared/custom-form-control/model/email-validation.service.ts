import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
@Injectable()
export class EmailValidationService {

  constructor() { }

  emailDomain(domainName: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

      const email = control.value;
      const domain = email.substring(email.lastIndexOf('@') + 1)

      if (domain.toLowerCase() === domainName) {
        return null

      } else {
        return { 'emailDomain': true }
      }
    }


  }
}
