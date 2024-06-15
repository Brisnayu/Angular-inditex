import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculationRoutingModule } from './calculation-routing.module';
import { CalculationFormComponent } from './calculation-form/calculation-form.component';
import { CalculationResultComponent } from './calculation-result/calculation-result.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CalculationFormComponent,
    CalculationResultComponent
  ],
  imports: [
    CommonModule,
    CalculationRoutingModule,
    ReactiveFormsModule
  ]
})
export class CalculationModule { }
