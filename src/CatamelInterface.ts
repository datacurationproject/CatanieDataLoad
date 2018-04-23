"use strict";
import {AbstractInterface} from './AbstractInterface';
import {AccessT} from './AccessToken';
import * as data from './config.json'

const rp = require('request-promise');


class CatamelInterface extends AbstractInterface {


    constructor() {
        super();
    }


    login() {

        console.log('private data ', data);
        let rawdata = data;
        let options = {
            url: this.url + '/api/v2/Users/login',
            method: 'POST',
            body: rawdata,
            json: true,
            rejectUnauthorized: false,
            requestCert: true
        };
        rp(options).then((body) => {
            this.access_t.access_token = body.id;
            console.log("login OK: " + body.id);
        });


    }

    send_to_catamel(obj, api_descriptor) {
// construct an HTTP request
        this.access_t = new AccessT();

        //console.log('private data ', data);
        let rawdata = data;
        let options = {
            url: this.url + '/api/v2/Users/login',
            method: 'POST',
            body: rawdata,
            json: true,
            rejectUnauthorized: false,
            requestCert: true
        };




        const catamel_obj = JSON.stringify(obj);


        rp(options).then((body) => {
            console.log("login OK: " + body.id);
            let access_token = body.id;
            const url = this.url + '/api/v2/' + api_descriptor + '?access_token=' + access_token;
            console.log(url);
            let ee = obj;
            console.log(ee);
            let options2 = {
                url: url,
                method: 'POST',
                body: ee,
                json: true,
                rejectUnauthorized: false,
                requestCert: true
            };
            const dataset_number = 32;
            console.log(dataset_number);

            let chain = Promise.resolve();
            for (let i = 0; i < dataset_number; i++) {
                options2.body.creationLocation = "NMX";
                chain = chain.then(() => {

                    options2.body.creationLocation = this.instrument[i % 15];
                    options2.body.sourceFolder = "/" + this.instrument[i % 15] + "/disk0";
                    console.log(options2.body.creationLocation);
                    rp(options2).then(function (body) {
                        console.log(body.pid);
                    });
                });
            }
        }).catch(function (err) {
            console.log('what went wrong?', err);
            // POST failed...
        });


        // send the collected data as JSON

    }

}


export {CatamelInterface};
