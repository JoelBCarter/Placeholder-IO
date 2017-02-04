const assert = require('chai').assert,
    expect = require('chai').expect,
    five = require('johnny-five'),
    placeholder = require('../lib/placeholder-io');;

describe('digital', function () {
    var board;
    before(done => {
        board = new five.Board({ io: new placeholder() }).on('ready', done);
    });
    describe('Writing', function () {
        describe('digitalWrite(pin, value)', function () {
            it('TODO')
        });
    });
    describe('Reading', function () {
        describe('digitalRead(pin, handler)', function () {
            it('TODO')
        });
    });
});