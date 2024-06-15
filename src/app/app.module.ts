import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculationModule } from './calculation/calculation.module';
import { provideTranslation } from './config/translate-loader.config';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalculationModule,
    HttpClientModule,
    TranslateModule.forRoot(provideTranslation())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
