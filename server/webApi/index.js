"use strict";
var express = require('express');
var router = express.Router();
// var roleManager = require('../utils/role');
var user = require('../controller/user');
var milk = require('../controller/milk');
var location=require('../controller/location')
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

router.post('/user/validateMobile', [
    user.validateMobile,
    buildResponse.send
]);

router.get('/user/getAll', [
    // roleManager.userAuthentication,
    user.getAll,
    buildResponse.send
]);

/*====================================== Milk API=========================================*/
router.post('/milk/add', [
   //  roleManager.userAuthentication,
    milk.create,
    user.update,
    buildResponse.send
]);

router.post('/milk/total', [
    //  roleManager.userAuthentication,
     milk.total,
     buildResponse.send
 ]);

router.get('/milk/list', [
    // roleManager.userAuthentication,
    milk.getAll,
    buildResponse.send
]);

/*====================================== Loaction API=========================================*/

router.get('/location/list',[
    location.getAll,
    buildResponse.send
]);

router.post('/location/add',[
    location.create,
    buildResponse.send
]);

module.exports = router;
