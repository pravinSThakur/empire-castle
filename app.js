/**
 * Created by prthakur on 07-09-2019.
 */
var logger = require('node-generic-logger');
var Express = require("express");
const constants = require('./modules/commons/constants');
var app = Express();

var BodyParser = require('body-parser');
app.use(BodyParser.json({limit: '50mb'}));
app.use(BodyParser.urlencoded({ extended: true }));

logger.init({
    console: {
        level: constants.LOG_LEVEL
    }
});

// load all routers
logger.info("Configuring routes");
var empireCastleRoute = require('./modules/routers/empireCastle').router;
app.use('/'+constants.BASE_PATH+'/', empireCastleRoute);

//Error handler
app.use(function (err, req, res, next) {
    if (res.headersSent) {
        return next(err);
    }
    logger.error("Got error : " , err );
    var errMsg = err.message ? err.message : 'Oops something went wrong !!!';
    res.status(500).send({message : errMsg});
});

/** Start the service **/
var server = app.listen(constants.PORT, function(){
    logger.info('!! Empire castel service started on port ' + constants.PORT +" !!");
});

module.exports = server;