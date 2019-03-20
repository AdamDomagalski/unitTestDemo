const businessResults = require('../src/businessResults');
const chai = require('chai');
const businessLogic = require('../src/businessLogic');

const expect = chai.expect;

describe('Business work function', () => {
    it('should return A given minimal parameters', () => {
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

/**
 * This comment is at the bottom to suggest that you should first run the test and only then proceed to read it.
 * This test should work for a single case.
 */