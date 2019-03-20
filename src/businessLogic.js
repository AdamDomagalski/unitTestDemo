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
 Without even running the code thanks to static eslint analysis we already have some information information
 why is this function bad:
 it has a high complexity rating, which means that it is harder to understand then the current standard
 the IDE also suggests that some else statements could be skipped to increase readability
 Those are the obvious reasons

 there is no assertion that rawExpectedMessage is not null/undefined
 there is no checking that the response actually has resultA body parameter
 response can be anything, from string to array to object, anything we want, there is only resultA single check that it is not null
 we are checking that response body message
 */
