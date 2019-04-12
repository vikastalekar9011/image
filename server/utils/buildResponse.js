"use strict";
exports.send = function (req, res, next) {
    var responseObj = {};
    responseObj.status = "success";
    responseObj.httpStatus = 200;
    if (req.payload) {
        responseObj.payload = req.payload;
    }

    if (req.count) {
        responseObj.count = req.count;
    }
    if (req.token) {
        responseObj.token = req.token;
    }
    // logger.info(green("Success Response"));
    res.send(responseObj);
};