const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  preferences: {
    preferredMediaType: { type: String, enum: ['video', 'book', 'article'], default: 'video' },
    difficulty: { type: String, enum: ['beginner', 'intermediate', 'advanced'], default: 'beginner' }
  },
  progress: [{
    conceptId: { type: mongoose.Schema.Types.ObjectId, ref: 'Concept' },
    completionPercentage: { type: Number, default: 0 },
    lastAccessed: { type: Date, default: Date.now }
  }]
});

const User = mongoose.model('User', userSchema);
module.exports = User;
