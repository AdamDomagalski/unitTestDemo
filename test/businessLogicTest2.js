const businessResults = require('../src/businessResults');
const chai = require('chai');
const businessLogic = require('../src/businessLogic');

const expect = chai.expect;

describe('Testing v2', () => {
    it('should return A', () => {
        const input = {
            body: {
                message: {
                    code: 'asd'
                }
            }
        };
        const additionalInfo = {
            code: 'asd'
        };

        expect(businessLogic.work(input, additionalInfo)).to.be.equal(businessResults.resultA);
    });
});
