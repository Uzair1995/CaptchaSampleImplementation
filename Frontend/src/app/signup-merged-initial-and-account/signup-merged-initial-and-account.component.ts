import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { createPopper } from '@popperjs/core';

@Component({
  selector: 'app-signup-merged-initial-and-account',
  templateUrl: './signup-merged-initial-and-account.component.html',
  styleUrls: ['./signup-merged-initial-and-account.component.css']
})

export class SignupMergedInitialAndAccountComponent implements OnInit {
  infoParameter = "";
  infoString = "";
  successString = "";
  errorString = "";
  checkoutForm: any;

  constructor() { }

  ngOnInit(): void {
    this.checkoutForm = new FormGroup({
      IsBusinessEntity: new FormControl(false),
      UserIdentifierCode: new FormControl(""),
      CompanyId: new FormControl(""),
      FirstName: new FormControl(""),
      LastName: new FormControl(""),
      Address: new FormControl(""),
      DateOfBirth: new FormControl(""),
      AptOrSuite: new FormControl(""),
      Country: new FormControl(""),
      State: new FormControl(""),
      IssuingCountry: new FormControl(""),
      IssuingState: new FormControl(""),
      City: new FormControl(""),
      ZipCode: new FormControl(""),
      PhoneNumber: new FormControl(""),
      Email: new FormControl(""),
      NumberOfDependents: new FormControl(""),
      MaritalStatus: new FormControl(""),
      EmploymentStatus: new FormControl(""),
      EmployerOrBusinessName: new FormControl(""),
      OccupationOrComapnyType: new FormControl(""),
      EmploymentAddress: new FormControl(""),
      EmploymentAptOrSuite: new FormControl(""),
      EmploymentYearsOfExperience: new FormControl(""),
      EmploymentCountry: new FormControl(""),
      EmploymentState: new FormControl(""),
      EmploymentCity: new FormControl(""),
      EmploymentPhone: new FormControl(""),
      EmploymentFax: new FormControl(""),
      IsTrustedContactPersonAvailable: new FormControl(""),
      TCPName: new FormControl(""),
      TCPPhoneNumber: new FormControl(""),
      TCPEmail: new FormControl(""),
      TCPAddress: new FormControl(""),
      TCPCountry: new FormControl(""),
      TCPState: new FormControl(""),
      TCPCity: new FormControl(""),
      TCPZip: new FormControl(""),
      TCPRelationToAccountHolder: new FormControl(""),
      TCPDateOfBirth: new FormControl(""),
      IsMailingAddressDifferent: new FormControl(""),
      MAAddress: new FormControl(""),
      MAAptOrSuite: new FormControl(""),
      MACity: new FormControl(""),
      MAZipCode: new FormControl(""),
      MACountry: new FormControl(""),
      MAState: new FormControl(""),
      SSN: new FormControl(""),
      ValidGovtIDType: new FormControl(""),
      IDNumber: new FormControl(""),
      IssueDate: new FormControl(""),
      ExpirationDate: new FormControl(""),
      FrontIdentification: new FormControl(""),
      BackIdentification: new FormControl(""),
      UserSignature: new FormControl(""),
      InvestmentRiskTolerance: new FormControl(""),
      IncomeSource: new FormControl(""),
      OtherIncomeSource: new FormControl(""),
      AccountFundingBankName: new FormControl(""),
      ABAOrSWIFT: new FormControl(""),
      AccountFundingBankAccountNumber: new FormControl(""),
      AccountFundingAccountType: new FormControl(""),
      AccountFundingAccountTitle: new FormControl("")
    });
  }

  updateInfo(event: any) {
    this.infoParameter = event?.target?.name;
    this.infoString = "If you want to update the data of an already created user you can enter an already created UserIdentifierCode. This is only possible if the application is not yet completed.";
  }

  async onSubmit(): Promise<void> {
    this.infoParameter = "";
    this.infoString = "";
    this.successString = "";
    try {
      console.log(Object.keys(this.checkoutForm.value).length);
      console.log(this.checkoutForm.value)
      // let response = await this.LoginRequest(this.checkoutForm.value.clientId, this.checkoutForm.value.clientSecret, this.checkoutForm.value.recaptchaReactive);
      this.successString = "Success!";
    } catch (error) {
      if (error.response == undefined) {
        this.errorString = JSON.stringify(error);
      }
      else
        this.errorString = JSON.stringify(error.response);
    }
  }

}
