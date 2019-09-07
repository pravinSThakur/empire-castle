/**
 * Created by prthakur on 07-09-2019.
 */
var Express = require("express");
var router = Express.Router();

var pdmServiceController = require("../controllers/empireCastleController");

/** All APIs are configured here in this router  */
router.post('/createArmy', pdmServiceController.createArmy);

module.exports = {
    router: router
};