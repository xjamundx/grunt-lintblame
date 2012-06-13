# grunt-lintblame

A grunt plugin that hooks in git blame to your jshint output.

## Getting Started
Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-lintblame`

Then add this line to your project's `grunt.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-lintblame');
```

At the top change your `lint: {` to say `lintblame: {`

[grunt]: https://github.com/cowboy/grunt
[getting_started]: https://github.com/cowboy/grunt/blob/master/docs/getting_started.md

## Documentation

Use exactly as you would the standard lint plugin except with the name `lintblame`. It uses the standard `jshint` options object as well.

    lintblame: {
      all: ['grunt.js', 'htdocs/js/v3/widgets/**/*.js']
    },
    jshint: {
      options: {
        curly: false,
        eqeqeq: false,
        immed: false,
        browser: true
      }
    }

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][grunt].

## Release History
_(Nothing yet)_

## License
Copyright (c) 2012 Jamund Ferguson  
Licensed under the MIT license.
