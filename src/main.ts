"use strict";
import rp = require("request-promise");
import { DeleterOrig } from "./DeleterOrig";
import { MetadataUploader } from "./MetadataUploader";

async function main() {
  const deleteOrig = new DeleterOrig();
  const id = await deleteOrig.login("default");
  await deleteOrig.set_model("OrigDatablocks");
  const response = await deleteOrig.deleteModel(id);

  const deletePub = new DeleterOrig();
  await deletePub.set_model("PublishedData");
  const response2 = await deletePub.deleteModel(id);

  const deleteDat = await new DeleterOrig();
  await deleteDat.set_model("Datasets");
  const response3 = await deleteDat.deleteModel(id);

  const deleteSample = await new DeleterOrig();
  await deleteSample.set_model("Samples");
  const response4 = await deleteSample.deleteModel(id);

  const upload = await new MetadataUploader()
  await upload.get_datasets(id);

}

main();
