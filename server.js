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
  smtpTransport = require('nodemailer-smtp-transport'),
  port = process.env.PORT || 3000,
  // apiRoutes = require('./api_routes.js'),
  mongoose = require('mongoose')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
// app.use('/api', apiRoutes)
app.use(express.static(path.join(__dirname, './public')))
// http://localhost:3000/api/v1/'./public/*'

app.post('/sendEmail', function (req, res) {

  var transporter = nodemailer.createTransport(smtpTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAILUSER,
      pass: process.env.EMAILPASS
    }
  }))

  // console.log('SMTP Configured');

  var mailOptions = {
    from: {
      name: req.body.firstname + ' ' + req.body.lastname,
      address: req.body.from
    },
    replyTo: req.body.from,
    to: process.env.RECEMAIL,
    subject: req.body.subject,
    text: req.body.text
  }

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) res.json(err);
    else res.json('Message Successfully Sent', info);
  })

})

app.listen(port, function () {
  console.log('Server running on port: ', port)
})
