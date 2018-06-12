"use strict";
import * as data from '/tmp/config.json';

const rp = require('request-promise');

class LoggerIn {

    url_base: string

    constructor() {
        this.url_base = "https://scicatapi.esss.dk/api/v2/"
    }


    login_url() {
        return this.url_base + "Users/login"
    }


    datasets_url() {
        return this.url_base + "Datasets"
    }


    make_url(temp_url, access_token) {
        return temp_url + '?access_token=' + access_token;
    }

    async login() {

        let url = this.login_url();
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


export {
    LoggerI
    n
}