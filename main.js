/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var http = require('http');
var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var path = require('path');
var util = require('util');

__dirname = path.resolve();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var date="";
var ord="";
var opt1=false;
var opt2=false;

app.get("/css/:file", function(req, res){
    res.sendFile(__dirname + '/css/' +req.params.file);
});

app.get("/script/:file", function(req, res)
{
    res.sendFile(__dirname + '/script/' +req.params.file);
});

app.get("/img/:file", function(req, res)
{
    res.sendFile(__dirname + '/img/' +req.params.file);
});

app.get('/', function(req, res)
{
    res.render(__dirname + '/public/index.html');
});

app.get('/1', function(req, res)
{
    res.render(__dirname + '/public/1.html');
});

app.get('/2', function(req, res)
{
    res.render(__dirname + '/public/2.html');
});

app.get('/3', function(req, res)
{
    res.render(__dirname + '/public/3.html');
});

app.post('/', function(req, res)
{
  console.log(req.body);   // your JSON
  //res.send(req.body);    // echo the result back
  res.send(JSON.stringify({"date": date, "url":"/1"}));
  //res.send({redirect: '/1'});
});

app.post('/1', function(req, res)
{
  date=req.body.date;   // your JSON
  //console.log(date);  // log back
  res.send(JSON.stringify({"url":"/2"}));
});

app.post('/2', function(req, res)
{
  ord=req.body.ord;   // your JSON
  //console.log(ord);  // log back
  res.send(JSON.stringify({"url":"/3"}));
});

app.post('/3', function(req, res)
{
  opt1=req.body.opt1;   // your JSON
  opt2=req.body.opt2;   // your JSON
  res.send(JSON.stringify({"url":"/"}));
  console.log("ordine effettuato");
  console.log("data:" + date);
  console.log("menu:" + ord.toString());
  console.log("opzione 1:" + opt1 + "-opzione 2:" +opt2);
});

var jsdom = require("jsdom");

app.listen(1337);