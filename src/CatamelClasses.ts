"use strict";

class Dataset {
  "principalInvestigator": any;
  "endTime": any;
  "creationLocation": any;
  "dataFormat": any;
  "scientificMetadata": any;
  "pid": any;
  "owner": any;
  "ownerEmail": any;
  "orcidOfOwner": any;
  "contactEmail": any;
  "sourceFolder": any;
  "size": any;
  "packedSize": any;
  "creationTime": any;
  "type": any;
  "validationStatus": any;
  "keywords": any;
  "description": any;
  "userTargetLocation": any;
  "classification": any;
  "license": any;
  "version": any;
  "doi": any;
  "isPublished": any;
  "ownerGroup": any;
  "accessGroups": any;
  "createdBy": any;
  "updatedBy": any;
  "createdAt": any;
  "updatedAt": any;
  "sampleId": any;
  "proposalId": any;
}

class DatasetLifecycle {
  "id": any;
  "isOnDisk": any;
  "isOnTape": any;
  "archiveStatusMessage": any;
  "retrieveStatusMessage": any;
  "lastUpdateMessage": any;
  "archiveReturnMessage": any;
  "dateOfLastMessage": any;
  "dateOfDiskPurging": any;
  "archiveRetentionTime": any;
  "isExported": any;
  "exportedTo": any;
  "dateOfPublishing": any;
  "datasetId": any;
  "rawDatasetId": any;
  "derivedDatasetId": any;
  "ownerGroup": any;
  "accessGroups": any;
  "createdAt": any;
  "updatedAt": any;
}

class Job {
  "emailJobInitiator": string;
  "type": string;
  "creationTime": Date;
  "executionTime": Date;
  "jobParams": string;
  "jobStatusMessage": string;
  "datasetList": string;
  "createdAt": Date;
  "updatedAt": Date;
}

class DatasetAttachment {
  "thumbnail": string;
}

class PublishedData {
  "doi": string;
  "affiliation": string;
  "creator": string;
  "publisher": string;
  "publicationYear": number;
  "title": string;
  "url": string;
  "abstract": string;
  "thumbnail": string;
  "resourceType": string;
  "numberOfFiles": number;
  "sizeOfArchive": number;
  "pidArray": Array<any>;
  "authors": Array<any>;
  "doiRegisteredSuccessfullyTime": Date;
}

export { PublishedData, Dataset, DatasetLifecycle, Job, DatasetAttachment };
