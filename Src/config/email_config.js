const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({

    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: "6082mufijk@gmail.com",
        pass: "dpcl ipxw dpzv uaex",
    },
    secure: true,


})

const sendotp = (to, subject, html) => {
    const mailData = {
        from: "mufijkhorajiya@gmail.com",
        to:to,
        subject:subject,
        html:html
    }
    transporter.sendotp(mailData)
 return true
}
module.exports =(sendotp)