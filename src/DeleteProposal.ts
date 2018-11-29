"use strict";
import * as assert from "assert";
import { LoggerIn } from "./LoggerIn";

const rp = require("request-promise");

class DeleterPublisher extends LoggerIn {
    get_datasets(response) {
        const access = response.id;
        console.log(access);
        assert(access.length == 64);
        const datasets = "ddd";

        let url = this.url_base + "Proposals?access_token=" + access;
        console.log(url);

        let options2 = {
            url: url,
            method: "GET",
            body: { test: "test" },
            json: true,
            rejectUnauthorized: false,
            requestCert: true
        };

        rp(options2).then(body => {
            console.log(JSON.stringify(body[0]));

            let deletable = encodeURIComponent(body[0].proposalId);
            let url =
                this.url_base +
                "Proposals/" +
                deletable +
                "?access_token=" +
                access;
            console.log(url);
            let options3 = {
                url: url,
                method: "DELETE",
                body: deletable,
                rejectUnauthorized: false,
                requestCert: true
            };
            rp(options3);

            for (let key in body) {
                if (body.hasOwnProperty(key)) {
                    //console.log(key + " -> " + body[key].p);

                    let deletable = encodeURIComponent(body[key].proposalId);
                    let url =
                        this.url_base +
                        "Proposals/" +
                        deletable +
                        "?access_token=" +
                        access;
                    let options3 = {
                        url: url,
                        method: "DELETE",
                        body: deletable,
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
        const x = await this.login("proposal");
        const y = await this.get_datasets(x);
        console.log(y);
    }
}

let met = new DeleterPublisher();
met.main();
