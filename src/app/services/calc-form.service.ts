import { Injectable } from '@angular/core';
import { ResultFormInditex } from '../models/resultFormInditex';
import { createCalculatorForYear, getTotalInvested, totalActions, getRetention } from 'inditex-brisna1/dist/src';
import { InfoForm } from '../models/infoForm';

@Injectable({
  providedIn: 'root'
})
export class CalcFormService {

  public resultsForm: ResultFormInditex = {
    resultActions: '',
    resultTotalInvested: '',
    resultRetention: '',
    resultYears: [],
  }

  public resultsInditex(data: InfoForm) {
    const resultActions = totalActions(data.investmentAmount, data.percentageBroker)
    const resultTotalInvested = getTotalInvested(resultActions)
    const resultRetention = getRetention(resultTotalInvested)
    const resultYears = createCalculatorForYear(data.investmentAmount, data.percentageBroker)

    console.log("🔴", resultActions, resultTotalInvested, resultRetention, resultYears)

    this.resultsForm = { resultActions: resultActions.toFixed(3), resultTotalInvested: resultTotalInvested.toFixed(3), resultRetention: resultRetention.toFixed(3), resultYears: resultYears }
  }

  public getResultsForm() {
    return this.resultsForm;
  }
}
