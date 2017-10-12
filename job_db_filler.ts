let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let access_token = "w771l8ocQEsrJeBNfQSDKzFi1Xi9P38pL0dCrLipej1PKJPIZKnRSfWGlVi0sAR8";

class Job {
    emailJobInitiator: string;
    type: string;
    creationTime: Date;
    executionTime = Date;
    jobParams: string;
    jobStatusMessage: string;
    datasetList: string;
    createdAt: Date;
    updatedAt: Date;
}

let job = new Job();

console.log(job);

let my_new_job = new Job();
for (let i = 0; i < 60; i++) {
    let date = new Date("2015-03-25T12:00:00Z");
    let date2 = date;
    date2.setDate(date.getDate() + i);
    my_new_job.emailJobInitiator = "testemail@testdomain.com";
    my_new_job.type = "retrieve";
    my_new_job.creationTime = date2;
    my_new_job.executionTime = date2;
    my_new_job.jobParams = 0;
    my_new_job.jobStatusMessage = 0;
    my_new_job.datasetList = 0;
    my_new_job.createdAt = date2;
    my_new_job.updatedAt = date2;

    console.log(JSON.stringify(my_new_job));


    // construct an HTTP request
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/api/v2/Jobs?access_token=" + access_token, true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    // send the collected data as JSON
    xhr.send(JSON.stringify(my_new_job));

    xhr.onloadend = function () {
        // done
    };
    console.log('****');

}

