let jsonServer = require("json-server");
let server = jsonServer.create()
server.use(jsonServer.defaults())

//Project 1: Meeting-rooms
//Links will be accessible under https://localhost:3000/meetingrooms/db
server.use('/meetingrooms',jsonServer.rewriter({
  "/employees/all": "/employees",
  "/employees/:level": "/employees?level=:level",
  "/rooms/:availability": "/meeting-rooms?availability=:availability",
  //To include children resources, add _embed
  //              parent resource, add _expand
  "/departments/:department": "/departments?name=:department&_embed=employees",
  //_lte (less than equal), _gte (greater than equal), _ne (exclude), _like (like)
  "/employeesBelow30": "/employees?age_lte=31",
}))
server.use('/meetingrooms',jsonServer.router('meetingRoomsDB.json'))

//NOTE: Search, Sort, Paginate need to use original url (rewriter doesn't work)
//Sort: _sort, _order (optional)
//Paginate: _page, _limit (optional)
//Search: q

//Project 2: Student Tutor
//Links will be accessible under https://localhost:3000/tutor/db
server.use('/tutor',jsonServer.router('studentsDB.json'))

//1 server with multiple routers
server.listen(3000, function () {
    console.log('JSON Server is running')
});
