"use strict";
import * as assert from "assert";
import * as datasets from "./published_data.json";
import { LoggerIn } from "./LoggerIn";
import rp = require("request-promise");

class PublishedDataUploader extends LoggerIn {
  async get_datasets(response) {
    const access = response.id;
    console.log(access);
    assert(access.length == 64);

    let url = this.url_base + "PublishedData?access_token=" + access;
    console.log(url);

    for (let key in datasets) {
      if (datasets.hasOwnProperty(key)) {
        console.log(key + " -> " + datasets[key]["published_data"]);

        let options3 = {
          url: url,
          method: "PUT",
          body: datasets[key]["published_data"],
          json: true,
          rejectUnauthorized: false,
          requestCert: true
        };
        try {
          await rp(options3);
          //return Promise.resolve(response);
        } catch (error) {
          console.log(error);
          return Promise.reject(error);
        }
      }
    }

    return datasets;
  }

  async main() {
    const x = await this.login();
    const y = await this.get_datasets(x);
    console.log(y);
  }
}

let met = new PublishedDataUploader();
met.main();
