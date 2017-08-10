var express  = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(path.join(__dirname + '/../dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.get('*', function(req, res, next) {
	res.sendFile(path.join(__dirname + '/../dist/index.html'));
});

app.listen(process.env.PORT || 3000);