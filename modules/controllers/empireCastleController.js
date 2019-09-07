/**
 * Created by prthakur on 07-09-2019.
 */
var logger = require('node-generic-logger');
var createArmy = function (req, res){
    logger.info("Invoked createArmy api");
    res.json({ "message": "created army" });
};

module.exports = {
    createArmy: createArmy
};