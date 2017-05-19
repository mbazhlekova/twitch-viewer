var dotenv = require('dotenv');
dotenv.load();

const express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require('request');

const streamsUrl = 'https://api.twitch.tv/kraken/streams/';
const channelsUrl = 'https://api.twitch.tv/kraken/channels/';
const channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
const api_key = process.env.API_KEY;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 3001;

var router = express.Router();

app.use('/api', router);
app.get('/api', (req, res, next) => {
        return res.json({message: "the api works"})
})

app.use('/streams', router);
app.get('/streams', (req, res, next) => {
    request(streamsUrl + '?client_id=' + api_key, (err, body) => {
        return res.json(body);
    });
});

app.use('/channels', router);
app.get('/channels', (req, res, next) => {
    request(channelsUrl + channels[3] + '?client_id=' + api_key, (err, body) => {
        return res.json(body);
    });
});

app.listen(port);
console.log("magic happening on port " + port);