const assert = require('chai').assert,
    expect = require('chai').expect,
    five = require('johnny-five'),
    placeholder = require('../lib/placeholder-io');;

describe('serial', function () {
    var board;
    before(done => {
        board = new five.Board({ io: new placeholder() }).on('ready', done);
    });
    describe('Writing', function () {
        describe('serialWrite(portId, inBytes)', function () {
            it('TODO')
        });
    });
    describe('Reading', function () {
        describe('serialRead(portId, handler)', function () {
            it('TODO')
        });
        describe('serialRead(portId[, maxBytesToRead], handler)', function () {
            it('TODO')
        });
    });
    describe('Configuring', function () {
        describe('serialConfig(options)', function () {
            it('TODO')
        });
    });
    describe('IO Control', function () {
        describe('serialStop(portId)', function () {
            it('TODO')
        });
        describe('serialClose(portId)', function () {
            it('TODO')
        });
        describe('serialFlush(portId)', function () {
            it('TODO')
        });
    });
});