let jsonServer = require("json-server");
let server = jsonServer.create()
var middlewares = jsonServer.defaults()

var meetingRoomsRewriter = require('./meetingRooms/meetingRoomsRewriter.json')
server.use(jsonServer.rewriter(meetingRoomsRewriter))

var meetingRoomsRouter = require("./meetingRooms/meetingRoomsRoute");
// var studentsRouter = require("./students/studentsRoute");

server.use(meetingRoomsRouter)
//server.use('/tutor', studentsRouter) //Disable studentsRouter

//1 server with multiple routers
server.listen(3000, function () {
    console.log('JSON Server is running')
});
