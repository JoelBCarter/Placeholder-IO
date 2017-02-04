const assert = require('chai').assert,
    expect = require('chai').expect,
    five = require('johnny-five'),
    placeholder = require('../lib/placeholder-io');;

describe('led', function () {
    var board;
    before(done => {
        board = new five.Board({ io: new placeholder() }).on('ready', done);
    });
    describe('Special Property Definitions', function () {
        describe('defaultLed', function () {
            it('TODO')
        });
    });
});