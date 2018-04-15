// Reference mocha-typescript's global definitions:
import 'mocha';
import {AccessT} from "../src/AccessToken";
import {expect} from 'chai'


/// <reference path="../node_modules/mocha-typescript/globals.d.ts" />


describe('Access Token', () => {
    it('checks token is string', () => {
        let access = new AccessT();
        let token = access.access_token;
        expect(token).to.be.a('string');
        expect(token).to.have.lengthOf(64);
        access.access_token = "bGIxwenScw36wD5nHnjZHa7a9FDc40BHC4XCHnaIOQH0C2fFcFhAnXpKKX32SFbs";
        token = access.access_token;
        expect(token).to.be.a('string');
        expect(token).to.have.lengthOf(64);
    });
});

