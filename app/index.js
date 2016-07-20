// write a rule to say hello
// when I hit /hello

var pickOne = require('pick-one');
var motivations = require('motivations');

var Express = require('express');
var app = Express();



app.get('/hello', function(request, response) {
  console.log("request to /hello");
  response.send(motivations);
});

module.exports = app;
