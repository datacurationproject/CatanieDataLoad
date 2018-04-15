// Reference mocha-typescript's global definitions:
import 'mocha';
import {FakeInterface} from "../src/FakeInterface";
import {expect} from 'chai'


describe('Fake Interface2', () => {
    it('checks machine name is string', () => {
        let cat = new FakeInterface();
        let token = cat.machine_name;
        expect(token).to.be.a('string');
    });
});