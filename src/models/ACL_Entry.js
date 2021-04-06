const mongoose = require('mongoose');

const ACL_Entry = new mongoose.Schema({
  // especifica a identidade do objeto, links para a tabela ACL_OBJECT_IDENTITY
  acl_object_identity: { type: mongoose.Schema.Types.ObjectId, ref: 'ACL_Object_Identity' },
  // ordem da entrada atual na lista de entradas ACL da identidade do objeto correspondente
  ace_order: { type: String },
  // destino ao qual a permissão é concedida ou negada, links para a tabela ACL_SID
  sid: { type: mongoose.Schema.Types.ObjectId, ref: 'ACL_SID' },
  // a máscara de bit inteiro que representa a permissão real sendo concedida ou negada
  mask: { type: String },
  // significa concessão, valor 0 significa negação
  concessao: { type: String, required: true },
  // para fins de auditoria
  audit_success: { type: String, required: true },
  audit_failure: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ACL_Entry', ACL_Entry);
