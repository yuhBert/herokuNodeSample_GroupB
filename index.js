var app = require('express')();
var http = require('http').createServer(app);
var port = process.env.PORT || 3000

// server.listen(80);
// WARNING: app.listen(80) will NOT work here!

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

http.listen(port,function()
{
    console.log("listening on " + port);
})