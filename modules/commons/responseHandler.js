/**
 * Created by prthakur on 07-09-2019.
 */
const logger = require('node-generic-logger');

exports.sendResponseCode = function (req, res, statusCode) {
    res.status(statusCode);
    res.send();
};

exports.sendJsonResponse = function (req, res, statusCode, responseJson) {
    res.setHeader('Content-Type', 'application/json');
    res.status(statusCode);
    res.send(JSON.stringify(responseJson));
};