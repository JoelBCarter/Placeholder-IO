const assert = require('chai').assert,
    expect = require('chai').expect,
    five = require('johnny-five'),
    placeholder = require('../lib/placeholder-io');;

describe('i2c', function () {
    var board;
    before(done => {
        board = new five.Board({ io: new placeholder() }).on('ready', done);
    });
    describe('Writing', function () {
        describe('i2cWrite(address, inBytes)', function () {
            it('TODO')
        });
        describe('i2cWrite(address, register, inBytes)', function () {
            it('TODO')
        });
        describe('i2cWriteReg(address, register, value)', function () {
            it('TODO')
        });
    });
    describe('Reading', function () {
        describe('i2cRead(address, register, bytesToRead, handler)', function () {
            it('TODO')
        });
        describe('i2cRead(address, bytesToRead, handler)', function () {
            it('TODO')
        });
        describe('i2cReadOnce(address, register, bytesToRead, handler)', function () {
            it('TODO')
        });
        describe('i2cReadOnce(address, bytesToRead, handler)', function () {
            it('TODO')
        });
    });
    describe('Configuring', function () {
        describe('i2cConfig(options)', function () {
            it('TODO')
        });
    });
});