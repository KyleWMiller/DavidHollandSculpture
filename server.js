//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//
// Server
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//
var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  logger = require('morgan'),
  cors = require('cors'),
  path = require('path'),
  nodemailer = require('nodemailer'),
  port = process.env.PORT || 3000,
  // apiRoutes = require('./api_routes.js'),
  mongoose = require('mongoose')
//   databaseURL = "mongodb://Aremmer:Elfkid20@ds021711.mlab.com:21711/soils"
//
// mongoose.connect(databaseURL, function(err){
//   if(err){
//     console.log(err)
//   }
//   console.log("connected to db")
// })

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
// app.use('/api', apiRoutes)
app.use(express.static(path.join(__dirname, './public')))
// http://localhost:3000/api/v1/'./public/*'

app.post('/sendEmail', function (req, res) {
  console.log(req.body);
  res.json({message: "Successfully sent email."})
})

app.listen(port, function () {
  console.log('Server running on port: ', port)
})
