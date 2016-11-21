var testCase = require('mocha').describe;
var pre = require('mocha').before;
var assertions = require('mocha').it;
var assert = require('chai').assert;

var values = {[2,1], [3,1]};

describe('mocha+assert API description', function() {

    it('simple values doesnt equal?', function() {
        assert.notEqual('one', 'two');
    });

    it('value is truthy', function() {
        assert.ok(true);
    });

    it('complex types equal?', function() {
        assert.deepEqual([1,2,3], [1,2,3]);
    });
    it('complex types dont equal?', function() {
        assert.notDeepEqual([1,2,3], ['one', 'two']);
    });
    it('value mofduual?', function() {
        assert.strictEqual(2551%4, '1');
    });
    it('value and type equal?', function() {
        assert.strictEqual('1', '1');
    });
    it('complex types dont equal?', function() {
        assert.notStrictEqual(1, '1');
    });

    it('throws?', function() {
        assert.throws(function(){ throw new Error(); });
    });
    it('does not throw?', function() {
        assert.doesNotThrow(function() {});
    });
});