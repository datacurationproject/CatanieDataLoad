/**
 * @file Loads jobs into catamel
 * @author Gareth Murphy
 * @version 0.1
 */

const assert = require('assert');


class AccessT {
    constructor() {
        //this._access_token = "wUWyN5TCuztyk8KugADX6uzGC8HJBn2xeb2FnBUBBHYF56busgIH1acOoEWvnTi6";
        this._access_token = "NT4qQUhPI2iswTkcys7ad9fD94A1U0SamwWVoExNP1dYN1o3gqyYbhjAmGWCt68S";
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
