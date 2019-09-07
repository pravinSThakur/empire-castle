/**
 * Created by prthakur on 07-09-2019.
 */
var logger = require('node-generic-logger');
const EmpireCastleService = require('../services/empireCastleService');
var empireCastleService = new EmpireCastleService();

var createArmy = function (req, res){
    logger.info("Invoked createArmy api");
    empireCastleService.createArmy(req, res);
};

module.exports = {
    createArmy: createArmy
};