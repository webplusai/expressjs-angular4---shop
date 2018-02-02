var express = require('express');
var router = express.Router();
var multer = require('multer');

var models = require('../models/index.js');
var populateList = require('../config/constants.js').populateList;

var DIR = './src/uploads/';

var storage = multer.diskStorage({
  	destination: function (req, file, cb) {
    	cb(null, DIR)
  	},
  	filename: function (req, file, cb) {
  		var ext = file.originalname.split('.');
    	cb(null, file.fieldname + '-' + Date.now() + '.' + ext[ext.length - 1]);
  	}
});
 
var upload = multer({ storage: storage }).single('image');

router.post('/upload', function (req, res, next) {
	var path = '';
	upload(req, res, function (err) {
        if (err) {
			console.log(err);
			return res.status(422).send("an Error occured")
		}
		return res.send({filename: req.file.filename}); 
	});
})

router.get('/crud', function(req, res) {
	var model_name = req.query.model;
	var condition = req.query.condition;
	var populate = req.query.populate;
	
	var query = models[model_name].find();
	if (condition) {
		query = query.where(condition);
	}

	if (populateList[model_name]) {
		populateList[model_name].forEach( function(model) { console.log(model); query = query.populate(model) } );
	}

	query.exec(function(err, result) {
		if (!err) {
			res.json({status: 'ok', code: 200, content: result});
		} else {
			res.json({status: 'error', code: 500, content: err});
		}
	});
});

router.get('/crud/:id', function(req, res) {
	var model_name = req.query.model;
	var id = req.params.id;

	models[model_name].findOne({_id: id}, function(err, result) {
		if (!err) {
			res.json({status: 'ok', code: 200, content: result});
		} else {
			res.json({status: 'error', code: 500, content: err});
		}
	});
});

router.put('/crud/:id', function(req, res) {
	var model_name = req.body.model;
	var id = req.params.id;

	models[model_name].update({_id: id}, req.body, null, function(err, numAffected) {
		if (!err) {
			res.json({status: 'ok', code: 200, content: 'Successfully updated'});
		} else {
			res.json({status: 'error', code: 500, content: err});
		}
	});
});

router.post('/crud', function(req, res) {
	var model_name = req.body.model;
	var data = models[model_name](req.body);

	console.log(req.body);

	data.save(function(err) {
		if (!err) {
			res.json({status: 'ok', code: 200, content: 'Successfully saved'});
		} else {
			res.json({status: 'error', code: 500, content: err});
		}
	});
});

router.delete('/crud/:id', function(req, res) {
	var model_name = req.body.model;
	var id = req.params.id;

	models[model_name].find({ _id: id }).remove().exec(function(err) {
		if (!err) {
			res.json({status: 'ok', code: 200, content: 'Successfully deleted'});
		} else {
			res.json({status: 'error', code: 500, content: err});
		}
	});
});

module.exports = router;