"use strict";
var crypto = require('crypto');
exports.encryptPwd = function (pwd, callback) {
    var cipher = crypto.createCipher('aes192', 'sdiUKGI654jhvYF');
    var encrypted = '';
    cipher.on('readable', function () {
        var data = cipher.read();
        if (data) {
            encrypted += data.toString('hex');
        }
    });
    cipher.on('end', function () {
        callback(encrypted);
    });
    cipher.write(pwd);
    cipher.end();
};

exports.decryptPwd = function (pwd, callback) {
    var decipher = crypto.createDecipher('aes192', 'sdiUKGI654jhvYF');
    var decrypted = '';
    decipher.on('readable', function () {
        var data = decipher.read();
        if (data) {
            decrypted += data.toString('utf8');
        }
    });
    decipher.on('end', function () {
        callback(decrypted);
    });
    decipher.write(pwd, 'hex');
    decipher.end();
};