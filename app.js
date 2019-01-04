var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

Entry = require('./models/entry');

app.use(bodyParser.json());

//Connecting to mongoose
mongoose.connect('mongodb://localhost/words');
var db = mongoose.connection;

app.get('/', function(req, res){
  res.send('Hello');
});

app.get('/api/entry', function(req, res){
  Entry.getEntry(function(err, entry){
    if(err){
      throw err;
    }
    res.json(entry);
  });
});

app.post('/create/entry', function(req, res){
  var body = req.body;
  const newEntry = new Entry({
    mood: body.mood,
    title: body.title,
    content: body.content
  });
  newEntry.save().then(() => res.send("New Entry Saved"));
});

app.listen(3000);
