const express = require('express');
const mongoose = require('mongoose');
const chalk = require('chalk');
const morgan = require('morgan'); // logger
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const api = require('./api');

app.set('port', (process.env.PORT || 8081));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.use('/api', api);
app.use(express.static('static'));

app.use(morgan('dev'));

app.use(function (req, res) {
	const err = new Error('Not Found');
	err.status = 404;
	res.json(err);
});

//Connecting to MongoDB
mongoose.connect('mongodb://localhost:27017/virtualstandups', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
	console.log(`${chalk.yellow('[Data base]: Connected to MongoDB')}`);
	app.listen(app.get('port'), function () {
	console.log(`[Server]: API Server Listening on port ${chalk.white(app.get('port'))} !`);
	});
});

