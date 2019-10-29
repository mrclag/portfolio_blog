const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
  userId: { type: String, required: true, maxlength: 512 },
  title: { type: String, required: true, maxlength: 256 },
  company: { type: String, required: true, maxlength: 256 },
  location: { type: String, required: true, maxlength: 128 },
  position: { type: String, required: true, maxlength: 256 },
  description: { type: String, required: true, maxlength: 2048 }
});

module.exports = mongoose.model('Portfolio', portfolioSchema);
