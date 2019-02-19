"use strict";
import * as os from "os";

const rp = require('request-promise');

const fs = require('fs');

class LoggerIn {

    url_base: string;
    login_url: string;
    machine_name: string;
    url: string;
    url_pick: any;
    username: string;

    constructor() {
        this.url_pick = {
            "local": "http://localhost:3000",
            "macmurphy.home": "http://localhost:3000",
            // "macmurphy.home": "https://scicatapi.esss.dk",
           "CI0020036": "http://localhost:3000",
//           "CI0020036": "https://scicatapi.esss.dk",
            "kubetest01.dm.esss.dk": "https://kubetest02.dm.esss.dk:32223",
            "scicat01.esss.lu.se": "https://scicat03.esss.lu.se:32223",
            "dst": "https://scicatapi.esss.dk",
            "k8s": "http://catamel-dacat-api-server-dev"
        };


        this.machine_name = os.hostname();
        console.log("machine name ", this.machine_name);

        this.url = this.url_pick[this.machine_name];
        this.url_base = this.url + "/api/v3/";
        this.login_url = this.url_base + "Users/login";
    }

    readjson (filename:string){
        return  JSON.parse(fs.readFileSync(filename, "utf-8"));
    }
    async login(ingestortype: string) {

        let url = this.login_url;
        let rawdata = {} ;
        

        if (ingestortype == "proposal"){
            rawdata = this.readjson("./src/proposalIngestor.local.json")
            console.log(rawdata);
        }else if (ingestortype == "archiveManager"){
            rawdata = this.readjson("./src/archiveManager.local.json");
            console.log(rawdata);
        }else if (ingestortype == "userGroupIngestor"){
            rawdata = this.readjson("./src/userGroupIngestor.local.json");
            console.log(rawdata);
        }else if (ingestortype == "admin"){
            rawdata = this.readjson("./src/admin.local.json");
            console.log(rawdata);
        }else{
            rawdata = this.readjson("./src/ingestor.local.json");
            console.log(rawdata);
        }

        let options1 = {
            url: url,
            method: 'POST',
            body: rawdata,
            json: true,
            rejectUnauthorized: false,
            requestCert: true
        };
        try {
            const response = await
                rp(options1);
            return Promise.resolve(response);
        }
        catch (error) {
            return Promise.reject(error);
        }

    }

}


export { LoggerIn }
