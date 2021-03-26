const AddRolePermissionService = require('../services/AddRolePermissionService');

module.exports = {
  async update(request, response) {
    const { user_id } = request.params;
    const { role } = request.body;

    console.log(role);

    const addRolePermission = new AddRolePermissionService();

    const user = await addRolePermission.execute({
      user_id,
      role,
    });

    return response.json(user);
  },

  async delete(request, response) {
    const { user_id } = request.params;
    const { role } = request.body;

    const addRolePermission = new AddRolePermissionService();

    const user = await addRolePermission.execute({
      user_id,
      role,
    });

    return response.json(user);
  },
};
