"use strict";
import * as assert from "assert";
import * as datasets from "./proposal.json";
import { LoggerIn } from "./LoggerIn";
import rp = require("request-promise");

class ProposalUploader extends LoggerIn {
  async getDatasets(response) {
    const access = response.id;
    console.log(access);
    assert(access.length == 64);

    let url = this.url_base + "Proposals?access_token=" + access;
    console.log(url);

    for (let key in datasets) {
      if (datasets.hasOwnProperty(key)) {
        console.log(key + " -> " + datasets[key]["proposal"]);

        let options3 = {
          url: url,
          method: "PUT",
          body: datasets[key]["proposal"],
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
    const x = await this.login("proposal");
    const y = await this.getDatasets(x);
    console.log(y);
  }
}

let met = new ProposalUploader();
met.main();
