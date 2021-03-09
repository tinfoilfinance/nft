async function tryCatch(promise, message, errorMessage) {
    try {
        await promise;
        throw null;
    }
    catch (error) {
        if (errorMessage) {
            assert(error.message.includes(errorMessage),
                "Expected an error with '" + errorMessage + "' but got '" + error.message + "' instead");
        }
        assert(error, "Expected an error but did not get one");
        assert(error.message.includes(message), "Expected an error with '" + message + "' but got '" + error.message + "' instead");
    }
};

module.exports = {
    catchRevert: async function (promise, errorMessage) { await tryCatch(promise, "revert", errorMessage); },
    catchOutOfGas: async function (promise) { await tryCatch(promise, "out of gas"); },
    catchInvalidJump: async function (promise) { await tryCatch(promise, "invalid JUMP"); },
    catchInvalidOpcode: async function (promise) { await tryCatch(promise, "invalid opcode"); },
    catchStackOverflow: async function (promise) { await tryCatch(promise, "stack overflow"); },
    catchStackUnderflow: async function (promise) { await tryCatch(promise, "stack underflow"); },
    catchStaticStateChange: async function (promise) { await tryCatch(promise, "static state change"); },
};
