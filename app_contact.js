var http = require('http');
var fs = require('fs');
var qs = require('querystring');
var nodemailer = require('nodemailer');

http.createServer((req, res) => {
    if (req.url === "/") {
        // redirect to contact form page
        res.writeHead(302, {
            'Location': '/contact/'
        });
        res.end();
    }

    // load content contact form
    if (req.url === "/contact/" && req.method === "GET") {
        fs.readFile("contact_form.html", (err, data) => {
            if (err) throw err;
            res.end(data);
        });
    }

    // send the email
    if (req.url === "/contact/" && req.method === "POST") {
        var requestBody = '';
        req.on('data', function (data) {
            // add data from form contact
            requestBody += data;

            // send if data entity too large
            if (requestBody.length > 1e7) {
                res.writeHead(413, 'Request Entity Too Large', {
                    'Content-Type': 'text/html'
                });
                res.end('<!doctype html><html><head><title>413</title></head><body>Entity Too Large</body></html>');
            }
        });

        req.on('end', function () {
            let formData = qs.parse(requestBody);

            // send the email
            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'suasanarez123@gmail.com',
                    pass: 'guesttria12345'
                }
            });

            let mailOptions = {
                from: formData.email,
                replyTo: formData.email,
                to: formData.emailto,
                subject: formData.subject,
                text: formData.message
            };

            transporter.sendMail(mailOptions, (err, info) => {
                if (err) throw err;
                console.log('Email send: ' + info.response);
                res.end("Thank You");
            });
        });
    }
}).listen(8000);

console.log("Server running on http://localhost:8000");