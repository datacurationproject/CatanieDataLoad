// Reference mocha-typescript's global definitions:
import 'mocha';
import {AbstractInterface} from "../src/AbstractInterface";
import {expect} from 'chai'


/// <reference path="../node_modules/mocha-typescript/globals.d.ts" />


describe('Catamel Interface2', () => {
    it('checks machine name is string', () => {
        let cat = new AbstractInterface();
        let token = cat.machine_name;
        expect(token).to.be.a('string');
    });
});