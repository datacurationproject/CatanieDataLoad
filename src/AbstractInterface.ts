"use strict";
const os = require('os');


class AbstractInterface {
    url_pick: any;
    url: string;
    machine_name: string;
    access_t: any;
    path: string;
    login_promise: any;
    instrument: any;

    constructor() {
        this.instrument = ["NMX", "BEER", "C-SPEC", "BIFROST", "MIRACLES", "MAGIC", "T-REX", "HEIMDAL", "LOKI", "FREIA", "ESTIA", "SKADI", "VESPA", "ODIN ", "DREAM"];
        this.url_pick = {
            "local": "http://localhost:3000",
            "macmurphy.local": "http://localhost:3000",
            "CI0020036": "http://localhost:3000",
            //"CI0020036": "https://scicatapi.esss.dk",
            "kubetest01.dm.esss.dk": "https://kubetest02.dm.esss.dk:32223",
            "scicat01.esss.lu.se": "https://scicat02.esss.lu.se:32223",
            "dst": "https://scicatapi.esss.dk"
        };
        this.path = './src/config.json';


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
        console.log(api_descriptor);
    }
}


export {AbstractInterface}
