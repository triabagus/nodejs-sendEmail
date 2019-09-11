var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'suasanarez123@gmail.com',
        pass: 'guesttria12345'
    }
});

var mailOptions = {
    from: 'suasanarez123@gmail.com',
    to: 'triatop9@gmail.com',
    // to: 'triatop9@gmail.com , email@gmail.com', (multiuser)
    subject: 'Trial sendding email with node JS',
    text: 'Success sending email'
    // html:'' (send mail html file)
};

transporter.sendMail(mailOptions, (err, info) => {
    if (err) throw err;
    console.log('Email sent:' + info.response);
});