exports.mapRoutes = function(app, prefix){
	prefix = '/' + prefix;

	var prefixController = require('./controllers' + prefix);

	app.get(prefix, prefixController.index);
	app.get(prefix + '/new', prefixController.new);
	app.get(prefix + '/:email', prefixController.show);
	app.post(prefix + '/create', prefixController.create);
	app.get(prefix + '/:email/edit', prefixController.edit);
	app.patch(prefix + '/:email', prefixController.update);

}
