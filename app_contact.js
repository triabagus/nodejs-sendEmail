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
}).listen(8000);

console.log("Server running on http://localhost:8000");