"use strict";
import * as data from '/tmp/config.json';

const rp = require('request-promise');

class LoggerIn {

    url_base: string;
    login_url: string;

    constructor() {
        this.url_base = "https://scicatapi.esss.dk/api/v2/";
        //this.url_base = "https://kubetest02.dm.esss.dk:32223/api/v2/"
        //this.url_base = "https://scicat03.esss.lu.se:32223/api/v2/"
        this.login_url = this.url_base + "Users/login";
    }

    async login() {

        let url = this.login_url;
        let rawdata = data;
        console.log(data);

        let options1 = {
            url: url,
            method: 'POST',
            body: rawdata,
            json: true,
            rejectUnauthorized: false,
            requestCert: true
        };
        try {
            const response = await
                rp(options1);
            return Promise.resolve(response);
        }
        catch (error) {
            return Promise.reject(error);
        }

    }

}


export {LoggerIn}
