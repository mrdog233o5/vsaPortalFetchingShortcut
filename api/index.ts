const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
	console.log(req.get("test"));
	var resJson = {
		classes: [],
	};
	res.json(resJson);
});

app.listen(() => {
	console.log(`Listening...`);
});

module.exports = app;
