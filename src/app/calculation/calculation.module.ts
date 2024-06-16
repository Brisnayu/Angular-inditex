import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculationRoutingModule } from './calculation-routing.module';
import { CalculationFormComponent } from './calculation-form/calculation-form.component';
import { CalculationResultComponent } from './calculation-result/calculation-result.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

const calculationRoutes: Routes = [
  { path: 'calcular', component: CalculationFormComponent }
]

@NgModule({
  declarations: [
    CalculationFormComponent,
    CalculationResultComponent
  ],
  imports: [
    CommonModule,
    CalculationRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    RouterModule.forChild(calculationRoutes),
    TranslateModule
  ],
  exports: [
    CalculationFormComponent,
    CalculationResultComponent
  ]
})
export class CalculationModule { }
