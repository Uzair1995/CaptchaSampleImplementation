import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Configurations } from '../configs';
import axios, { AxiosRequestConfig } from "axios";
import * as qs from "query-string";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  showInvalidCredentialsError: boolean = false;
  showGeneralError: boolean = false;
  showSuccess: boolean = false;
  generalErrors: any = null;
  checkoutForm: any;

  ReCaptha_SITE_KEY: string = Configurations.ReCaptha_SITE_KEY;

  constructor() { }

  ngOnInit(): void {
    this.checkoutForm = new FormGroup({
      clientId: new FormControl("", [Validators.required]),
      clientSecret: new FormControl("", [Validators.required]),
      recaptchaReactive: new FormControl("", [Validators.required])
    });
  }

  async onSubmit(): Promise<void> {
    this.showInvalidCredentialsError = false;
    this.showGeneralError = false;
    this.showSuccess = false;
    try {
      let response = await this.LoginRequest(this.checkoutForm.value.clientId, this.checkoutForm.value.clientSecret, this.checkoutForm.value.recaptchaReactive);
      Configurations.AccessToken = response.data.access_token;
      Configurations.PublicKey = response.data.publicKey;
      // Configurations.AccessToken = "SAMPLE_TOKEN";
      // Configurations.PublicKey = "-----BEGIN PUBLIC KEY-----\r\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCobtNh/OJAuP1t9wnd2CEVfZ5x\r\nAG8G91dtC4bCLVrBjzdUhNsINTvF0C0vblijzUbCi+o++mFezlnuljcfLsS5adxy\r\nw/oX9nL89bOprC5mlgmn8sTEMc5ceF0HqO/iPwEVbQ/CLSYC1ucQYYVBqbNe8r4/\r\n2akAjplYZmpuB1gScQIDAQAB\r\n-----END PUBLIC KEY-----\r\n";
      this.showSuccess = true;
    } catch (error) {
      if (error.response == undefined) {
        this.generalErrors = JSON.stringify(error);
        this.showGeneralError = true;
      }
      else
        this.showInvalidCredentialsError = true;
      this.checkoutForm.reset();
    }
  }

  async LoginRequest(clientId: string, clientSecret: string, captchaToken: string): Promise<any> {
    var data = qs.stringify({
      'grant_type': 'client_credentials',
      'captcha': captchaToken
    });
    let config: AxiosRequestConfig = {
      method: 'POST',
      url: `${Configurations.BASE_URL}/api/connect/token`,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Authorization': 'Basic ' + btoa(`${clientId}:${clientSecret}`),
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data
    };
    // process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
    return await axios(config);
  }

}