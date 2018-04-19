"use strict";
import {AbstractInterface} from './AbstractInterface';
import {AccessT} from './AccessToken';
import * as data from './config.json'

var rp = require('request-promise');

const fs = require('fs');

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

class CatamelInterface extends AbstractInterface {


    constructor() {
        super();
    }


    login() {

        this.access_t = new AccessT();
        console.log('previous access token', this.access_t.access_token );
        console.log('private data ', data);
        fs.lstat(this.path, (err, stats) => {

            if (err)
                return console.log('error gm', err); //Handle error
            rawdata = fs.readFileSync('/tmp/creds');

            console.log(`Is file: ${stats.isFile()}`);
        });
        let rawdata = data;

        var options = {
            url: this.url + '/api/v2/Users/login',
            method: 'POST',
            body: rawdata,
            json: true,
            rejectUnauthorized: false,
            requestCert: true
        };

        let local_access = 'test';

        let login_promise= rp(options)
            .then(function (parsedBody) {
                //this.access_t.access_token = parsedBody.id;
                console.log('gm test output ', parsedBody.id);
                local_access = parsedBody.id;
                return (parsedBody.id);
            })
            .catch(function (err) {
                console.log('what went wrong?', err);
                // POST failed...
            });

        console.log('did it work?', this.access_t.access_token);

        //console.log(response.body.id);
        //console.log('gm output ',response);







    }

    send_to_catamel(obj, api_descriptor) {
// construct an HTTP request
        const xhr = new XMLHttpRequest();
        const token = new AccessT();


        function reqListener() {
            console.log(this.responseText);
        }

        xhr.addEventListener('load', reqListener);

        let access_token = this.access_t.access_token;

        const url = this.url + '/api/v2/' + api_descriptor + '?access_token=' + access_token;
        console.log(url);

        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

        // send the collected data as JSON
        const catamel_obj = JSON.stringify(obj);
        xhr.send(catamel_obj);
        console.log(url);
        console.log(catamel_obj);


        xhr.onload = function () {
            console.log('DONE', xhr.readyState);
            console.log('xhr.status=', xhr.status);
            console.log('response=', xhr.responseText);
        };

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                console.log('xhr.readyState=', xhr.readyState);
                console.log('xhr.status=', xhr.status);
                console.log('response=', xhr.responseText);

                let data = JSON.parse(xhr.responseText);
                let uploadResult = data['message'];
                console.log('uploadResult=', uploadResult);
                if (uploadResult === 'failure') {
                    console.log('failed to upload file');
                } else if (uploadResult === 'success') {
                    console.log('successfully uploaded file');
                }
            }

        };
        return xhr;
    }

}


export {CatamelInterface};
