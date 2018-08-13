"use strict";
import {AbstractInterface} from './AbstractInterface';
import {AccessT} from './AccessToken';
import {DatasetSetup} from './DatasetSetup';
import {Orig} from './Orig';
import {Attach} from './Attach';
const data = require('./config.json');
const datasets = require('../datasets.json');

const async = require('async');

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
            const url = this.url + '/api/v2/' + api_descriptor + '?access_token=' + access_token;
            console.log(url);
			console.log(datasets["orig1"]);
            let ee = datasets["orig1"];
            console.log(ee);
            let optionz_dataset = {
                url: url,
                method: 'POST',
                body: ee,
                json: true,
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


            const dataset_number = 4;
            console.log(dataset_number);

            let chain = Promise.resolve();
            for (let i = 0; i < dataset_number; i++) {
                chain = chain.then(() => {
                    optionz_dataset.body.creationLocation = "MultiBlade";
                    optionz_dataset.body.sourceFolder = "/" + "MultiBlade" ;
                    optionz_dataset.body.pid =  "MB"+String(i) ;
                    console.log(optionz_dataset.body.creationLocation);
                    rp(optionz_dataset).then(function (body) {
                        console.log(body.pid);
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
        return this.url + '/api/v2/' + api_descriptor + '?access_token=' + access_token;
    }

    send_async(obj, api_descriptor) {
        //opt : any;

        let access_token = "uYFmQT2mFKA4GFYOAEdD9aOVSpWhTKwvqoPVHr86nsc9RKrrDlQ6CASIOpjt72j1";
        const url = this.url + '/api/v2/' + api_descriptor + '?access_token=' + access_token;


        let opt = new DatasetSetup();
        let optionz_dataset= opt.options;
        optionz_dataset.url = url;
        optionz_dataset.body = obj;

        let orig_opt = new Orig();
        let orig_optionz= orig_opt.options;
        orig_optionz.url = this.make_url('OrigDataBlocks', access_token);
        orig_optionz.body = orig_opt.data;

        const queue_size = 20;
        let queue = async.cargo(function (runner, callback1) {

            async.nextTick(callback1);
        }, queue_size);

        queue.drain = function () {
            console.log("Queue completely drained");
        };

        const dataset_number = 30;
        let range = Array.apply(null, {length: dataset_number}).map(Number.call, Number);

        for (let i of range) {
            //queue.push({name: "dataset_" + i});
            optionz_dataset.body.creationLocation = this.instrument[i % 15];
            optionz_dataset.body.sourceFolder = "/" + this.instrument[i % 15] + "/disk0";
            orig_optionz.body.size = 2.5e11 * (0.5 + 0.5 * Math.random());
            queue.push(rp(optionz_dataset)
                .then(function (body) {
                    console.log(body.pid);
                    orig_optionz.body.datasetId = body.pid;
                    rp(orig_optionz);
                    return (body.pid);
                }).catch(function (err) {
                    console.log("disaster!", err);
                }));
            //console.log('gmi', i);
        }
    }


}


export {CatamelInterface};
