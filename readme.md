# Send Email with Node JS

# Installation 
```bash
    lsb_release -a // cek version 
    sudo apt install nodejs
    sudo apt install npm
    npm init // make npm project
```
# Structure Directory
```
nodejs-sendEmail/
├── node_modules/
├── send_email.js
└── contact_form.html
```

# Install Module 
```bash
    npm install nodemailer
```

# Recommended
1. It is recommended to have one active Google account
2. Have an account that will be emailed or borrowed from friends.

# Bug Fixing Error
```
/var/www/nodejs-sendEmail/send_email.js:19
    if (err) throw err;
             ^

Error: Invalid login: 535-5.7.8 Username and Password not accepted.
```

### There are several possibilities:

1. The password is incorrect.
2. Security Settings in Gmail that don't allow third-party applications.
3. Internet connection.

For point 2 active setting security in this link : [https://myaccount.google.com/security](https://myaccount.google.com/security)
![alt text](https://github.com/triabagus/nodejs-sendEmail/blob/master/images/google-security.png)
# Author
&copy; [triabagus](https://github.com/triabagus/)
