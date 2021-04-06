const mongoose = require('mongoose');

const ACL_Object_Identity = new mongoose.Schema({
  // define a classe do objeto de domínio, links para a tabela ACL_CLS
  object_id_class: { type: mongoose.Schema.Types.ObjectId, ref: 'ACL_Class' },
  // armazena a chave primária do objeto de destino
  object_id_identity: { type: String },
  // especifique o pai desta identidade de objeto nesta tabela
  parent_object: { type: String },
  // link para a tabela ACL_SID
  owner_sid: { type: mongoose.Schema.Types.ObjectId, ref: 'ACL_SID' },
  // entradas ACL deste objeto são herdadas do objeto pai
  entries_inheritting: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ACL_Object_Identity', ACL_Object_Identity);
