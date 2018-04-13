import AbstractInterface from "./AbstractInterface";

typeof AbstractInterface;

class FakeInterface {

    constructor() {
        //super();
    }

    login() {
        console.log("not actually logging in");
    }

    send_to_catamel(obj, api_descriptor) {
        console.log("Not actually sending");
    }

};


export {FakeInterface}