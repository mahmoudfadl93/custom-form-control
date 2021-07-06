import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm()
   }


  createForm() {
    this.form = this.fb.group({
      name: [{ value: '', disabled: false }, [Validators.required]],
    });
  }

  submit() {
    console.log("🚀 ~ file: form-wrapper.component.ts ~ line 26 ~ FormWrapperComponent ~ submit ~ this.form", this.form)

  }
}
