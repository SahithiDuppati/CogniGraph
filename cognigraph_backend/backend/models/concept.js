const mongoose = require('mongoose');

const conceptSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: String,
  relatedConcepts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Concept' }],
  prerequisites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Concept' }],
  resources: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Resource' }]
});

const Concept = mongoose.model('Concept', conceptSchema);
module.exports = Concept;
