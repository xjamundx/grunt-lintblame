var grunt = require('grunt');
var lintblame = require('../tasks/lintblame');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/
exports.lintblame = {
  'bad': function(test) {    
    lintblame.lintblame.lint(grunt.file.read("test/data/bad.js"), {}, {}, "test/data/bad.js", function(err) {
        test.ok(err, "we should error");
        test.done();
    });    
  },
  'good': function(test) {    
    lintblame.lintblame.lint(grunt.file.read("test/data/good.js"), {}, {}, "test/data/good.js", function(err) {
        test.ifError(err, "we should not error");
        test.done();
    });    
  }
};
