import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InfoForm } from '../../models/infoForm';
import { CalcFormService } from '../../services/calc-form.service';
@Component({
  selector: 'app-calculation-form',
  templateUrl: './calculation-form.component.html',
  styleUrl: './calculation-form.component.scss'
})
export class CalculationFormComponent {
  @Output() validResult = new EventEmitter<boolean>();
  newArray = [];

  public calculationForm: FormGroup;

  constructor(private fb: FormBuilder, private resultsInditex: CalcFormService) {
    this.calculationForm = this.fb.group({
      // fileCSV: [''],
      investmentAmount: ['', Validators.required],
      percentageBroker: ['', Validators.required]
    })
  }

  public isControlInvalidAndTouched(controlName: string): boolean {
    const control = this.calculationForm.get(controlName);
    return control ? control.invalid && control.touched : false;
  }

  public onSubmit() {
    const formData = this.calculationForm.value as InfoForm;
    
    this.validResult.emit(true);
    this.resultsInditex.resultsInditex(formData);
  }
}
