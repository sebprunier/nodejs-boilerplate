'use strict';

var assert = require('assert'),
    Hello = require('../../src/hello/hello'),
    hello = new Hello();

describe('Hello', function() {
    describe('#hello()', function() {
        it('should return \'Hello World !\'', function() {
            var message = hello.hello();
            assert.equal(message, 'Hello World !');
        });
    });
});
