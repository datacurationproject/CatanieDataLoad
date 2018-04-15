// Reference mocha-typescript's global definitions:
import 'mocha';
import {FakeInterface} from "../src/FakeInterface";
import {JobLoader} from "../src/JobLoader"
import {expect} from 'chai'


/// <reference path="../node_modules/mocha-typescript/globals.d.ts" />


describe('Job Loader', () => {
    it('checks job number is a  number', () => {
        let catamel_interface = new FakeInterface();
        let job = new JobLoader(catamel_interface);
        job.number_of_jobs_to_load = 2;
        let job_num = job.number_of_jobs_to_load;
        job.load_jobs();
        expect(job_num).to.be.above(1);
    });
});

