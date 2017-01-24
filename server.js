let jsonServer = require("json-server");
let server = jsonServer.create()
var middlewares = jsonServer.defaults()

var meetingRoomsRewriter = require('./meetingRooms/meetingRoomsRewriter.json')
server.use(jsonServer.rewriter(meetingRoomsRewriter))

var meetingRoomsRouter = require("./meetingRooms/meetingRoomsRoute");
var studentsRouter = require("./students/studentsRoute");
// var piratedMeetingRoom = require('./meetingRooms/meetingRoomsRoute')


server.use(meetingRoomsRouter)
server.use('/tutor', studentsRouter)
// server.use('/pirateMR', piratedMeetingRoom)


Object.keys(meetingRoomsRouter.db.getState())
  .forEach((key) => console.log(`/${key}`))
// Object.keys(studentsRouter.db.getState())
//   .forEach((key) => console.log(`/${key}`))
// Object.keys(piratedMeetingRoom.db.getState())
//     .forEach((key) => console.log(`/${key}`))

//1 server with multiple routers
server.listen(3000, function () {
    console.log('JSON Server is running')
});
