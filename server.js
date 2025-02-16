'use strict';
const bootstrap = require('global-agent/bootstrap');
const Express = require('express');
const router = require('./lib');

const app = Express();
const port = process.env.PORT || 3000;

app.use('/api/', router);

app.get('/', function(req, res){
  res.redirect('/api');
});

app.listen(port, function () {
  console.log('Server started on port', port);
});
