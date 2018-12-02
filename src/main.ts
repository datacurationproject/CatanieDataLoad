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
  const id2 = await deletePub.login("default");
  await deletePub.set_model("PublishedData");
  const response2 = await deletePub.deleteModel(id2);

  const deleteDat = await new DeleterOrig();
  const id3 = await deleteDat.login("default");
  await deleteDat.set_model("Datasets");
  const response3 = await deleteDat.deleteModel(id3);

  const upload = await new MetadataUploader()
  await upload.get_datasets(id);

}

main();
