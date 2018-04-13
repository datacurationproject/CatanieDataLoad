/**
 * @file Loads jobs into catamel
 * @author Gareth Murphy
 * @version 0.1
 */

const assert = require('assert');


class AccessT {
    constructor() {
        this._access_token = "Bcsb8yzlVOrldyYmr3PJP7iVGJ58kGAvLIj0oyBfhG6Cjw2zOOSe2DTC0i0LMLjF";
        this._access_token = "GYUFN66B574RjFVzg75vUEPMHjxX5ndqOgkMDHW8JlPaXuueIT4XAIJiECXh6d0j";
        this._access_token = "RXg3vqvXAIv2UuClVsQcyHG4AoCOLGnzHmKB6Jkf1FsmLJlsLseuBhWpJFgNA6Il";
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
