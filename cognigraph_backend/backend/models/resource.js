const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  source: { type: String, enum: ['YouTube', 'GoogleBooks', 'Coursera', 'Article'], required: true },
  views: Number,
  likes: Number,
  duration: String,
  difficulty: { type: String, enum: ['beginner', 'intermediate', 'advanced'] },
  tags: [String],
  uploadDate: Date
});

const Resource = mongoose.model('Resource', resourceSchema);
module.exports = Resource;
