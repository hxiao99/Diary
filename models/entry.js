var mongoose = require('mongoose');

var entrySchema = mongoose.Schema({
  create_date:{
    type: Date,
    default: Date.now
  },
  mood:{
    type: String,
    required: false
  },
  title:{
    type: String,
    required: true
  },
  content:{
    type: String,
    required: true
  }
});

var Entry = module.exports = mongoose.model('Entry', entrySchema);

//Get Entry
module.exports.getEntry = function(callback, limit){
  Entry.find(callback).limit(limit);
}
