import { Component, OnInit } from '@angular/core';
import { ResultFormInditex } from '../../models/resultFormInditex';
import { CalcFormService } from '../../services/calc-form.service';

@Component({
  selector: 'app-calculation-result',
  templateUrl: './calculation-result.component.html',
  styleUrl: './calculation-result.component.scss'
})
export class CalculationResultComponent implements OnInit {

  public resultsForm: ResultFormInditex = {
    resultActions: '',
    resultTotalInvested: '',
    resultRetention: '',
    resultYears: [],
  }

  constructor(private resultsInditex: CalcFormService){}

  ngOnInit(): void {
    this.showData();
  }

  public showData() {
    this.resultsForm = this.resultsInditex.getResultsForm();
    console.log(this.resultsForm)
  }

  public reset() {
    location.reload();
  }

}
