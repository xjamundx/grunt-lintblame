/*
 * grunt-lintblame
 * 
 *
 * Copyright (c) 2012 Jamund Ferguson
 * Licensed under the MIT license.
 */

var async = require('async');
 
module.exports = function(grunt) {

  var lintblame = module.exports.lintblame = require('./lib/lintblame')(grunt);
  
  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerTask('lintblame', 'Validate files with JSHint and git blame.', function() {
    // Get flags and globals, allowing target-specific options and globals to
    // override the default options and globals.
    var done = this.async();

    var tmp = grunt.config(['jshint']);

    // Merge task-specific and/or target-specific options with these defaults.
    var options = tmp.options;

    // Read JSHint options from a specified jshintrc file.
    if (options.jshintrc) {
      options = grunt.file.readJSON(options.jshintrc);
    }
    // If globals weren't specified, initialize them as an empty object.
    if (!options.globals) {
      options.globals = {};
    }
    // Extract globals from options.
    var globals = options.globals;
    delete options.globals;

    grunt.verbose.writeflags(options, 'JSHint options');
    grunt.verbose.writeflags(globals, 'JSHint globals');

    // Lint specified files.
    var files = grunt.file.expand(tmp.files);
    var errors = 0;
    async.forEachSeries(files, function(filepath, next) {
        lintblame.lint(grunt.file.read(filepath), options, globals, filepath, function(err) {
            if (err) {
                errors++;
            }
            next();
        });
    }, function(err) {
        grunt.log.writeln("Found " + errors + " files with errors");      
        done();
    });
  });
};