var expect = require("chai").expect; var assert = require('chai').assert;
var expect = require('chai').expect;

describe('i2c', function () {
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