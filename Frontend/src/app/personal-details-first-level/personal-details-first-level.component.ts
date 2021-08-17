import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Configurations } from '../configs';
import axios, { AxiosRequestConfig } from "axios";
import { EncryptionService } from "../../services/encryption";

@Component({
  selector: 'app-personal-details-first-level',
  templateUrl: './personal-details-first-level.component.html',
  styleUrls: ['./personal-details-first-level.component.css']
})
export class PersonalDetailsFirstLevelComponent implements OnInit {
  checkoutForm: any;
  errorString: string = "";
  fileToUpload: File;

  constructor() { }

  ngOnInit(): void {
    this.checkoutForm = new FormGroup({
      rawDataString: new FormControl("", [Validators.required])
    });
  }

  async onSubmit(): Promise<void> {
    try {
      await this.personalDetailsFirstLevelRequest(this.checkoutForm.value.rawDataString);
    }
    catch (error) {
      if (error.message != undefined && error.response == undefined)
        this.errorString = error.message;
      else if (error.response.status == 401 || error.response.status == 403)
        this.errorString = "Forbidden! You are not authorized to call this API!";
      else if (error.response.status == 400)
        this.errorString = "Bad Request! See further details: " + JSON.stringify(error.response.data);
      else
        this.errorString = "There was an error in calling the API."
    }
  }

  handleFileInput(event: any) {
    this.fileToUpload = event.target.files[0];
  }

  addFileInFormData(formData: FormData) {
    formData.append("frontIdentification", this.fileToUpload ? this.fileToUpload, fileToUpload.name);
    return this.httpClient
      .post(endpoint, formData, { headers: yourHeadersConfig })
      .map(() => { return true; })
      .catch((e) => this.handleError(e));
  }

  async personalDetailsFirstLevelRequest(body: string): Promise<any> {
    let data = EncryptionService.EncryptFormData(JSON.parse(body));

    debugger;

    let config: AxiosRequestConfig = {
      method: 'post',
      url: `${Configurations.BASE_URL}/api/v1.0/Signup/Initial`,
      headers: {
        'Authorization': `Bearer ${Configurations.AccessToken}`,
        //...data.getHeaders()
      },
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
      data: data
    };
    // process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
    return await axios(config);
  }

}
