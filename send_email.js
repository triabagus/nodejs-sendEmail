var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'youremail@gmail.com',
        pass: 'passwordemail'
    }
});

var mailOptions = {
    from: 'youremail@gmail.com',
    to: 'friendemail@gmail.com',
    // to: 'triatop9@gmail.com , email@gmail.com', (multiuser)
    subject: 'Trial sendding email with node JS',
    // text: 'Success sending email' (send text default)
    // html:'<h1>Success</h1><p>This is my file</p>' (send mail html file)
    html: '<h1>Success</h1><p>This is my file</p>',
    attachments: [{
        filename: 'newtext.txt',
        content: 'Hello World'
    }]
};

transporter.sendMail(mailOptions, (err, info) => {
    if (err) throw err;
    console.log('Email sent:' + info.response);
});