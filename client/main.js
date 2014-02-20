requirejs.config({
	paths: {
		'text': '/vendor/requirejs-text/text',
		'durandal': '/vendor/durandal/js',
		'plugins': '/vendor/durandal/js/plugins',
		'transitions': '/vendor/durandal/js/transitions',
		'knockout': '/vendor/knockout.js/knockout',
		'bootstrap': '/vendor/bootstrap/dist/js/bootstrap',
		'jquery': '/vendor/jquery/jquery'
	},
	shim: {
		'bootstrap': {
			deps: ['jquery'],
			exports: 'jQuery'
		}
	}
});

define(['durandal/system', 'durandal/app', 'durandal/viewLocator'], function(system, app, viewLocator){
	system.debug(true);

	app.title = 'Project Z';

	app.configurePlugins({
		router: true,
		dialog: true,
		widget: true
	});

	app.start().then(function(){
		viewLocator.useConvention();
		app.setRoot('viewmodels/shell', 'entrance')
	});
});