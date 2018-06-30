Example of how to send HTML Emails in NodeJs with Nodemailer.

### Usage

```
npm install
npm run start
```

After the start, open http://localhost:3000 and you should find the simple form. 

![HTMl Email Preview](/thelebster/example-nodemailer-send-html-email/raw/master/public/images/2018-06-30_14-46-24.png)

Fill out the form and submit. You should receive a simple HTML email.

![HTMl Email Preview](/thelebster/example-nodemailer-send-html-email/raw/master/public/images/2018-06-30_14-46-00.png)

This example use the [Stream Transport](https://nodemailer.com/transports/stream/) for testing.

Use [SMTP transport](https://nodemailer.com/smtp/) for delivering messages in&nbsp;the production environment.

```
const transporter = nodemailer.createTransport({
  host: 'smtp.example.com',
  port: 587,
  auth: {
    user: 'username',
    pass: 'password'
  }
});
```
