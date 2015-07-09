'use strict';
require('node-jsx').install();

var express = require('express'),
    path = require('path'),
    React = require('react');

var MainViewController = React.createFactory(
    require('./lib/components/react/MainViewController.jsx').MainViewController
);

var app = express();

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.send(React.renderToString(new MainViewController({})));
});

var server = app.listen(process.env.PORT || 3000, function() {
    var port = server.address().port;
    console.log('Listening on port %s', port);
});
