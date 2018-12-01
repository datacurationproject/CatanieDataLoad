// Reference mocha-typescript's global definitions:
import 'mocha';
import {expect} from 'chai'
import { LoggerIn } from '../src/LoggerIn';


describe('Access Token', () => {
    it('checks token is string', () => {
        let login = new LoggerIn();

        expect(login.machine_name).to.be.a('string');
    });
});

