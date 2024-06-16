import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'inditex-angular';
  selectedLanguage = 'es';
  public showResults: boolean = false;


  constructor(private translateService: TranslateService){
    this.translateService.setDefaultLang(this.selectedLanguage);
    console.log("HOLA SHOWRESULTS", this.showResults)
  }

  changeLanguage(value: string) {
    this.selectedLanguage = value;
    this.translateService.use(this.selectedLanguage);
  }

  public changeShowResults(result: boolean): void {
    this.showResults = result;
    console.log("APP COMPONENT", this.showResults)
  }

}
