import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LoginComponent } from './login/login.component';
import { PersonalDetailsFirstLevelComponent } from './personal-details-first-level/personal-details-first-level.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RecaptchaModule,  //this is the recaptcha main module
    RecaptchaFormsModule, //this is the module for form incase form validation
    // RouterModule.forRoot([
    //   { path: 'login', component: LoginComponent },
    // ]),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    LoginComponent,
    PersonalDetailsFirstLevelComponent,

    // PersonalDetailsFirstLevel
    // PersonalDetailsSecondLevel
    // PersonalDetailsThirdLevel
    // IDInformation
    // IncomeDetails
    // RiskAcceptance
    // FinancialSituation
    // InvestmentExperience
    // IdentificationProof
    // Disclosures
    // FundingDetails
    // Signatures

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
