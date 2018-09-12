//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//
// Server
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//
var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  logger = require('morgan'),
  // cors = require('cors'),
  path = require('path'),
  nodemailer = require('nodemailer'),
  smtpTransport = require('nodemailer-smtp-transport'),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
// app.use(cors())
app.use(express.static(path.join(__dirname, './public')))

app.post('/sendEmail', function (req, res) {

  var transporter = nodemailer.createTransport(smtpTransport({
    service: 'Gmail',
    auth: {
      user: "mailernode99@gmail.com",
      pass: "**********"
    }
  }))

  // console.log('SMTP Configured');

  var mailOptions = {
    from: {
      name: req.body.firstname + ' ' + req.body.lastname,
      address: req.body.from
    },
    replyTo: req.body.from,
    to: "miller.kwill@gmail.com",
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
