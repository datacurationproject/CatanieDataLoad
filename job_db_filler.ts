/**
 * @file Loads jobs into catamel
 * @author Gareth Murphy
 * @version 0.2
 */

export {};

import {CatamelInterface} from './CatamelInterface';

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
    my_new_job.emailJobInitiator = 'test' + String(i) + '@te.dk';
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


    let catamel_interface = new CatamelInterface();
    const xhdr = catamel_interface.send_to_catamel(obj, 'RawDatasets');
    //console.log('****');

}

