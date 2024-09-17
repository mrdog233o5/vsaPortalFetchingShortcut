const express = require("express");
const fs = require("node:fs");
const bodyParser = require("body-parser");
const app = express();

const skips = [
	"Homeroom",
	"Flex"
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	const date = req.get("date");

	fs.readFile("/timetable.php", "utf8", (err, data) => {
		if (err) {
			console.error(err);
			return;
		}

		var rawJSONData = JSON.parse(data);
		var formattedJSONData = {};

		Array.from(rawJSONData).forEach((classEvent:any) => {
			var skl_date = classEvent["school_date"];
			if (formattedJSONData[skl_date] == undefined) formattedJSONData[skl_date] = [];
			if (classEvent["room"] == "") return;
			formattedJSONData[skl_date].push(`${classEvent["room"]} - ${classEvent["subj_shortname"].split(" ").slice(0,1)}`);
		})

		res.json(formattedJSONData[date]);
	});
});

app.listen(() => {
	console.log(`Listening...`);
});

module.exports = app;
