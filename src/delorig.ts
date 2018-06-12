"use strict";
import * as assert from 'assert';
import {LoggerIn} from './LoggerIn';

const rp = require('request-promise');

class DeleterOrig extends LoggerIn {


    get_datasets(response) {
        var access = response.id;
        console.log(access)
        assert(access.length == 64);
        var datasets = 'ddd';
        let dataset_url = datasets_url();
        let url = "https://scicatapi.esss.dk/api/v2/OrigDatablocks?access_token=" + access;
        console.log(url);

        let options2 = {
            url: url,
            method: 'GET',
            body: {"test": "test"},
            json: true,
            rejectUnauthorized: false,
            requestCert: true
        };

        rp(options2).then((body) => {
            var a = JSON.stringify(body);
            //console.log("login OK: " + a);
            console.log(JSON.stringify(body[0]));

            let deletable = body[0].id;
            let url = "https://scicatapi.esss.dk/api/v2/OrigDatablocks/" + deletable + "?access_token=" + access;
            console.log(url);
            let options3 = {
                url: url,
                method: 'DELETE',
                body: deletable,
                rejectUnauthorized: false,
                requestCert: true
            };
            rp(options3);

            for (var key in body) {
                if (body.hasOwnProperty(key)) {
                    //console.log(key + " -> " + body[key].pid);


                    let deletable = body[key].id;
                    let url = "https://scicatapi.esss.dk/api/v2/OrigDatablocks/" + deletable + "?access_token=" + access;
                    let options3 = {
                        url: url,
                        method: 'DELETE',
                        body: body[0].pid,
                        rejectUnauthorized: false,
                        requestCert: true
                    };
                    rp(options3);


                }
            }
        });
        return datasets;
    }

    async main() {
        var x = await login();
        var y = await get_datasets(x)
        console.log(y);
    }

}

let met = new DeleterOrig()
met.main()
