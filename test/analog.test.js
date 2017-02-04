const assert = require('chai').assert,
    expect = require('chai').expect,
    five = require('johnny-five'),
    placeholder = require('../lib/placeholder-io');;

describe('analog', function () {
    var board;
    before(done => {
        board = new five.Board({ io: new placeholder() }).on('ready', done);
    });
    describe('Writing', function () {
        describe('analogWrite(pin, value)', function () {
            it('TODO')
        });
    });
    describe('Reading', function () {
        describe('analogRead(pin, handler)', function () {
            it('TODO')
        });
    });
});