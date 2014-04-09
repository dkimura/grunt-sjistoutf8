grunt = require('grunt')

module.exports = ->
	grunt.initConfig
		pkg: grunt.file.readJSON('package.json')
		sjistoutf8:
			dist:
				expand: true
				cwd:  'test/src'
				src:  '*.html'
				dest: 'test/dest'

	grunt.loadTasks 'tasks'
	grunt.registerTask 'default', ['sjistoutf8']
