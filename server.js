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
  mongoose = require('mongoose')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use(express.static(path.join(__dirname, './public')))

app.post('/sendEmail', function (req, res) {
  console.log(req.body);
  res.json({message: "Successfully sent email."})
})

app.listen(port, function () {
  console.log('Server running on port: ', port)
})
