import {AbstractInterface} from './AbstractInterface';
import {AccessT} from './AccessToken';

typeof AbstractInterface;

const fs = require('fs');

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

class CatamelInterface extends AbstractInterface {


    constructor() {
        super();
    }


    login() {
        let rawdata = {'user': 'fhjkda', 'password': 'fhgjek'};
        fs.lstat(this.path, (err, stats) => {

            if (err)
                return console.log(err); //Handle error
            rawdata = fs.readFileSync('/tmp/creds');

            console.log(`Is file: ${stats.isFile()}`);
        });

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
        const token = new AccessT();


        function reqListener() {
            console.log(this.responseText);
        }

        xhr.addEventListener('load', reqListener);

        let access_token = token.access_token;

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
