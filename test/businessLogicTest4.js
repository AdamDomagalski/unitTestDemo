const chai = require('chai');
const utils = require('util');
const businessResults = require('../src/businessResults');
const businessLogic = require('../src/businessLogic');

const expect = chai.expect;

function prepareTestData(basicInfoValue, additionalInfoValue, expectedResult) {
    return {
        input: {
            body: {
                message: {
                    code: basicInfoValue
                }
            }
        },
        extra: {
            code: additionalInfoValue
        },
        expectedResult
    };
}

describe('Testing v4', () => {
    [
        prepareTestData('asd', 'asd', businessResults.resultA),
        prepareTestData(null, 'asd', businessResults.resultC),
    ].forEach((testData) => {
        it(
            `should return ${testData.expectedResult} for ${utils.inspect(testData.input)} and ${utils.inspect(testData.extra)}`,
            () => {
                expect(businessLogic.work(testData.input, testData.extra)).to.be.equal(testData.expectedResult);
            });
    });
});
