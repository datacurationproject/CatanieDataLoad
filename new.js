var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var access_token = "3L69vMUB9YCCB2kXXyNAZFuNbfO7GSkuDxeoDjXGZsM4wDToyQIZc9nJcYyDoGD1";
var obj = {};
for (var i = 0; i < 60; i++) {
    obj.principalInvestigator = "J. Carberry";
    obj.endTime = "2015-05-15T09:34:26.550Z";
    obj.creationLocation = "strong";
    obj.dataFormat = "nexus-hdf5";
    obj.scientificMetadata = {
        "CIF": "H20",
        "raw": true,
        "processed": false
    };
    obj.pid = 100 + i;
    obj.datasetId = 200 + i;
    obj.owner = "J. Carberry";
    obj.orcidOfOwner = "orcid.org/0000-0002-1825-0097";
    obj.contactEmail = "j.carberry@orcid.org";
    obj.sourceFolder = "/nfs/disk" + i;
    obj.size = 10 + i;
    obj.packagedSize = 5 + i;
    obj.creationTime = "2015-05-15T09:34:26.550Z";
    obj.type = "experiment";
    obj.validationStatus = "validated";
    obj.keywords = ["string"];
    obj.description = "Dopamine -hydrobromide 100-200ms cooling from 100K ";
    obj.userTargetLocation = "C-SPEC";
    obj.classification = "AV=medium,CO=low";
    obj.license = "ESS";
    obj.ownerGroup = "cspec" + i;
    obj.accessGroups = [
        "multigrid",
        "multiblade"
    ];
    obj.sampleId = "771" + i;
    obj.proposalId = 123 + i;

    console.log(JSON.stringify(obj));


    // construct an HTTP request
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/api/v2/RawDatasets?access_token=" + access_token, true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    // send the collected data as JSON
    xhr.send(JSON.stringify(obj));

    xhr.onloadend = function () {
        // done
    };
    console.log('****');

}

