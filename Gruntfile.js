module.exports = function (grunt) {
	'use strict';

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		watch: {
			copy: {
				files: ['client/**/*.*'],
				tasks: ['copy:main']
			},
			stylus: {
				files: ['client/styles/**/*.*'],
				tasks: ['stylus:compile']
			}
		},
		copy: {
			main: {
				cwd: 'client/',
				src: ['**/*.js', '**/*.html'],
				dest: 'public/javascripts/',
				expand: true
			}
		},
		nodemon: {
			dev: {
				script: 'server.js',
				options: {
					env: {
						PORT: '8080'
					}
				}
			}
		},
		concurrent: {
			target: {
				tasks: ['nodemon', 'watch'],
				options: {
					logConcurrentOutput: true
				}
			}
		},
		stylus: {
			compile: {
				options: {
					paths: ['client/styles']
				},
				files: {
					'public/stylesheets/application.css': 'client/styles/main.styl'
				}
			}
		}
	});

	grunt.registerTask('default', ['concurrent'])

};