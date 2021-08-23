import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PersonalDetailsFirstLevelComponent } from './personal-details-first-level/personal-details-first-level.component';
import { DisclosuresComponent } from './disclosures/disclosures.component';
import { FinancialSituationComponent } from './financial-situation/financial-situation.component';
import { FundingDetailsComponent } from './funding-details/funding-details.component';
import { IdentificationProofComponent } from './identification-proof/identification-proof.component';
import { IDInformationComponent } from './idinformation/idinformation.component';
import { IncomeDetailsComponent } from './income-details/income-details.component';
import { InvestmentExperienceComponent } from './investment-experience/investment-experience.component';
import { PersonalDetailsSecondLevelComponent } from './personal-details-second-level/personal-details-second-level.component';
import { PersonalDetailsThirdLevelComponent } from './personal-details-third-level/personal-details-third-level.component';
import { RiskAcceptanceComponent } from './risk-acceptance/risk-acceptance.component';
import { SignaturesComponent } from './signatures/signatures.component';
import { SignupMergedInitialAndAccountComponent } from './signup-merged-initial-and-account/signup-merged-initial-and-account.component';
import { SignupInitialComponent } from './signup-initial/signup-initial.component';
import { SignupAccountFundingComponent } from './signup-account-funding/signup-account-funding.component';
import { SignupOtherDataComponent } from './signup-other-data/signup-other-data.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  
  { path:"PersonalDetailsFirstLevel", component: PersonalDetailsFirstLevelComponent},
  { path:"PersonalDetailsSecondLevel", component: PersonalDetailsSecondLevelComponent},
  { path:"PersonalDetailsThirdLevel", component: PersonalDetailsThirdLevelComponent},
  { path:"IDInformation", component: IDInformationComponent},
  { path:"IncomeDetails", component: IncomeDetailsComponent},
  { path:"RiskAcceptance", component: RiskAcceptanceComponent},
  { path:"FinancialSituation", component: FinancialSituationComponent},
  { path:"InvestmentExperience", component: InvestmentExperienceComponent},
  { path:"IdentificationProof", component: IdentificationProofComponent},
  { path:"Disclosures", component: DisclosuresComponent},
  { path:"FundingDetails", component: FundingDetailsComponent},
  { path:"Signatures", component: SignaturesComponent},
  { path:"signupMergedInitialAndAccount", component: SignupMergedInitialAndAccountComponent},
  { path:"signupInitial", component: SignupInitialComponent},
  { path:"signupAccountFunding", component: SignupAccountFundingComponent},
  { path:"signupOtherData", component: SignupOtherDataComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }