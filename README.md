# grunt-lintblame

A grunt plugin that hooks in git blame to your jshint output.

## Getting Started
Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-lintblame --save-dev`

Then add this line to your project's gruntfile:

```javascript
grunt.loadNpmTasks('grunt-lintblame');
```

Once you have that in place you should just be type to type:

    grunt lintblame

[grunt]: https://github.com/cowboy/grunt
[getting_started]: https://github.com/cowboy/grunt/blob/master/docs/getting_started.md

## Documentation

Uses the standard `jshint` options object.

    jshint: {
      files: ['grunt.js', 'htdocs/js/v3/widgets/**/*.js']
      options: {
        curly: false,
        eqeqeq: false,
        immed: false,
        browser: true,
        globals: {
          define: true,
          require: true
        }
      }
    }

## Release History

* 0.1.1 - last version support grunt 0.3.x
* 0.2.0 - first version supporting grunt 0.4
* 0.3.1 - proper multi-task support

## License
Copyright (c) 2013 Jamund Ferguson  
Licensed under the MIT license.
