const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.use('/public', express.static(process.cwd() + '/public'));

app.get("/", function (req, res) {
	res.sendFile(process.cwd() + '/views/index.html');
});

app.get("/hello", function(req, res) {
	res.json({greetings: "Hello API!"})
});

let port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log("Listening on port " + port + "!");
});