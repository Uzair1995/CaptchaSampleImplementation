import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RecaptchaModule,  //this is the recaptcha main module
    RecaptchaFormsModule, //this is the module for form incase form validation
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    LoginComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
