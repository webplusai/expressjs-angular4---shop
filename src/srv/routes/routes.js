var express = require('express');
var router = express.Router();

var models = require('../models/index.js');

router.get('/crud', function(req, res) {
	var model_name = req.query.model;
	var condition = req.query.condition;
	
	var query = models[model_name].find();
	if (condition) {
		query = query.where(condition);
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