
var mongodb = require('mongodb');

exports.up = function(db, next){
	var category = db.createCollection('category', next);
};

exports.down = function(db, next){
	db.dropCollection('category', next);
};
