"use strict";
import * as assert from "assert";
import * as datasets from "./datasets.json";
import { LoggerIn } from "./LoggerIn";
import rp = require("request-promise");

class MetadataUploader extends LoggerIn {
  async get_datasets(response) {
    const access = response.id;
    console.log(access);
    assert(access.length == 64);

    let url = this.url_base + "Datasets?access_token=" + access;
    let url_orig = this.url_base + "OrigDatablocks?access_token=" + access;
    let url_publish = this.url_base + "PublishedData?access_token=" + access;
    let url_lifecycle = this.url_base + "DatasetLifecycles?access_token=" + access;
    console.log(url);

    for (let key in datasets) {
      if (datasets.hasOwnProperty(key)) {
        console.log(key + " -> " + datasets[key]["dataset"]);
        console.log(url_orig);
        console.log(datasets[key]["orig"]);

        let options3 = {
          url: url,
          method: "PUT",
          body: datasets[key]["dataset"],
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

        let options4 = {
          url: url_orig,
          method: "POST",
          body: datasets[key]["orig"],
          json: true,
          rejectUnauthorized: false,
          requestCert: true
        };

        try {
          const response = await rp(options4);
          Promise.resolve(response);
        } catch (error) {
          console.log(url_orig);
          console.log(error);
          return Promise.reject(error);
        }

        let options5 = {
          url: url_publish,
          method: "PUT",
          body: datasets[key]["published"],
          json: true,
          rejectUnauthorized: false,
          requestCert: true
        };
        try {
          const response = await rp(options5);
          Promise.resolve(response);
        } catch (error) {
          console.log(url_orig);
          console.log(error);
          return Promise.reject(error);
        }
        console.log(options5);

        let options_lifecycle = {
          url: url_lifecycle,
          method: "PUT",
          body: datasets[key]["lifecycle"],
          json: true,
          rejectUnauthorized: false,
          requestCert: true
        };
        try {
          const response = await rp(options_lifecycle);
          Promise.resolve(response);
        } catch (error) {
          console.log(url_orig);
          console.log(error);
          return Promise.reject(error);
        }
        console.log(options_lifecycle);


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

let met = new MetadataUploader();
met.main();
