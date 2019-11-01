const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  userId: { type: String, required: true, maxlength: 512 },
  slug: { type: String, unique: true, sparse: true, maxlength: 256 },
  title: { type: String, required: true, maxlength: 256 },
  subTitle: { type: String, required: true, maxlength: 256 },
  story: { type: String, required: true, maxlength: 128 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  status: { type: String, default: 'draft', maxlength: 2048 },
  author: { type: String, required: true, maxlength: 2048 }
});

module.exports = mongoose.model('Blog', blogSchema);
