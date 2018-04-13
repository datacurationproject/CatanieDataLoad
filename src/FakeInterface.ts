import AbstractInterface from "./AbstractInterface"

class FakeInterface extends AbstractInterface {

    constructor() {
        super();
    }

    send_to_catamel() {
        console.log("Not actually sending");
    }

}


export {FakeInterface}