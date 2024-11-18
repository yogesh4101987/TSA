module.exports = function(grunt) {
  // Project configuration
  grunt.initConfig({
    // SCSS compilation task
    sass: {
      dist: {
        files: [
          {
            expand: true,
            cwd: 'src/scss/base',
            src: ['**/fonts.scss'],
            dest: 'assets/css',
            ext: '.css'
          },
          {
            expand: true,
            cwd: 'src/scss',  
            src: ['*.scss'],
            dest: 'assets/css',
            ext: '.css',
            rename: function(dest, src) {
              const layoutName = src.split('.')[0];
              const outputPath = `${dest}/${layoutName}.css`;
              // console.log(`Compiling ${src} to ${outputPath}`);
              return outputPath;
            }
          },
          {
            expand: true,
            cwd: 'src/scss/components',
            src: ['*.scss'],
            dest: 'src/components',
            ext: '.css',
            rename: function(dest, src) {
              const componentName = src.split('.')[0];
              const outputPath = `${dest}/${componentName}/${componentName}.css`;
              // console.log(`Compiling ${src} to ${outputPath}`);
              return outputPath;
            }
          },
          {
            expand: true,
            cwd: 'src/scss/layout',  
            src: ['*.scss'],
            dest: 'src/components/layout',
            ext: '.css',
            rename: function(dest, src) {
              const layoutName = src.split('.')[0];
              const outputPath = `${dest}/${layoutName}.css`;
              // console.log(`Compiling ${src} to ${outputPath}`);
              return outputPath;
            }
          }
        ]
      }
    },

    // Local server configuration
    connect: {
      server: {
        options: {
          port: 8000,
          base: ['assets', 'assets/css', 'assets/js', 'assets/images', 'src', 'src/pages'],
          livereload: true,
          open: true,
          middleware: function(connect, options, middlewares) {
            middlewares.unshift(function(req, res, next) {
              if (req.url.endsWith('.css')) {
                res.setHeader('Content-Type', 'text/css');
                // console.log(`Serving ${req.url} with Content-Type: text/css`);
              }
              return next();
            });
            return middlewares;
          }
          
        }
      }
    },    

    // Watch task for SCSS, HTML, and JavaScript files
    watch: {
      sass: {
        files: ['src/scss/**/*.scss'],
        tasks: ['sass'],
        options: {
          livereload: true,
          spawn: false // Optional: speeds up the watch task
        }
      },
      html: {
        files: ['src/pages/**/*.html'],
        options: {
          livereload: true,
        }
      },
      js: {
        files: ['src/components/**/*.js'],
        options: {
          livereload: true,
        }
      }
    },

    // Copy task to create build directory
    copy: {
      build: {
        files: [
          {
            expand: true,
            cwd: 'src/pages',         // Source directory for pages
            src: ['**'],
            dest: 'build/pages/'      // Destination directory for pages
          },
          {
            expand: true,
            cwd: 'src/components',    // Source directory for components
            src: ['**'],
            dest: 'build/components/' // Destination directory for components
          },
          {
            expand: true,
            cwd: 'assets',            // Source directory for assets
            src: ['**'],
            dest: 'build/assets/'     // Destination directory for assets
          },
          
        ]
      }
    },    

    // Optimize images
    imagemin: {
      images: {
          options: {
              optimizationLevel: 7,
              progressive: true
          },
          files: [{
              expand: true,
              cwd: 'assets/images/',
              src: ['**/*.{png,jpg,gif}'],
              dest: 'assets/images/'
          }]
      },
    },

    uglify: {
      options: {
        mangle: false,
        beautify: false,
        preserveComments: false
      },
      build: {
          files: {
              'build/assets/js/vendor.js': [
                  'assets/js/vendor/jquery-3.4.1.min.js',
                  'assets/js/vendor/swiper-bundle.min.js'
              ],
              'build/assets/js/global.js': [
                  'src/assets/js/global.js'
              ]
          }
      }
    },
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Register default tasks
  grunt.registerTask('default', ['sass', 'connect', 'watch', 'copy', 'uglify']);
  
  // Register build task
  grunt.registerTask('build', ['sass', 'copy']);
};