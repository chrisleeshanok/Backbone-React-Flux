'use strict';
require('node-jsx').install();

var express = require('express'),
    path = require('path'),
    React = require('react'),
    cons = require('consolidate');

var MainViewController = React.createFactory(
    require('./lib/components/react/MainViewController').MainViewController
);

var app = express();

app.engine('dust', cons.dust); //dust files should be handled by dust
app.set('view engine', 'dust');
app.set('views', './views');
app.use('/public', express.static(path.join(__dirname, 'public')));

var data = {
    reactSSR: React.renderToString(new MainViewController({}))
};

app.get('/', function(req, res) {
    res.render('main', data);
});

var server = app.listen(process.env.PORT || 3000, function() {
    var port = server.address().port;
    console.log('Listening on port %s', port);
});
