import { Configurations } from '../app/configs';
import { JSEncrypt } from '../../node_modules/JSEncrypt';

declare var require: any
// declare var JSEncrypt: any;
// const JSEncrypt = require("node-jsencrypt");
// const fs = require('file-system');


export class EncryptionService {

    public static EncryptJsonData(body: any) {
        let jsEncrypt = new JSEncrypt();
        jsEncrypt.setPublicKey(Configurations.PublicKey);
        var data: any;
        for (let key in body) {
            if (Array.isArray(body[key]) && body[key].every((i: any) => (typeof i === "string"))) {
                let arrayOfElements = body[key];
                let arrayOfEncryptedElements = [];
                for (let element in arrayOfElements) {
                    let encryptedData = jsEncrypt.encrypt(arrayOfElements[element]).toString();
                    arrayOfEncryptedElements.push(encryptedData);
                }
                data[key] = JSON.stringify(arrayOfEncryptedElements);
            }
            else if (Array.isArray(body[key])) {
                let arrayOfElements = body[key];
                let arrayOfEncryptedElements = [];
                for (let element in arrayOfElements) {
                    let model: any;
                    let unencryptedModel = arrayOfElements[element];
                    for (let jKey in unencryptedModel) {
                        let dataToEncrypt = unencryptedModel[jKey].toString();
                        let encryptedData = jsEncrypt.encrypt(dataToEncrypt).toString();
                        model[jKey] = encryptedData;
                    }
                    arrayOfEncryptedElements.push(model);
                }
                data[key] = JSON.stringify(arrayOfEncryptedElements);
            }
            else {
                let dataToEncrypt = body[key].toString();
                if (dataToEncrypt.includes("Object"))
                    dataToEncrypt = JSON.stringify(body[key]);

                data[key] = jsEncrypt.encrypt(dataToEncrypt).toString();
            }
        }
        return data;
    }

    public static EncryptFormData(body: any) {
        let jsEncrypt = new JSEncrypt();
        jsEncrypt.setPublicKey(Configurations.PublicKey);
        var data = new FormData();
        for (let key in body) {
            if (/(.*?):\\/.test(body[key]))
                // data.append(key, fs.createReadStream(body[key]));
                continue;
            else {
                if (Array.isArray(body[key]) && body[key].every((i: any) => (typeof i === "string"))) {
                    let arrayOfElements = body[key];
                    let arrayOfEncryptedElements = [];
                    for (let element in arrayOfElements) {
                        let encryptedData = jsEncrypt.encrypt(arrayOfElements[element]).toString();
                        arrayOfEncryptedElements.push(encryptedData);
                    }
                    data.append(key, JSON.stringify(arrayOfEncryptedElements));
                }
                else if (Array.isArray(body[key])) {
                    let arrayOfElements = body[key];
                    let arrayOfEncryptedElements = [];
                    for (let element in arrayOfElements) {
                        let model: any;
                        let unencryptedModel = arrayOfElements[element];
                        for (let jKey in unencryptedModel) {
                            let dataToEncrypt = unencryptedModel[jKey].toString();
                            let encryptedData = jsEncrypt.encrypt(dataToEncrypt).toString();
                            model[jKey] = encryptedData;
                        }
                        arrayOfEncryptedElements.push(model);
                    }
                    data.append(key, JSON.stringify(arrayOfEncryptedElements));
                }
                else {
                    let dataToEncrypt = body[key].toString();
                    if (dataToEncrypt.includes("Object"))
                        dataToEncrypt = JSON.stringify(body[key]);

                    data.append(key, jsEncrypt.encrypt(dataToEncrypt).toString());
                }
            }
        }
        return data;
    }

}