/**
 * @file Loads jobs into catamel
 * @author Gareth Murphy
 * @version 0.1
 */


class AccessT {
    constructor() {
        this._access_token = "lbWbOGeDl3yLjrMh4xCG8eRFQpaNZw84vkZJTfTAUkjyVRbIBpi0jEiMIQPUS4xo";
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

