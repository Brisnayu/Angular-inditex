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

  public isFileCSVInvalidAndTouched(): boolean {
    const fileCSVControl = this.calculationForm.get('fileCSV');
    return fileCSVControl ? fileCSVControl.invalid && fileCSVControl.touched : false;
  }

  public onSubmit() {
    console.log('Esta funcionando')
  }

}
