"use strict";
import * as assert from "assert";
import { LoggerIn } from "./LoggerIn";

const rp = require("request-promise");

class Deleter extends LoggerIn {
    get_datasets(response) {
        const access = response.id;
        console.log(access);
        assert(access.length == 64);
        const datasets = "ddd";

        let url = this.url_base + "Datasets?access_token=" + access;
        console.log(url);

        let options2 = {
            url: url,
            method: "GET",
            body: {test: "test"},
            json: true,
            rejectUnauthorized: false,
            requestCert: true
        };

        rp(options2).then(body => {
            console.log(JSON.stringify(body[0]));

            for (let key in body) {
                if (body.hasOwnProperty(key)) {
                    let deletable = body[key].pid.replace("/", "%2F");
                    let url =
                        this.url_base + "Datasets/" + deletable + "?access_token=" + access;
                    let options3 = {
                        url: url,
                        method: "DELETE",
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
        const x = await this.login();
        const y = await this.get_datasets(x);
        console.log(y);
    }
}

let met = new Deleter();
met.main();
