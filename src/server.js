const express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 3001;

var router = express.Router();

router.get('/', (req, res) => {
    res.json({message: "hooray! the api works!"});
});

//More routes for API here

app.use('/api', router);

app.listen(port);
console.log("magic happening on port " + port);