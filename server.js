var express = require('express');
var React = require('react');
var logger = require('morgan');
var ReactDOM = require('react-dom');
var app = express();
var port = process.env.PORT || 3000;


app.use(express.static('./public'));



app.get('/', function(req, res) {
  res.send('<html><head></head><body><h1>Hello World!</h1></body></html>');
});
app.listen(port, function(req, res) {
  console.log("zeno listening on 3000");
});
