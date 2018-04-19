"use strict";
const os = require('os');
import {AccessT} from './AccessToken';


class AbstractInterface {
    url_pick: any;
    url: string;
    machine_name: string;
    access_t: any;
    path: string;

    constructor() {
        this.access_t = new AccessT();
        this.url_pick = {
            "local": "http://localhost:3000",
            "macmurphy.local": "http://localhost:3000",
            "CI0020036": "http://localhost:3000",
            "kubetest01.dm.esss.dk": "https://kubetest02.dm.esss.dk:32223",
            "scicat01": "http://scicat02.esss.lu.se:32222",
            "dst": "https://scicatapi.esss.dk"
        };
        this.path = '/tmp/creds';


        this.machine_name = os.hostname();
        console.log("machine name ", this.machine_name);
        //this.machine_name = "kubetest01";

        this.url = this.url_pick[this.machine_name];

        console.log(this.machine_name);
        console.log(this.url);


    }


    login() {
        console.log("not actually logging in");
    }

    send_to_catamel(obj, api_descriptor) {
        console.log("Not actually sending");
    }
}


export {AbstractInterface}
