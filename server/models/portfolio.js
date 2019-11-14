const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
  userId: { type: String, required: true, maxlength: 512 },
  title: { type: String, required: true, maxlength: 256 },
  blurb: { type: String, required: true, maxLength: 256 },
  description: { type: String, required: true, maxlength: 2048 },
  githubLink: { type: String, required: false, maxlength: 256 },
  techUsed: { type: String, required: true, maxlength: 128 },
  imageUrl: { type: String, required: true, maxlength: 256 },
  imageUrl2: { type: String, required: false, maxlength: 256 },
  imageUrl3: { type: String, required: false, maxlength: 256 }
});

module.exports = mongoose.model('Portfolio', portfolioSchema);
