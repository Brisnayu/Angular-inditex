import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculation-form',
  templateUrl: './calculation-form.component.html',
  styleUrl: './calculation-form.component.scss'
})
export class CalculationFormComponent {
  public calculationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.calculationForm = this.fb.group({
      fileCSV: ['', Validators.required],
      investmentAmount: ['', Validators.required],
      percentageBroker: ['', Validators.required]
    })
  }

  public isControlInvalidAndTouched(controlName: string): boolean {
    const control = this.calculationForm.get(controlName);
    return control ? control.invalid && control.touched : false;
  }

  public onSubmit() {
    console.log('Esta funcionando')
  }

}
