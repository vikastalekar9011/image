"use strict";
// var logger = require('./log');
// var chalk = require('chalk');
// var red = chalk.red;
exports.raiseError = function (req, res, next, errorcode, httpstatus, message) {
    var returnMessage = {
        status: 'fail',
    };
    var error = new Error();
    returnMessage.error = error;
    if (message) {
        returnMessage.message = message;
    }
    returnMessage.error.messageCode = errorcode;
    returnMessage.messageCode = errorcode;
    returnMessage.httpstatus = httpstatus;
    // logger.error(red("Fail Response. Error Code :" + errorcode));
    res.status(httpstatus).send(returnMessage);
};