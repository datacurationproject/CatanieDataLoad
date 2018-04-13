// Reference mocha-typescript's global definitions:
import {slow, suite, test, timeout} from "mocha-typescript";
import 'mocha';
import {AccessT} from "../src/AccessToken";
import {CatamelInterface} from "../src/CatamelInterface";
import {DatasetLoader} from "../src/DatasetLoader"
import {JobLoader} from "../src/JobLoader"
import {expect} from 'chai'

/// <reference path="../node_modules/mocha-typescript/globals.d.ts" />





describe('Access Token', () => {
    it('checks token is string', () => {
        let access = new AccessT();
        let token = access.access_token;
        expect(token).to.be.a('string');
        expect(token).to.have.lengthOf(64);
    });
});


describe('Job Loader', () => {
    it('checks job number is a  number', () => {
        let job = new JobLoader();
        let job_num = job.number_of_jobs_to_load ;
        expect(job_num).to.be.above(1);
    });
});


describe('Dataset Loader2', () => {
    let dataset = new DatasetLoader();
    it('checks dataset number is a  number', () => {
        let dataset_num = dataset.dataset_number;
        expect(dataset_num).to.be.above(1);
    });
    it('checks prefix is a  string', () => {
        let prefix = dataset.prefix;
        expect(prefix).to.be.a('string');
    });
    it('checks date is a  string', () => {
        let date = dataset.date;
        expect(date).to.be.a('string');
    });
    it('checks futuredate is a  string', () => {
        let futuredate = dataset.futuredate;
        expect(futuredate).to.be.a('string');
    });
});

describe('Catamel Interface2', () => {
    it('checks machine name is string', () => {
        let cat = new CatamelInterface();
        let token = cat.machine_name;
        expect(token).to.be.a('string');
    });
});