const express = require("express");
const app = express();
const multer = require("multer");

let upload = multer(); //don't upload files anywhere, just keep them in memory temporarily

const cors = require("cors");
app.use(cors());

app.use('/public', express.static(process.cwd() + '/public'));

app.get("/", function (req, res) {
	res.sendFile(process.cwd() + '/views/index.html');
});

app.get("/hello", function(req, res) {
	res.json({greetings: "Hello API!"})
});

app.post("/api/fileanalyse", upload.single("upfile"), function(req, res) {
	if (!req.file) {
		res.json({"Error": "Please select a file!"});
	} else {
		res.json({
			"name": req.file.originalname,
			"type": req.file.mimetype,
			"size": req.file.size
		})
	}
})

let port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log("Listening on port " + port + "!");
});