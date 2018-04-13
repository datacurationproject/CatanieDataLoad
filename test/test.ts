// Reference mocha-typescript's global definitions:
import {slow, suite, test, timeout} from "mocha-typescript";
import 'mocha';
import {AccessT} from "../src/AccessToken";
import {CatamelInterface} from "../src/CatamelInterface";
import {DatasetLoader} from "../src/DatasetLoader"
import {JobLoader} from "../src/JobLoader"
import {expect} from 'chai'

/// <reference path="../node_modules/mocha-typescript/globals.d.ts" />

@suite(timeout(3000), slow(1000))
class Hello {
    @test
    world() {
    }
}



describe('Access Token', () => {
    it('checks token is string', () => {
        let access = new AccessT();
        let token = access.access_token;
        expect(token).to.be.a('string');
        expect(token).to.have.lengthOf(64);
    });
});


describe('Job Loader', () => {
    it('checks token is string', () => {
        let job = new JobLoader();
        let job_num = job._number_of_jobs_to_load ;
        expect(job_num).to.be.above(1);
    });
});


describe('Dataset Loader', () => {
    it('checks dataset number is a  number', () => {
        let dataset = new DatasetLoader();
        let dataset_num = dataset.dataset_number;
        expect(dataset_num).to.be.above(1);
    });
});

describe('Catamel Interface', () => {
    it('checks machine name is string', () => {
        let cat = new CatamelInterface();
        let token = cat.machine_name;
        expect(token).to.be.a('string');
    });
});