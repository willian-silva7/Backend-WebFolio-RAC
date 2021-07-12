const { v4: uuidv } = require('uuid');
// const path = require('path');
const User = require('../models/User');
const AppError = require('../errors/AppError');
const UserToken = require('../models/UserToken');
// const EtherealMailProvider = require('../providers/MailProvider/EtherealMailProvider');
const MailerMailProvider = require('../providers/MailProvider/MailerMailProvider');

class SendForgotPasswordEmailService {
  async execute({ email }) {
    const user = await User.findOne({ email: `${email}` });

    if (!user) {
      throw new AppError('Usuário não existe');
    }

    const token = uuidv();
    const userToken = await UserToken.create({
      token,
      user_id: user.id,
    });

    // const forgotPasswordTemplate = path.resolve(
    //   __dirname,
    //   '..',
    //   'views',
    //   'forgot_password.hbs',
    // );

    // console.log(forgotPasswordTemplate);

    // const mailProvider = new EtherealMailProvider();
    const mailProvider = new MailerMailProvider();
    await mailProvider.sendMail({
      to: user,
      from: process.env.EMAIL_USER,
      // template: 'Auth/forgot_password',
      // context: { token },
      body: `Pedido de Recuperação de Senha recebido, Entre no Link a seguir para redefinir senha:  http://localhost:3000/reset-password?token=${userToken.token} .`,
      subject: '[WebFólio] Recuperação de Senha',
      // forgotPasswordTemplate,
    });
  }
}

module.exports = SendForgotPasswordEmailService;
