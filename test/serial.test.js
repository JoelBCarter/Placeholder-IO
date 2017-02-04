var expect = require("chai").expect; var assert = require('chai').assert;
var expect = require('chai').expect;

describe('serial', function () {
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