/**
 * @file Loads jobs into catamel
 * @author Gareth Murphy
 * @version 0.1
 */

const assert = require('assert');


class AccessT {
    constructor() {
        this._access_token = "Bcsb8yzlVOrldyYmr3PJP7iVGJ58kGAvLIj0oyBfhG6Cjw2zOOSe2DTC0i0LMLjF";
        this._access_token = "AznwIf4RBnNe5wNDxyMX4r7BKoyazfrJRNrViRCM88YSBb6rzBf23cEpGF7YBUDN";
    }

    private _access_token: string;

    get access_token(): string {
        //private token_length : int;
        //var token_length=this._access_token.length;
        //assert.equal(token_length ,64, "string length not equal to 64")
        return this._access_token;
    }

    set access_token(value: string) {
        this._access_token = value;
    }

}


export {AccessT};
