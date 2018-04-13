import {AccessT} from './AccessToken';

const fs = require('fs');
"use strict";

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const os = require('os');

class CatamelInterface {
    url_pick: any;
    url: string;
    machine_name: string;
    access_token: string;

    constructor() {
        this.url_pick = new Map<string, string>();
        this.url_pick.set('local', 'http://localhost:3000');
        this.url_pick.set('macmurphy.local', 'http://localhost:3000');
        this.url_pick.set('CI00020036', 'http://localhost:3000');
        this.url_pick.set('kubetest01', 'https://kubetest02.dm.esss.dk:32223');

        this.url_pick.set('scicat01', 'http://scicat02.esss.lu.se:32222');
        this.url_pick.set('dst', 'https://scicatapi.esss.dk');


        this.machine_name = os.hostname();

        this.url = this.url_pick.get(this.machine_name);

        console.log(this.machine_name);
        console.log(this.url);
        this.login();

        const token = new AccessT();
        this.access_token = token.get_token();

    }

    login() {


        let rawdata = fs.readFileSync('/tmp/creds');
        const xhr = new XMLHttpRequest();
        xhr.open('POST', this.url, true);
        xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        const login_info = JSON.stringify(rawdata);
        xhr.send(login_info);
        console.log(this.url);


        xhr.onload = function () {
            console.log('DONE', xhr.readyState);
            console.log('xhr.status=', xhr.status);
            console.log('response=', xhr.responseText);
        };
    }

    send_to_catamel(obj, api_descriptor) {
// construct an HTTP request
        const xhr = new XMLHttpRequest();


        function reqListener() {
            console.log(this.responseText);
        }

        xhr.addEventListener('load', reqListener);


        const local_url = 'http://localhost:3000';
        const dm_url = 'https://kubetest02.dm.esss.dk:32222';
        const ess_url = 'http://scicat02.esss.lu.se:32222';
        const dst_url = 'https://scicatapi.esss.dk';
        const url = this.url + '/api/v2/' + api_descriptor + '?access_token=' + this.access_token;
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
