import { Component, forwardRef, HostBinding, Input, OnInit, TemplateRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlValueAccessor, Validator, FormControl, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { hasRequiredField } from '../helpers/isHasRequiredField';
import { BasicValidationService } from '../model/basic-validation.service';
import { EmailValidationService } from '../model/email-validation.service';

@Component({
  selector: 'custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(
        () => CustomInputComponent
      ),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => CustomInputComponent)
    }
  ]
})
export class CustomInputComponent implements OnInit, ControlValueAccessor, Validator {


  @Input()
  public validationType: string = '';


  @Input()
  public parentForm!: FormGroup;

  @Input()
  public fieldName!: string;

  @Input()
  public label!: string;

  @Input()
  public customPlaceHolder!: string;

  @Input()
  public leftIcon!: string;

  @Input()
  public rightIcon!: string;



  @Input()
  public isRow!: boolean;

  @Input()
  public showLeftIcon!: boolean;

  @Input()
  public showRightIcon!: boolean;




  @Input("TemplateLabel")
  public TemplateLabelRef!: TemplateRef<any>;

  @Input("TemplateLeftIcon")
  public TemplateLeftIconRef!: TemplateRef<any>;

  @Input("TemplateRightIcon")
  public TemplateRightIconRef!: TemplateRef<any>;



  public value!: string;

  public changed!: (value: string) => void;

  public touched!: () => void;


  // we give some disabled style
  @HostBinding('class.custom-input-disabled')
  public isDisabled!: boolean;





  get formField(): FormControl {
    return this.parentForm?.get(this.fieldName) as FormControl;
  }

  constructor(private _EmailValidation: EmailValidationService,
    private _BasicValidationService: BasicValidationService) { }

  ngOnInit(): void {
  }




  public onChange(event: Event): void {
    const value: string =
      (<HTMLInputElement>event.target).value;

    this.changed(value);
  }

  public writeValue(value: string): void {
    this.value = value;
  }

  public registerOnChange(fn: any): void {
    this.changed = fn;
  }

  public registerOnTouched(fn: any): void {
    this.touched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }





  validate(control: AbstractControl) {
    if (this.validationType === 'high') {
      if (hasRequiredField(control)) {
        let errors: any = {};

        errors =
          this._BasicValidationService.InputMaxLength(30)(control) ||
          this._BasicValidationService.InputMinLength(20)(control) ||
          this._EmailValidation.emailDomain('flairstech.com')(control);
        return errors;
      } else {
        if (control.dirty && control.value !== '') {
          let errors: any = {};
          errors = this._EmailValidation.emailDomain('flairstech.com')(control)

          return errors;
        }
      }

    } else if (this.validationType === 'mid') {
      control.setValidators(Validators.compose([Validators.email]));
      let errors: any = {};
      errors = control.errors;
      return errors;
    }

    else {
      return null
    }

  }



}
