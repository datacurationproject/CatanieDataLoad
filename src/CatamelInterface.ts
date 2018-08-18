"use strict";
import { AbstractInterface } from "./AbstractInterface";

let fs = require("fs");
const async = require("async");

const rp = require("request-promise");

class CatamelInterface extends AbstractInterface {
    constructor() {
        super();
    }

    login() {
        let data = {username: "dsd ", password: "test"};
        data = fs.readFile("config.json", "utf8");

        console.log("private data ", data);
        let rawdata = data;
        let options = {
            url: this.url + "/api/v2/Users/login",
            method: "POST",
            body: rawdata,
            json: true,
            rejectUnauthorized: false,
            requestCert: true
        };
        rp(options).then(body => {
            this.access_t.access_token = body.id;
            console.log("login OK: " + body.id);
        });
    }
}

export { CatamelInterface };
