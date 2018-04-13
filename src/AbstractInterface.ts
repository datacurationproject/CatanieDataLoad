const os = require('os');


"use strict";




class AbstractInterface {
    url_pick: any;
    url: string;
    machine_name: string;
    access_token: string;
    path: string;

    constructor() {
        this.url_pick = {
            "local": "http://localhost:3000",
            "macmurphy.local": "http://localhost:3000",
            "CI00020036": "http://localhost:3000",
            "kubetest01": "https://kubetest02.dm.esss.dk:32223",
            "scicat01": "http://scicat02.esss.lu.se:32222",
            "dst": "https://scicatapi.esss.dk"
        };
        this.path = '/tmp/creds';


        this.machine_name = os.hostname();
        this.machine_name = "kubetest01";

        this.url = this.url_pick[this.machine_name];

        console.log(this.machine_name);
        console.log(this.url);
        this.login();


    }


    login() {
    }


    send_to_catamel(obj, api_descriptor) {
    }

}


export {AbstractInterface}