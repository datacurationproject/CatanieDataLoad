"use strict";
import * as assert from "assert";
import { LoggerIn } from "./LoggerIn";
import { DeleterOrig } from "./DeleterOrig";
import { setupMaster } from "cluster";

const rp = require("request-promise");

    async function main(){
        const sam = new DeleterOrig();
        const id = await sam.login("default");
        sam.set_model("Samples");
        sam.deleteModel(id);
    }
if (require.main === module) {
    main();
  }
