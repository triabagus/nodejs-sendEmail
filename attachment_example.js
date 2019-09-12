import {
    fstat
} from "fs";

let message = {
    // ...
    attachments: [{
            // utf-8 string as an attachment
            filename: 'text1.txt',
            content: 'hello world!'
        },
        {
            // binary buffer as an attachment
            filename: 'text2.txt',
            content: new Buffer('hello world', 'utf-8')
        },
        {
            // file on disk as an attachment
            filename: 'text3.txt',
            path: 'path/to/file.txt' // stream this file
        },
        {
            // filename and content type is derived from path
            path: '/path/to/file.txt'
        },
        {
            // stream as an attachment
            filename: 'text4.txt',
            content: fs.createReadStream('file.txt')
        },
        {
            // define custom content type for the attachment
            filename: 'text.bin',
            content: 'hello world',
            contentType: 'text/plain'
        },
        {
            // use URL as an attachment
            filename: 'licence.txt',
            path: 'https://raw.github.com/nodemailer/nodemailer/master/LICENSE'
        },
        {
            // encoded string as an attachment
            filename: 'text1.txt',
            content: 'fdsfgdgfcvdvHVCS231CDs',
            encoding: 'base64'
        },
        {
            // data uri as an attachment
            path: 'data:text/plain:base64,fdsfgdgfcvdvHVCS231CDs='
        },
        {
            // use pregenerate MIME node
            raw: 'Content-Type : text/plain\r\n' +
                'Content-Disposition : attachment;\r\n' +
                '\r\n' +
                'Hello World'
        }
    ]
}