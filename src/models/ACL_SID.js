const mongoose = require('mongoose');

const ACL_SID = new mongoose.Schema({
  // SID - Security Identity
  sid: { type: String, required: true },
  // 0 ou 1, para indicar se SID é pricipal usuário ou uma autoridade
  // (function role_admin, role_user, role_editor)
  principal: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ACL_SID', ACL_SID);
