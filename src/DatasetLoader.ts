/**
 * @file Loads jobs into catamel
 * @author Gareth Murphy
 * @version 0.1
 */


import {CatamelInterface} from './CatamelInterface';
import {DatasetLifecycle, Dataset} from './CatamelClasses';


let catamel_interface = new CatamelInterface();


class DatasetLoader {
    date: any;
    dataset_number : number = 60;

    load_dataset() {
        for (let i = 0; i < this.dataset_number; i++) {
            let obj = new Dataset();
            let dataset_lifecycle = new DatasetLifecycle();
            this.date = '2015-05-15T09:34:26.550Z';
            let dataset_id = 200 + i;
            obj.principalInvestigator = 'J. Carberry';
            obj.endTime = this.date;
            obj.creationLocation = 'strong';
            obj.dataFormat = 'nexus-hdf5';
            obj.scientificMetadata = {
                'CIF': 'H20',
                'raw': true,
                'processed': false
            };
            obj.pid = 100 + i;
            obj.datasetId = dataset_id;
            obj.owner = 'J. Carberry';
            obj.orcidOfOwner = 'orcid.org/0000-0002-1825-0097';
            obj.contactEmail = 'j.carberry@orcid.org';
            obj.sourceFolder = '/SLS/disk' + i;
            obj.size = 10 + i;
            obj.packagedSize = 5 + i;
            obj.creationTime = '2015-05-15T09:34:26.550Z';
            obj.type = 'experiment';
            obj.validationStatus = 'validated';
            obj.keywords = ['lifecycle keywords'];
            obj.description = 'Dopamine -hydrobromide 100-200ms cooling from 100K ';
            obj.userTargetLocation = 'C-SPEC';
            obj.classification = 'AV=medium,CO=low';
            obj.license = 'ESS';
            obj.ownerGroup = 'cspec' + i;
            obj.accessGroups = [
                'multigrid',
                'multiblade'
            ];
            obj.sampleId = '771' + i;
            obj.proposalId = 123 + i;


            dataset_lifecycle.id = obj.datasetId;
            dataset_lifecycle.isOnDisk = true;
            dataset_lifecycle.isOnTape = true;
            dataset_lifecycle.archiveStatusMessage = 'archiveStatus';
            dataset_lifecycle.retrieveStatusMessage = 'retrieveStatus';
            dataset_lifecycle.lastUpdateMessage = 'string';
            dataset_lifecycle.archiveReturnMessage = 'archiveStatus';
            dataset_lifecycle.dateOfLastMessage = this.date;
            dataset_lifecycle.dateOfDiskPurging = this.date;
            dataset_lifecycle.archiveRetentionTime = this.date;
            dataset_lifecycle.isExported = true;
            dataset_lifecycle.exportedTo = 'string';
            dataset_lifecycle.dateOfPublishing = this.date;
            dataset_lifecycle.datasetId = '<PID>/' + obj.pid;
            dataset_lifecycle.rawDatasetId = dataset_lifecycle.datasetId;
            dataset_lifecycle.derivedDatasetId = dataset_lifecycle.datasetId;
            dataset_lifecycle.createdAt = this.date;
            dataset_lifecycle.updatedAt = this.date;

            console.log(JSON.stringify(obj));
            console.log(JSON.stringify(dataset_lifecycle));
            const xhr = catamel_interface.send_to_catamel(obj, 'RawDatasets');
            const xhr2 = catamel_interface.send_to_catamel(dataset_lifecycle, 'DatasetLifecycles');
            console.log(xhr);
            console.log(xhr2);

        }

    }

}



let ds_load = new DatasetLoader();


ds_load.load_dataset();


export { DatasetLoader};
