import 'mocha';
import {expect} from 'chai'
import { DeleterOrig} from "../src/DeleterOrig";

describe('Access Token', () => {
    it('checks token is string', () => {
        let login = new DeleterOrig();

        expect(login.model).to.be.a('string');
    });
});

