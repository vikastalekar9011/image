"use strict";
var express = require('express');
var router = express.Router();
// var roleManager = require('../utils/role');
var user = require('../controller/users');
var milk = require('../controller/milk');
var buildResponse = require('../utils/buildResponse');
/*====================================== User API=========================================*/
router.post('/user/create', [
    // roleManager.userAuthentication,
    user.create,
    buildResponse.send
]);

router.post('/user/login', [
    user.login,
    buildResponse.send
]);

router.get('/user/getAll', [
    user.getAll,
    buildResponse.send
]);

/*====================================== Milk API=========================================*/
router.post('/milk/add', [
    // roleManager.userAuthentication,
    milk.create,
    buildResponse.send
]);

router.get('/milk/list', [
    // roleManager.userAuthentication,
    milk.getAll,
    buildResponse.send
]);

module.exports = router;