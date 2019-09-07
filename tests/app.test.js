/**
 * Created by prthakur on 07-09-2019.
 */
var chai = require('chai');
var assert = require('chai').assert;
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var proxyquire = require('proxyquire');

describe('Functional API Tests', function () {
    var server = proxyquire("../app", {

    });
    it("POST /api/v1/createArmy : Happy Path", function (done) {
        var payload = {
            size: 167
        };
        chai.request(server)
            .post('/api/v1/createArmy')
            .send(payload)
            .end(function (error, res) {
                assert.equal(res.status, 200);
                assert.equal(error, null);
                assert.exists(res.body);
                var armySize = 0;
                Object.keys(res.body).forEach(function(troopName){
                    armySize += res.body[troopName];
                });
                assert(armySize==167);
                 done();
            })
    });

    it("POST /api/v1/createArmy : Invalid Payload - String Input", function (done) {
        var payload = {
            size: "abc"
        };
        chai.request(server)
            .post('/api/v1/createArmy')
            .send(payload)
            .end(function (error, res) {
                assert.equal(res.status, 400);
                done();
            })
    });

    it("POST /api/v1/createArmy : Corner case - army size 3", function (done) {
        var payload = {
            size: 3
        };
        chai.request(server)
            .post('/api/v1/createArmy')
            .send(payload)
            .end(function (error, res) {
                assert.equal(res.status, 200);
                assert.equal(error, null);
                assert.exists(res.body);
                var armySize = 0;
                Object.keys(res.body).forEach(function(troopName){
                    armySize += res.body[troopName];
                });
                assert(armySize==3);
                done();
            })
    });
});