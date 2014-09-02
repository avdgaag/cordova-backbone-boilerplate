module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      application: {
        src: 'app/stylesheets/application.scss',
        dest: 'www/stylesheets/application.css',
        options: {
          sourcemap: 'inline'
        }
      }
    },
    imagemin: {
      all: {
        files: [
          { expand: true, cwd: 'app/images/', src: ['**/*.{png,jpg,gif}'], dest: 'www/images/', filter: 'isFile' }
        ]
      }
    },
    copy: {
      html: {
        src: 'app/index.html',
        dest: 'www/index.html'
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'app/**/*.js']
    },
    browserify: {
      js: {
        src: 'app/javascripts/application.js',
        dest: 'www/javascripts/application.js'
      }
    },
    watch: {
      build: {
        files: 'app/**/*',
        tasks: ['build'],
        options: {
          debounceDelay: 200,
          livereload: true
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 9000,
          base: 'www'
        }
      }
    },
    clean: ['www/*']
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-newer');

  grunt.registerTask('default', ['build']);
  grunt.registerTask('rebuild', ['clean', 'build']);
  grunt.registerTask('serve', ['build', 'connect:server', 'watch:build']);
  grunt.registerTask('build', [
    'newer:jshint',
    'newer:sass',
    'newer:imagemin',
    'newer:copy',
    'newer:browserify'
  ]);
};
