"use strict";
const os = require("os");

class AbstractInterface {
    url_pick: any;
    url: string;
    machine_name: string;
    access_t: any;
    path: string;

    instrument: any;

    constructor() {
        this.instrument = [
            "BEER",
            "BIFROST",
            "C-SPEC",
            "DREAM",
            "ESTIA",
            "FREIA",
            "HEIMDAL",
            "LOKI",
            "MAGIC",
            "MIRACLES",
            "NMX",
            "ODIN ",
            "SKADI",
            "T-REX",
            "VESPA"
        ];
        this.url_pick = {
            local: "http://localhost:3000",
            //"macmurphy.local": "http://localhost:3000",
            "macmurphy.local": "https://scicatapi.esss.dk",
            //"CI0020036": "http://localhost:3000",
            CI0020036: "https://scicatapi.esss.dk",
            "kubetest01.dm.esss.dk": "https://kubetest02.dm.esss.dk:32223",
            "scicat01.esss.lu.se": "https://scicat02.esss.lu.se:32223",
            dst: "https://scicatapi.esss.dk",
            k8s: "http://catamel-dacat-api-server-dev"
        };
        this.path = "./src/config.json";

        this.machine_name = os.hostname();
        //this.machine_name = "http://catamel-dacat-api-server-dev"
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

export { AbstractInterface };
