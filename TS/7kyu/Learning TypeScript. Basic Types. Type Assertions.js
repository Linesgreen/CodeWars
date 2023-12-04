"use strict";
class SuccessServerResult {
    constructor(httpCode, resultObject) {
        this.httpCode = httpCode;
        this.resultObject = resultObject;
    }
}
class ErrorServerResult {
    constructor(httpCode, message) {
        this.httpCode = httpCode;
        this.message = message;
    }
}
function getResult(result) {
    if (result.httpCode === 200) {
        // Returning resultObject if everything is OK
        return result.resultObject;
    }
    else {
        // Returning result.message in case of error
        // FIXME: help TypeScript Compiler to understand that result here
        // is the instance of ErrorServerResult...
        return result.message;
    }
}
