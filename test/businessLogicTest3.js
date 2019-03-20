const chai = require('chai');
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

describe('Testing v3', () => {
    [
        prepareTestData('asd', 'asd', businessResults.resultA),
        prepareTestData(null, 'asd', businessResults.resultC),
    ].forEach((testData) => {
        it(`should return ${testData.expectedResult} for ${testData.input} and ${testData.extra}`, () => {
            expect(businessLogic.work(testData.input, testData.extra)).to.be.equal(testData.expectedResult);
        });
    });
});
