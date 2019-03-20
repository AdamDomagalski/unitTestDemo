const businessResults = require('./businessResults');

module.exports.work = (basicJobInformation, optionalAdditionalInformation) => {
    let extraInfo = optionalAdditionalInformation;

    if (optionalAdditionalInformation.code) {
        extraInfo = optionalAdditionalInformation.code;
    }

    if (basicJobInformation.body.message.code) {
        return businessResults.resultA;
    } else if (basicJobInformation.body.message) {
        if (!extraInfo.message) {
            return businessResults.resultC;
        } else {
            return businessResults.resultD;
        }
    } else {
        return businessResults.resultE;
    }
};
/**
 * This space is left blank intentionally ;)
 * Spoilers below!
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */


/**
 Without even running the code thanks to static eslint analysis we already have some information.
 Why is this function bad:
 It has a high complexity rating, which means that it is harder to understand then the current standard.
 The IDE suggests that some else statements could be skipped to increase readability.

 Those are the obvious reasons, the bit more in depth:
 There is no assertion that rawExpectedMessage is not null/undefined.
 There is no checking that the response actually has resultA body parameter
 Response can be anything, from string to array to object, anything we want.
 See if you can spot any other (there are a few more).
 */
