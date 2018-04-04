/**
 * @file Loads jobs into catamel
 * @author Gareth Murphy
 * @version 0.1
 */


import {CatamelInterface} from './CatamelInterface';
import {Dataset, DatasetLifecycle} from './CatamelClasses';


let catamel_interface = new CatamelInterface();



class DatasetLoader {
	constructor(){
	this.instrument = ["NMX", "BEER", "C-SPEC", "BIFROST", "MIRACLES", "MAGIC", "T-REX", "HEIMDAL", "LOKI", "FREIA", "ESTIA", "SKADI", "VESPA", "ODIN ", "DREAM"];
}
    date: any;
    futuredate: any;
    dataset_number: number = 15;
    prefix: any;
	instrument: any;


    load_dataset() {
        for (let i = 0; i < this.dataset_number; i++) {
            let obj = new Dataset();
            let dataset_lifecycle = new DatasetLifecycle();
            this.date = '2018-03-05T09:34:26.550Z';
            this.futuredate = '2018-03-05T09:34:26.550Z';
            let dataset_id = 500 + i;
            obj.principalInvestigator = 'J. Carberry';
            obj.endTime = this.date;
            obj.creationLocation = 'strong';
            obj.dataFormat = 'nexus-hdf5';
            obj.scientificMetadata = {
                'CIF': 'H20',
                'raw': true,
                'processed': false
            };
            obj.pid = dataset_id;
            obj.owner = 'Gareth Murphy';
            obj.orcidOfOwner = 'orcid.org/0000-0002-1825-0097';
            obj.contactEmail = 'gareth.murphy@esss.se';
            obj.sourceFolder = '/'+this.instrument[i]+'/disk' + i;
            obj.size = 10 + i;
            obj.packedSize = 10 + i;
            obj.creationTime = '2014-05-15T09:34:26.550Z';
            obj.creationTime = this.date;
            obj.type = 'experiment';
            obj.validationStatus = 'validated';
            obj.keywords = ['lifecycle keywords'];
            obj.description = 'Dopamine -hydrobromide 100-200ms cooling from 100K ';
            obj.userTargetLocation = 'C-SPEC';
            obj.classification = 'AV=medium,CO=low';
            obj.license = 'ESS';
	    obj.version= "string";
	    obj.doi= "string";
	    obj.isPublished = true;
            obj.ownerGroup = 'p2222' ;
            obj.accessGroups = [
                'multigrid',
                'p2222'
            ];
            obj.createdAt = this.date;
            obj.updatedAt = this.date;
            obj.sampleId = '771' + i;
            obj.proposalId = 123 + i;

            this.prefix = '10.17199/';

            dataset_lifecycle.id = this.prefix + obj.pid;
            dataset_lifecycle.isOnDisk = true;
            dataset_lifecycle.isOnTape = true;
            dataset_lifecycle.archiveStatusMessage = 'datasetRetrieved';
            dataset_lifecycle.retrieveStatusMessage = 'retrieveStatus';
            dataset_lifecycle.lastUpdateMessage = 'string';
            dataset_lifecycle.archiveReturnMessage = 'archiveStatus';
            dataset_lifecycle.dateOfLastMessage = this.date;
            dataset_lifecycle.dateOfDiskPurging = this.date;
            dataset_lifecycle.archiveRetentionTime = this.date;
            dataset_lifecycle.isExported = true;
            dataset_lifecycle.exportedTo = 'string';
            dataset_lifecycle.dateOfPublishing = this.date;
  			dataset_lifecycle.ownerGroup= "multigrid";
  			dataset_lifecycle.accessGroups= [ "multigrid" ];
            dataset_lifecycle.datasetId = this.prefix + obj.pid;
            dataset_lifecycle.rawDatasetId = dataset_lifecycle.datasetId;
            dataset_lifecycle.derivedDatasetId = dataset_lifecycle.datasetId;
            dataset_lifecycle.createdAt = this.date;
            dataset_lifecycle.updatedAt = this.date;

            //console.log(JSON.stringify(obj));
            //console.log(JSON.stringify(dataset_lifecycle));
            const xhr = catamel_interface.send_to_catamel(obj, 'RawDatasets');
            const xhr2 = catamel_interface.send_to_catamel(dataset_lifecycle, 'DatasetLifecycles');
            //console.log(xhr);
            //console.log(xhr2);

        }

    }

}


let ds_load = new DatasetLoader();


ds_load.load_dataset();


export {DatasetLoader};
