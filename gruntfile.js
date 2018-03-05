module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    require('time-grunt')(grunt);

    var appConfig = {
        app: 'src',
        dist: 'WebContent'
    };

    grunt.initConfig({
        site: appConfig,
        bower: {
            install: {
                options: {
                    targetDir: "<%= site.app %>/lib",
                    layout: "byComponent",
                    cleanTargetDir: false
                }
            }
        },
        connect: {
            options: {
                port: 9002,
                hostname: 'localhost',
                livereload: 35729,
                base: '<%= site.app %>'
            },
            livereload: {
                options: {
                    open: true,
                    middleware: function (connect) {
                        return [
                            connect.static('.tmp'),
                            connect().use(
                                '/bower_components',
                                connect.static('./bower_components')
                            ),
                            connect.static(appConfig.app)
                        ];
                    }
                }
            }
        },
        clean: {
            dist: {
                src: ['<%= site.dist %>/**']
            },
            server: '.tmp'
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                expand: true,
                cwd: '<%= site.app %>/',
                src: '**/*.html',
                dest: '<%= site.dist %>/'
            }
        },
        copy: {
            dist: {
                files: [{
                        expand: true,
                        cwd: '<%= site.app %>/lib',
                        src: '**',
                        dest: '<%= site.dist %>/lib'
                    }, {
                        expand: true,
                        cwd: '<%= site.app %>/legal',
                        src: '**',
                        dest: '<%= site.dist %>/legal'
                    }, {
                        expand: true,
                        dot: true,
                        cwd: '<%= site.app %>/scripts',
                        src: '**/*.css',
                        dest: '<%= site.dist %>/scripts'
                    }, {
                        expand: true,
                        dot: true,
                        cwd: '<%= site.app %>',
                        dest: '<%= site.dist %>',
                        src: [
                            '*.{ico,png,txt}',
                            '.htaccess',
                            '*.html',
                            'views/**/*.html',
                            'styles/patterns/*.*',
                            'img/{,*/}*.*'
                        ]
                    },
                    {
                        expand: true,
                        dot: true,
                        cwd: 'bower_components/fontawesome',
                        src: ['fonts/*.*'],
                        dest: '<%= site.dist %>'
                    },
                    {
                        expand: true,
                        dot: true,
                        cwd: 'bower_components/bootstrap',
                        src: ['fonts/*.*'],
                        dest: '<%= site.dist %>'
                    },
                ]
            },
            styles: {
                expand: true,
                cwd: '<%= site.app %>/styles',
                dest: '.tmp/styles/',
                src: '{,*/}*.css'
            }
        },
        sass: {
            dev: {
                options: { // Target options
                    style: 'expanded'
                },
                files: {
                    '<%= site.app %>/styles/style.css': '<%= site.app %>/scss/style.scss'
                }
            },
            dist: {
                options: { // Target options
                    style: 'expanded'
                },
                files: {
                    '<%= site.dist %>/styles/style.css': '<%= site.app %>/scss/style.scss'
                }
            }
        },
        uglify: {
            dist: {
                options: {
                    compress: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= site.app %>/scripts',
                    src: '**/*.js',
                    dest: '<%= site.dist %>/scripts'
                }]
            }
        },
        watch: {
            scripts: {
                files: '<%= site.app %>/**/*.js',
                options: {
                    livereload: '<%= connect.options.livereload %>'
                }
            },
            styles: {
                files: '<%= site.app %>/scss/*.scss',
                tasks: ['sass:dev', 'copy:styles'],
                options: {
                    livereload: '<%= connect.options.livereload %>'
                }
            },
            html: {
                files: '<%= site.app %>/**/*.html',
                options: {
                    livereload: '<%= connect.options.livereload %>'
                }
            }
        }
    });

    grunt.registerTask('installBower', ["bower:install"]);

    grunt.registerTask('live', [
        'clean:server',
        'sass:dev',
        'copy:styles',
        'bower:install',
        "connect:livereload",
        "watch"
    ]);

    grunt.registerTask('server', [
        'clean:server',
        'sass:dev',
        'copy:styles',
        'bower:install',
        'connect:livereload:keepalive'
    ]);

    grunt.registerTask('release', [
        "clean:dist",
        "sass:dist",
        "uglify:dist",
        "copy:dist",
        "htmlmin:dist"
    ]);
};