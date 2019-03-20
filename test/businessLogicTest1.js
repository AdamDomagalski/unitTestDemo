const businessResults = require( "../src/businessResults");

const chai = require('chai');
const businessLogic = require('../src/businessLogic');

const expect = chai.expect;

describe('Testing v1', () => {
    it('should return A', () => {
        const input = {
            body: {
                message: {
                    code: 'asd'
                }
            }
        };

        expect(businessLogic.work(input, null)).to.be.equal(businessResults.resultA);
    });
});
