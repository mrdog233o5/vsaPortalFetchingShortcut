import express from "express";

const app = express();
const port = 8080;

app.get("/", (req, res) => {
	res.send("Hello World!");
	console.log(res.headersSent);
});

app.listen(port, () => {
	console.log(`Listening on port ${port}...`);
});

module.exports = app;
