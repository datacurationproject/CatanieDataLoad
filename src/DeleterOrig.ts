"use strict";
import * as assert from "assert";
import { LoggerIn } from "./LoggerIn";

const rp = require("request-promise");

export class DeleterOrig extends LoggerIn {
    model="OrigDatablocks";
    file="orig.json";

    set_model(modeltype: string){
        this.model = modeltype;
    }

    deleteModel(response) {
        console.log(this.model , "delete");
        const access = response.id;
        console.log(access);
        assert(access.length == 64);
        const datasets = "ddd";

        let url = this.url_base + this.model+"?access_token=" + access;
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

            let deletable = body[0].id;
            let url =
                this.url_base +
                this.model+"/" +
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
                    let deletable = "string";
                    if (this.model == "OrigDatablocks"){
                        deletable = body[key].id;
                        console.log("gm",this.model , deletable);
                    } 
                    else if (this.model == "PublishedData"){
                        deletable = encodeURIComponent( body[key].doi);
                        console.log("gm",this.model , deletable);
                    }
                    else if (this.model == "Datasets"){
                        deletable = encodeURIComponent( body[key].pid);
                    console.log("gm",this.model , deletable);
                    }
                    let url =
                        this.url_base +
                        this.model+"/" +
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
        const x = await this.login("default");
        const y = await this.deleteModel(x);
        console.log(y);
    }
}

if (require.main === module) {
    const met = new DeleterOrig();
    met.main()
}