"use strict";
/**
 * @file Loads jobs into catamel
 * @author Gareth Murphy
 * @version 0.1
 */


import {AbstractInterface} from "./AbstractInterface";
import {Dataset, DatasetLifecycle} from "./CatamelClasses";


class DatasetLoader {
    date: any;
    futuredate: any;
    dataset_number: number;
    prefix: any;
    instrument: any;
    catamel_interface: any;
    starting_id: any;

    constructor(abstract_interface: AbstractInterface) {
        let today = new Date();
        this.date = today.toISOString();
        this.futuredate = "2018-03-05T09:34:26.550Z";
        this.dataset_number = 1;
        this.prefix = "10.17199/";
        this.catamel_interface = abstract_interface;
        this.starting_id = 1900;

    }

    load_dataset() {
        //this.catamel_interface.login();
        for (let i = 0; i < this.dataset_number; i++) {
            let obj = new Dataset();
            let dataset_lifecycle = new DatasetLifecycle();
            //let dataset_id = this.starting_id + i;
            obj.principalInvestigator = "J. Carberry";
            obj.endTime = this.date;
            obj.creationLocation = "xxxx";
            obj.dataFormat = "nexus-hdf5";
            obj.scientificMetadata = {
                "CIF": "H20",
                "raw": true,
                "processed": false
            };
            obj.owner = "Gareth Murphy";
            obj.orcidOfOwner = "orcid.org/0000-0002-1825-0097";
            obj.contactEmail = "gareth.murphy@esss.se";
            obj.sourceFolder = "/" + this.catamel_interface.instrument[i % 15] + "/disk" + i;
            obj.size = 201024024024;
            obj.packedSize = 11024024024;
            obj.creationTime = "2014-05-15T09:34:26.550Z";
            obj.creationTime = this.date;
            obj.type = "experiment";
            obj.validationStatus = "validated";
            obj.keywords = ["lifecycle keywords"];
            obj.description = "Dopamine -hydrobromide 100-200ms cooling from 100K ";
            obj.userTargetLocation = "C-SPEC";
            obj.classification = "AV=medium,CO=low";
            obj.license = "ESS";
            obj.version = "v1";
            obj.doi = this.prefix + "101010101";
            obj.isPublished = true;
            obj.ownerGroup = "ess_p23232";
            obj.accessGroups = [
                "multigrid",
                "p2222"
            ];
            obj.createdAt = this.date;
            obj.updatedAt = this.date;
            obj.sampleId = "771" + i;
            obj.proposalId = 123 + i;


            dataset_lifecycle.id = this.prefix + obj.pid;
            dataset_lifecycle.isOnDisk = true;
            dataset_lifecycle.isOnTape = true;
            dataset_lifecycle.archiveStatusMessage = "datasetRetrieved";
            dataset_lifecycle.retrieveStatusMessage = "retrieveStatus";
            dataset_lifecycle.lastUpdateMessage = "string";
            dataset_lifecycle.archiveReturnMessage = "archiveStatus";
            dataset_lifecycle.dateOfLastMessage = this.date;
            dataset_lifecycle.dateOfDiskPurging = this.date;
            dataset_lifecycle.archiveRetentionTime = this.date;
            dataset_lifecycle.isExported = true;
            dataset_lifecycle.exportedTo = "string";
            dataset_lifecycle.dateOfPublishing = this.date;
            dataset_lifecycle.ownerGroup = "multigrid";
            dataset_lifecycle.accessGroups = ["multigrid"];
            dataset_lifecycle.datasetId = this.prefix + obj.pid;
            dataset_lifecycle.rawDatasetId = dataset_lifecycle.datasetId;
            dataset_lifecycle.derivedDatasetId = dataset_lifecycle.datasetId;
            dataset_lifecycle.createdAt = this.date;
            dataset_lifecycle.updatedAt = this.date;

            this.catamel_interface.send_to_catamel(obj, "RawDatasets");

        }

    }

}


export {DatasetLoader};
