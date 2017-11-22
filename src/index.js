var express  = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

var routes = require('./srv/routes/routes.js');

app.use(bodyParser.json());                        
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes);

// one.save(function(err) {
// 	console.log(err);
// });

app.use('/node_modules', express.static(path.join(__dirname + '/../node_modules')));

app.use('/scripts', express.static(path.join(__dirname + '/assets/js')));
app.use(express.static(path.join(__dirname + '/../dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.get('*', function(req, res, next) {
	res.sendFile(path.join(__dirname + '/../dist/index.html'));
});

app.listen(process.env.PORT || 3000);