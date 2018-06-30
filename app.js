const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');  
const nodemailer = require('nodemailer');
const ejs = require('ejs');
const template = require('email-templates');

// Setup the view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res, next) {
  res.render('index', { state: null });
});

app.post('/', (req, res, next) => {

  let transporter = nodemailer.createTransport({
    streamTransport: true,
    newline: 'unix', // newline: 'windows'
    buffer: true
  });

  const email = new template({
    message: {
      from: 'mailbox@example.com',
    },
    send: true,
    transport: transporter,
    views: {
      options: {
        extension: 'ejs'
      }
    }
  });

  email
  .send({
    template: 'example',
    message: {
      to: req.body.email
    },
    locals: {
      name: req.body.name,
    }
  })
  .then(info => {

    console.log(info.envelope);
    console.log(info.messageId);
    console.log(info.message);

    res.render('index', { 
      state: 'sent',
      name: req.body.name,
      email: req.body.email
    });
  })
  .catch(err => {
    console.log(err);
  });
});

module.exports = app;
