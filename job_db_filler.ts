/**
 * @file Loads jobs into catamel
 * @author Gareth Murphy
 * @version 0.2
 */

export {};

let token_provider = require('./AccessToken.ts');
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let access_token = token_provider.access_token;

class Job {
    emailJobInitiator: string;
    type: string;
    creationTime: Date;
    executionTime: Date;
    jobParams: string;
    jobStatusMessage: string;
    datasetList: string;
    createdAt: Date;
    updatedAt: Date;
}

let my_new_job = new Job();
for (let i = 0; i < 120; i++) {
    let date = new Date('2015-03-25T12:00:00Z');
    let date2 = date;
    date2.setDate(date.getDate() + i);
    my_new_job.emailJobInitiator = 'test'+String(i)+'@te.dk';
    my_new_job.type = 'archive';
    my_new_job.creationTime = date2;
    my_new_job.executionTime = date2;
    //my_new_job.id = String(10 + i);
    my_new_job.jobParams = 's';
    my_new_job.jobStatusMessage = 'retrieve';
    my_new_job.datasetList = 'm';
    my_new_job.createdAt = date2;
    my_new_job.updatedAt = date2;

    //console.log(JSON.stringify(my_new_job));


    // construct an HTTP request
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/api/v2/Jobs?access_token=' + access_token, true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    // send the collected data as JSON
    xhr.send(JSON.stringify(my_new_job));

    xhr.onloadend = function () {
        console.log('DONE', xhr.readyState);
        console.log('xhr.status=', xhr.status);
        console.log('response=', xhr.responseText);
    };

    if (xhr.readyState == 4 || xhr.status == 200) {
        console.log('xhr.readyState=', xhr.readyState);
        console.log('xhr.status=', xhr.status);
        console.log('response=', xhr.responseText);

        var data = $.parseJSON(xhr.responseText);
        var uploadResult = data['message']
        console.log('uploadResult=', uploadResult);

        if (uploadResult == 'failure') {
            console.log('failed to upload file');
            displayError('failed to upload');
        } else if (uploadResult == 'success') {
            console.log('successfully uploaded file');
        }
    }

    //console.log('****');

}

