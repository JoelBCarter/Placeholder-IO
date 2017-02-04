const assert = require('chai').assert,
    expect = require('chai').expect,
    five = require('johnny-five'),
    placeholder = require('../lib/placeholder-io');;
describe('pin', function () {
    var board;
    before(done => {
        board = new five.Board({ io: new placeholder() }).on('ready', done);
    });
    describe('Special Method Definitions', function () {
        describe('normalize(pin)', function () {
            it('TODO')
        });
    });
});