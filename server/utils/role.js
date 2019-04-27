"use strict";
var commanPermission = ['milk/list'];
var giverPermission = ['milk/add',];
var receiverPermission = ['milk/total'];
var adminPermission = ['user/create', 'user/getAll','location/add', 'location/list'];

exports.userAuthentication = function (req, res, next) {
    if (req && req.user && req.originalUrl) {
        //console.log("URL" + req.url);
        //console.log("====" + req.protocol + '://' + req.get('host') + req.originalUrl);
        //  console.log("+++++" + req.originalUrl);
        var URL = req.originalUrl;
        var lastIndex = URL.indexOf('?');
        if (lastIndex === -1) {
            lastIndex = URL.length;
        }
        var pureUrl = URL.substring(4, lastIndex);
        var user = JSON.parse(JSON.stringify(req.user));
        isAlloedToProcess(user, pureUrl, function (permission) {
            if (permission) {
                next();
            } else {
                res.sendStatus(401);
            }
        });
    } else {
        res.sendStatus(401);
    }
};

var isAlloedToProcess = function (user, action, cb) {
    if (user && user.role && action && action.length > 3) {
        getAllAccess(user.roleId, function (allowUrl) {
            //  console.log("allowUrl====" + allowUrl);
            if (allowUrl && allowUrl.length > 0) {
                if (allowUrl.indexOf(action) !== -1) {
                    cb(true);
                } else {
                    cb(false);
                }
            } else {
                cb(false);
            }
        });
    } else {
        cb(false);
    }
};

var getAllAccess = function (rollId, cb) {
    if (rollId) {
        if (rollId === 'a4m914#') {
            cb(commanPermission.concat(employeePermission).concat(adminPermission));
        } else if (rollId === 'f9n11435@') {
            cb(commanPermission);
        } else if (rollId === 'e16e1181!') {
            cb(commanPermission.concat(employeePermission));
        } else if (rollId === 'k16e1181!') {
            cb(commanPermission.concat(employeePermission));
        } else {
            cb('');
        }
    } else {
        cb('');
    }
};