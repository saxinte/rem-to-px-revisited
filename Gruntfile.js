module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-sass');

    grunt.initConfig({

        sass: {
            dist: {
                files:[{
                    expand  : true,
                    flatten : true,
                    src     : './sass/**/*.scss',
                    dest    : './dest/css/',
                    ext     : '.css'
                }]
            }
        }

    });

    // Tasks
    grunt.registerTask('default', ['sass']);

};