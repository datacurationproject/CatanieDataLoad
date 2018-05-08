"use strict";

/**
 * @file Loads jobs into catamel
 * @author Gareth Murphy
 * @version 0.1
 */

class DatasetSetup {
    data: any;
    options: any;

    constructor() {
        this.data = 0;
        this.options = {
            url: "www",
            method: 'POST',
            body: {"name":"test"},
            json: true,
            rejectUnauthorized: false,
            requestCert: true
        };
    }
}

export {DatasetSetup};
