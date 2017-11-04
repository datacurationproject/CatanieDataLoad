// Reference mocha-typescript's global definitions:
/// <reference path="../node_modules/mocha-typescript/globals.d.ts" />

@suite(timeout(3000), slow(1000))
class Hello {
    @test
    world() {
    }
}


import 'mocha';

describe('my test', () => {
    it('does something', () => {
        // your test
    });
});


import {AccessT} from "../src/AccessToken";
import {CatamelInterface} from "../src/CatamelInterface";
import {DatasetLoader} from "../src/DatasetLoader"
import {JobLoader} from "../src/JobLoader"
import {expect} from 'chai'

describe('Access Token', () => {
    it('checks token is string', () => {
        let access = new AccessT();
        let token = access.access_token;
        expect(token).to.be.a('string');
    });
});


describe('Job Loader', () => {
    it('checks token is string', () => {
        let job = new JobLoader();
    });
});


describe('Job Loader', () => {
    it('checks token is string', () => {
        let job = new DatasetLoader();
    });
});

describe('Job Loader', () => {
    it('checks token is string', () => {
        let job = new CatamelInterface();
    });
});