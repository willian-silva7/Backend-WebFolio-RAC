const nodemailer = require('nodemailer');

const {
  host, pass, port, user,
} = require('../../config/mail');

class MailerMailProvider {
  async sendMail(forgottenUserData) {
    const {
      to, body, subject,
    } = forgottenUserData;

    const smtpConfig = {
      host,
      port,
      secure: false,
      auth: {
        user,
        pass,
      },
    };

    const transporter = nodemailer.createTransport(smtpConfig);

    const mailOptions = {
      from: { name: 'Equipe WebFólio', address: user },
      to: { address: to.email },
      subject,
      text: body,
      html: body,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
  }
}

module.exports = MailerMailProvider;
