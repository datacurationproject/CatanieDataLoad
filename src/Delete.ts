"use strict";
import {AbstractInterface} from './AbstractInterface';
import {AccessT} from './AccessToken';
import {DatasetSetup} from './DatasetSetup';
import {Orig} from './Orig';
import {Attach} from './Attach';
import * as data from '/tmp/config.json';
import * as datasets from './datasets.json'

const async = require('async');

const rp = require('request-promise');


class CatamelDelete extends AbstractInterface {


    constructor() {
        super();
    }





    delete_from_catamel() {
// construct an HTTP request
        this.access_t = new AccessT();

        //console.log('private data ', data);
        let rawdata = data;
        let login_options = {
            url: this.url + '/api/v2/Users/login',
            method: 'POST',
            body: rawdata,
            json: true,
            rejectUnauthorized: false,
            requestCert: true
        };



        rp(login_options).then((body) => {
            console.log("login OK: " + body.id);
            let access_token = body.id;
            const url = this.url + '/api/v2/' + 'Datasets' + '?access_token=' + access_token;
            console.log(url);
            let ee = datasets["orig1"];
            console.log(ee);
            let optionz_dataset = {
                url: url,
                method: 'GET',
                body: 'GET',
                rejectUnauthorized: false,
                requestCert: true
            };


        	let attach = new Attach();
            let attachment_json = attach.data;

        	let orig = new Orig();
            let orig_data_blocks_json = orig.data;

            const url_attach = this.url + '/api/v2/' + 'DatasetAttachments' + '?access_token=' + access_token;

            let attachment_optionz = {
                url: url_attach,
                method: 'POST',
                body: attachment_json,
                json: true,
                rejectUnauthorized: false,
                requestCert: true
            };

            const url_orig = this.url + '/api/v2/' + 'OrigDatablocks' + '?access_token=' + access_token;
            let orig_optionz = {
                url: url_orig,
                method: 'POST',
                body: orig_data_blocks_json,
                json: true,
                rejectUnauthorized: false,
                requestCert: true
            };


            const dataset_number = 1;
            console.log(dataset_number);

            let chain = Promise.resolve();
            for (let i = 0; i < dataset_number; i++) {
                chain = chain.then(() => {
                    rp(optionz_dataset).then(function (body) {
                        console.log(body);
                        attachment_optionz.body.datasetId = body.pid;
                        rp(attachment_optionz);
                        orig_optionz.body.datasetId = body.pid;
                        rp(orig_optionz);
                    });
                });
            }
        }).catch(function (err) {
            console.log('what went wrong?', err);
            // POST failed...
        });


        // send the collected data as JSON

    }

    make_url (api_descriptor, access_token){
        const url = this.url + '/api/v2/' + api_descriptor + '?access_token=' + access_token;
       return url
    }

}
let a= new CatamelDelete()
a.delete_from_catamel()

export {CatamelDelete};
