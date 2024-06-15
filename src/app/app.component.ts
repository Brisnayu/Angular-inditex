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

  constructor(private translateService: TranslateService){
    this.translateService.setDefaultLang(this.selectedLanguage);
  }

  changeLanguage(value: string) {
    this.selectedLanguage = value;
    this.translateService.use(this.selectedLanguage);
  }

}
