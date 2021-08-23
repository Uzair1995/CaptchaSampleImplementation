import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LoginComponent } from './login/login.component';
import { PersonalDetailsFirstLevelComponent } from './personal-details-first-level/personal-details-first-level.component';
import { AppRoutingModule } from './app-routing.module';
import { PersonalDetailsSecondLevelComponent } from './personal-details-second-level/personal-details-second-level.component';
import { PersonalDetailsThirdLevelComponent } from './personal-details-third-level/personal-details-third-level.component';
import { IDInformationComponent } from './idinformation/idinformation.component';
import { IncomeDetailsComponent } from './income-details/income-details.component';
import { RiskAcceptanceComponent } from './risk-acceptance/risk-acceptance.component';
import { FinancialSituationComponent } from './financial-situation/financial-situation.component';
import { InvestmentExperienceComponent } from './investment-experience/investment-experience.component';
import { IdentificationProofComponent } from './identification-proof/identification-proof.component';
import { DisclosuresComponent } from './disclosures/disclosures.component';
import { FundingDetailsComponent } from './funding-details/funding-details.component';
import { SignaturesComponent } from './signatures/signatures.component';
import { BreadCrumbsComponent } from './bread-crumbs/bread-crumbs.component';
import { BreadCrumbs2Component } from './bread-crumbs2/bread-crumbs2.component';
import { SignupOtherDataComponent } from './signup-other-data/signup-other-data.component';
import { SignupInitialComponent } from './signup-initial/signup-initial.component';
import { SignupAccountFundingComponent } from './signup-account-funding/signup-account-funding.component';
import { SignupMergedInitialAndAccountComponent } from './signup-merged-initial-and-account/signup-merged-initial-and-account.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RecaptchaModule,  //this is the recaptcha main module
    RecaptchaFormsModule, //this is the module for form incase form validation
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    LoginComponent,
    PersonalDetailsFirstLevelComponent,
    PersonalDetailsSecondLevelComponent,
    PersonalDetailsThirdLevelComponent,
    IDInformationComponent,
    IncomeDetailsComponent,
    RiskAcceptanceComponent,
    FinancialSituationComponent,
    InvestmentExperienceComponent,
    IdentificationProofComponent,
    DisclosuresComponent,
    FundingDetailsComponent,
    SignaturesComponent,
    BreadCrumbsComponent,
    BreadCrumbs2Component,
    SignupOtherDataComponent,
    SignupInitialComponent,
    SignupAccountFundingComponent,
    SignupMergedInitialAndAccountComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
