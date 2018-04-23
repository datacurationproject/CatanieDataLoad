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
            let ee = {
                "principalInvestigator": "J. Carberry",
                "endTime": "2018-03-05T09:34:26.550Z",
                "creationLocation": "NMX",
                "dataFormat": "nexus-hdf5",
                "scientificMetadata": {"CIF": "H20", "raw": true, "processed": false},
                "owner": "Gareth Murphy",
                "orcidOfOwner": "orcid.org/0000-0002-1825-0097",
                "contactEmail": "gareth.murphy@esss.se",
                "sourceFolder": "/NMX/disk0",
                "size": 11737418240,
                "packedSize": 11737418240,
                "creationTime": "2018-03-05T09:34:26.550Z",
                "type": "experiment",
                "validationStatus": "validated",
                "keywords": ["lifecycle keywords"],
                "description": "Dopamine -hydrobromide 100-200ms cooling from 100K ",
                "userTargetLocation": "C-SPEC",
                "classification": "AV=medium,CO=low",
                "license": "ESS",
                "version": "string",
                "doi": "string",
                "isPublished": true,
                "ownerGroup": "ess_p2222",
                "accessGroups": ["multigrid", "p2222"],
                "createdAt": "2018-03-05T09:34:26.550Z",
                "updatedAt": "2018-03-05T09:34:26.550Z",
                "sampleId": "7710",
                "proposalId": 123
            };
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
                options2.body.creationLocation = this.instrument[i % 15];
                chain=chain.then(()=>rp(options2));
            }
        }).catch(function (err) {
            console.log('what went wrong?', err);
            // POST failed...
        });


        // send the collected data as JSON

    }

}


export {CatamelInterface};
