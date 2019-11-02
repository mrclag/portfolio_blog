const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  userId: { type: String, required: true, maxlength: 512 },
  slug: { type: String, unique: true, sparse: true },
  title: { type: String, required: true, maxlength: 96 },
  subTitle: { type: String, required: true },
  story: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  status: { type: String, default: 'draft', maxlength: 2048 },
  author: { type: String, required: true, maxlength: 2048 }
});

module.exports = mongoose.model('Blog', blogSchema);
