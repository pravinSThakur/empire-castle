/**
 * Created by prthakur on 07-09-2019.
 */

var logger = require('node-generic-logger');
var responseHandler = require('../commons/responseHandler');
const constants = require('../commons/constants');
function empireCastleService(){

}

function random(low, high) {
    return Math.floor(Math.random() * (high - low) + low)
}

empireCastleService.prototype.createArmy = function(req , res) {
    logger.info("@@@@ createArmy from service is called");
    var body = req.body;
    var armySize = body.size;
    if(!armySize || !Number.isInteger(armySize)){
        logger.info("Invalid Payload");
        responseHandler.sendResponseCode(req, res, 400);
        return;
    }
    //create army with given logic
    var responseJson = {};
    var numUnits = constants.TROOP_UNITS.length;
    var min = 1;
    var max = armySize - numUnits + 1;
    var t=0;
    for(; t<numUnits-1; t++){
        if(max==1){
            min = 0;
        }
        var troopName = constants.TROOP_UNITS[t];
        var troopSize = random(min, max);
        responseJson[troopName] = troopSize+1;
        max = max - troopSize;
    }
    responseJson[constants.TROOP_UNITS[t]] = max;
    logger.info("Crated army with troops: " + JSON.stringify(responseJson));
    responseHandler.sendJsonResponse(req, res, 200, responseJson)
};

module.exports = empireCastleService;
