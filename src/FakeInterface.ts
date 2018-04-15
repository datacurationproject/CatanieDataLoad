"use strict";


class FakeInterface {//extends AbstractInterface{

    constructor() {
        //super();
        this.machine_name = "kubetest01";
    }

    login() {
        console.log("not actually logging in");
    }

    send_to_catamel(obj, api_descriptor) {
        console.log("Not actually sending");
    }

}


export {FakeInterface}