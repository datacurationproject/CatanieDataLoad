/**
 * @file Loads jobs into catamel
 * @author Gareth Murphy
 * @version 0.2
 */

import {CatamelInterface} from './CatamelInterface';
import {Job} from './CatamelClasses';


class JobLoader {
    get number_of_jobs_to_load(): any {
        return this._number_of_jobs_to_load;
    }

    set number_of_jobs_to_load(value: any) {
        this._number_of_jobs_to_load = value;
    }
    date : any;
    private _number_of_jobs_to_load: any;
    constructor() {
        this.date = new Date('2015-03-25T12:00:00Z');
        this.number_of_jobs_to_load = 20;
    }

    load_jobs() {

        let my_new_job = new Job();
        for (let i = 0; i < this._number_of_jobs_to_load; i++) {
            let date = this.date;
            let date2 = date;
            date2.setDate(date.getDate() + i);
            my_new_job.emailJobInitiator = 'test' + String(i) + '@te.dk';
            my_new_job.type = 'archive';
            my_new_job.creationTime = date2;
            my_new_job.executionTime = date2;
            my_new_job.jobParams = 's';
            my_new_job.jobStatusMessage = 'retrieve';
            my_new_job.datasetList = 'm';
            my_new_job.createdAt = date2;
            my_new_job.updatedAt = date2;

            //console.log(JSON.stringify(my_new_job));

            let catamel_interface = new CatamelInterface();
            const xhdr = catamel_interface.send_to_catamel(my_new_job, 'Jobs');
            console.log(xhdr);

        }
    }

}






export {JobLoader};
