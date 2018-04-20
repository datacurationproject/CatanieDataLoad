// Reference mocha-typescript's global definitions:
import 'mocha';
import {FakeInterface} from "../src/FakeInterface";
import {DatasetLoader} from "../src/DatasetLoader"
import {expect} from 'chai'


/// <reference path="../node_modules/mocha-typescript/globals.d.ts" />


describe('Dataset Loader2', () => {
    let catamel_interface = new FakeInterface();
    let dataset = new DatasetLoader(catamel_interface);
    it('checks dataset number is a  number', () => {
        let dataset_num = dataset.dataset_number;
        dataset.dataset_number = 2;
        dataset.load_dataset();
        catamel_interface.login();
        expect(dataset_num).to.be.above(0);
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
