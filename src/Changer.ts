"use strict";
import * as assert from "assert";
import { LoggerIn } from "./LoggerIn";

const fs = require('fs');

const rp = require("request-promise");

class Changer extends LoggerIn {

    readjson(filename: string) {
        return JSON.parse(fs.readFileSync(filename, "utf-8"));
    }

    get_datasets(response:any, user:string) {
        const access = response.id;
        console.log(access);
        assert(access.length == 64);
        const datasets = "ddd";

        const oldPasswordObject = this.readjson("./src/"+user+".local.json");
        const oldPassword = oldPasswordObject.password;
        const passwordObject = this.readjson("./src/newconfig.local.json");
        const newPassword = passwordObject.newPassword;

        console.log(newPassword);
        const data = `oldPassword=${oldPassword}&newPassword=${newPassword}`;



            let url =
                this.url_base + "Users/change-password" + "?access_token=" + access;
            let options3 = {
                url: url,
                method: "POST",
                body: data,
                headers: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                rejectUnauthorized: false,
                requestCert: true
            };
            rp(options3);
    }

    async main() {
        const x = await this.login("default");
        const y = await this.get_datasets(x, "ingestor");
        const p = await this.login("proposal");
        const q = await this.get_datasets(p, "proposalIngestor");
        const a = await this.login("userGroupIngestor");
        const b = await this.get_datasets(a, "userGroupIngestor");
        const c = await this.login("admin");
        const d = await this.get_datasets(c, "admin");
        const e = await this.login("archiveManager");
        const f = await this.get_datasets(e, "archiveManager");
    }
}

let met = new Changer();
met.main();
