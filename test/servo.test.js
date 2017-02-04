const assert = require('chai').assert,
    expect = require('chai').expect,
    five = require('johnny-five'),
    placeholder = require('../lib/placeholder-io');;

describe('servo', function () {
    var board;
    before(done => {
        board = new five.Board({ io: new placeholder() }).on('ready', done);
    });
    describe('Writing', function () {
        describe('servoWrite(pin, value)', function () {
            it('TODO')
        });
    });
    describe('Configuring', function () {
        describe('serialConfig(options)', function () {
            it('TODO')
        });
    });
});