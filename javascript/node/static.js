var express = require('express');
var app = express();
app.use(express.static('jsrepos'));
app.listen(3000, function () {
	console.log('serve static files');
})
