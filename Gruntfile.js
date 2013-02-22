module.exports = function(grunt) {

  grunt.initConfig({
    nodeunit: {
      all: ['test/*.js']
    },
    jshint: {
      files: ['Gruntfile.js', 'tasks/**/*.js', 'test/*.js'],
      options: {
        curly: true,
        strict: false,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
        es5: true,
        globals: {}
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.registerTask('test', ['nodeunit']);
  grunt.loadTasks('tasks');
  grunt.registerTask('default', ['lintblame', 'nodeunit']);

};
