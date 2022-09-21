require('dotenv').config()
var nodemailer = require('nodemailer');
function sendOrderEmail(to) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'pizzahub66@gmail.com',
            pass: 'rxzduooqodzeijcx'
        }
    });
    var str = "your order placed Successfully .. \nThanks for Trusting Us..  Enjoy your pizza !!";
    var mailOptions = {
        from: 'pizzahub66@gmail.com',
        to: to,
        subject: 'Order Placed From Pizza Hub',
        text: str
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}
module.exports = sendOrderEmail