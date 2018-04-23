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


            let attachment_json = {
                "thumbnail": "data:image/png;base64,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",
                "creationTime": "2018-04-23T09:23:46.853Z",
                "datasetId": "string",
                "rawDatasetId": "string",
                "derivedDatasetId": "string"
            };

            let orig_data_blocks_json = {
                "size": 0,
                "dataFileList": [
                    {
                        "path": "string",
                        "size": 0,
                        "time": "2018-04-23T09:23:47.000Z",
                        "chk": "string",
                        "uid": "string",
                        "gid": "string",
                        "perm": "string"
                    }
                ],
                "ownerGroup": "string",
                "accessGroups": [
                    "string"
                ],
                "createdBy": "string",
                "updatedBy": "ingestor",
                "datasetId": "<PID>/a4ec147c-0d5d-4cfd-9fa5-893423a68729",
                "rawDatasetId": "string",
                "derivedDatasetId": "string",
                "createdAt": "2018-04-23T09:23:47.918Z",
                "updatedAt": "2018-04-23T09:59:04.506Z"
            };
            const url_attach = this.url + '/api/v2/' + 'DatasetAttachments' + '?access_token=' + access_token;

            let attachment_options = {
                url: url_attach,
                method: 'POST',
                body: attachment_json,
                json: true,
                rejectUnauthorized: false,
                requestCert: true
            };

            const url_orig = this.url + '/api/v2/' + 'OrigDatablocks' + '?access_token=' + access_token;
            let orig_options = {
                url: url_orig,
                method: 'POST',
                body: orig_data_blocks_json,
                json: true,
                rejectUnauthorized: false,
                requestCert: true
            };


            const dataset_number = 32;
            console.log(dataset_number);

            let chain = Promise.resolve();
            for (let i = 0; i < dataset_number; i++) {
                chain = chain.then(() => {
                    options2.body.creationLocation = this.instrument[i % 15];
                    options2.body.sourceFolder = "/" + this.instrument[i % 15] + "/disk0";
                    console.log(options2.body.creationLocation);
                    rp(options2).then(function (body) {
                        console.log(body.pid);
                        attachment_options.body.datasetId = body.pid;
                        rp(attachment_options);
                        orig_options.body.datasetId = body.pid;
                        rp(orig_options);
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
