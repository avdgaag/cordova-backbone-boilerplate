# Cordova Backbone boilerplate

This is a project template for Cordova projects with Backbone. It has a simple
build system with Grunt and uses Backbone, jQuery, underscore, Sass, Mocha and
Chai.

## Installation

Clone the repository and install required dependencies:

    % npm install

To use the Grunt CLI you need to install it globally:

    % npm install -g grunt-cli

Now you can serve the project on a local development server for browser
development:

    % grunt serve

## Tasks

You can use these Grunt tasks:

* `serve`: build the project, watch for changes and serve on a local web server
  for local browser development. Live Reload is enabled.
* `build`: prepare all files in `./www`, including concatenated javascripts,
  compiled Sass stylesheets, optimised images and any static HTML files. Only
  changed files are updated. Before all this, runs `jshint`.
* rebuild: same as `build` but runs `clean` first.
* `clean`: removes the entire output directory.
* `jshint`: check for linting errors in javascript source files.

NPM provides the following tasks:

* `test`: run the Mocha test suite (from `./test`)

Finally, you can use any Cordova commands to run or emulate the project. See
`cordova -h` for more information.
