/**
 * @file Loads jobs into catamel
 * @author Gareth Murphy
 * @version 0.1
 */


class AccessT {
    constructor() {
        this._access_token = "C6pJWE7VQb1pHjDBITN4iVv45U7d9FAgnzo0YyYubN7wnqPWGDF3JO17jcxdraMM";
    }

    private _access_token: string;

    get access_token(): string {
        return this._access_token;
    }

    set access_token(value: string) {
        this._access_token = value;
    }

}


export {AccessT};
