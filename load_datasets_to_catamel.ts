/**
 * @file Loads jobs into catamel
 * @author Gareth Murphy
 * @version 0.1
 */

let token_provider = require('./AccessToken.ts');
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let access_token = token_provider.access_token;

class Dataset {
    'principalInvestigator': any;
    'endTime': any;
    'creationLocation': any;
    'dataFormat': any;
    'scientificMetadata': any;
    'pid': any;
    'owner': any;
    'orcidOfOwner': any;
    'contactEmail': any;
    'sourceFolder': any;
    'size': any;
    'creationTime': any;
    'type': any;
    'validationStatus': any;
    'keywords': any;
    'description': any;
    'userTargetLocation': any;
    'classification': any;
    'license': any;
    'ownerGroup': any;
    'accessGroups': any;
    'datasetId': any;
    'packagedSize': any;
    'sampleId': any;
    'proposalId': any;
}


class DatasetLifecycle {
    'id': any;
    'isOnDisk': any;
    'isOnTape': any;
    'archiveStatusMessage': any;
    'retrieveStatusMessage': any;
    'lastUpdateMessage': any;
    'archiveReturnMessage': any;
    'dateOfLastMessage': any;
    'dateOfDiskPurging': any;
    'archiveRetentionTime': any;
    'isExported': any;
    'exportedTo': any;
    'dateOfPublishing': any
    'datasetId': any;
    'rawDatasetId': any;
    'derivedDatasetId': any;
    'createdAt': any;
    'updatedAt': any;
}

function send_to_catamel(obj, api_descriptor) {
// construct an HTTP request
    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'http://localhost:3000/api/v2/' + api_descriptor + '?access_token=' + access_token, true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    // send the collected data as JSON
    xhr.send(JSON.stringify(obj));

    xhr.onloadend = function () {
        // done
    };
    return xhr;
}

for (let i = 0; i < 60; i++) {
    let obj = new Dataset();
    let dataset_lifecycle = new DatasetLifecycle();
    let date = '2015-05-15T09:34:26.550Z';
    let dataset_id = 200 + i;
    obj.principalInvestigator = 'J. Carberry';
    obj.endTime = '2015-05-15T09:34:26.550Z';
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
    obj.sourceFolder = '/nfs/disk' + i;
    obj.size = 10 + i;
    obj.packagedSize = 5 + i;
    obj.creationTime = '2015-05-15T09:34:26.550Z';
    obj.type = 'experiment';
    obj.validationStatus = 'validated';
    obj.keywords = ['string'];
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


    dataset_lifecycle.id = 'string';
    dataset_lifecycle.isOnDisk = true;
    dataset_lifecycle.isOnTape = true;
    dataset_lifecycle.archiveStatusMessage = 'string';
    dataset_lifecycle.retrieveStatusMessage = 'string';
    dataset_lifecycle.lastUpdateMessage = 'string';
    dataset_lifecycle.archiveReturnMessage = 'string';
    dataset_lifecycle.dateOfLastMessage = '2017-11-03T12=02=39.978Z';
    dataset_lifecycle.dateOfDiskPurging = '2017-11-03T12=02=39.978Z';
    dataset_lifecycle.archiveRetentionTime = '2017-11-03T12=02=39.978Z';
    dataset_lifecycle.isExported = true;
    dataset_lifecycle.exportedTo = 'string';
    dataset_lifecycle.dateOfPublishing = '2017-11-03T12=02=39.978Z';
    dataset_lifecycle.datasetId = dataset_id;
    dataset_lifecycle.rawDatasetId = 'string';
    dataset_lifecycle.derivedDatasetId = 'string';
    dataset_lifecycle.createdAt = '2017-11-03T12=02=39.978Z';
    dataset_lifecycle.updatedAt = '2017-11-03T12=02=39.978Z'

    console.log(JSON.stringify(obj));
    const xhr = send_to_catamel(obj, 'RawDatasets');
    const xhr2 = send_to_catamel(dataset_lifecycle, 'DatasetLifecycles');
    console.log('****');

}

