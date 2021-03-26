const User = require('../models/User');
const AppError = require('../errors/AppError');

class AddRolePermissionService {
  async execute({ user_id, role }) {
    const user = await User.findById(user_id).populate(
      'educator',
      '-password',
    );

    if (!user) {
      throw new AppError('Usuário não Encontrado');
    }

    if (user.role.indexOf(role) < 0) {
      user.role.push(role);
    }

    await user.save();

    return user;
  }
}

module.exports = AddRolePermissionService;
