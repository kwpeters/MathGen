var connect = require('connect');

var portNum = 3000;
console.log("Server started on port %d.", portNum);

var app = connect()
          .use(connect.static(__dirname + '/www'))
          .listen(portNum);