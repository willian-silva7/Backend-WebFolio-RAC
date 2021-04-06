const mongoose = require('mongoose');

const ACL_Class = new mongoose.Schema({
  // nome da classe de objetos de dominio protegidos
  class: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ACL-Class', ACL_Class);
