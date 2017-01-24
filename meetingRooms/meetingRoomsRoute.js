var express = require('express')
let jsonServer = require("json-server");
let meetingRoomsRouter = jsonServer.router('./meetingRooms/meetingRoomsDB.json')

// meetingRoomsRouter.render = function (req, res) {
//   var data = res.locals.data
//   if (res.statusCode >= 400) {
//     data = {
//       code: res.statusCode,
//       message: 'Error message'
//     }
//   }
//   res.jsonp(data)
// }

module.exports = meetingRoomsRouter
