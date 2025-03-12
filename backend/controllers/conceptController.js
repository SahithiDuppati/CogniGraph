const Concept = require('../models/concept');

const createConcept = async (req, res) => {
  try {
    const { name, description } = req.body;
    const concept = new Concept({ name, description });
    await concept.save();
    res.status(201).json(concept);
  } catch (error) {
    res.status(500).json({ message: 'Error creating concept', error });
  }
};

module.exports = { createConcept };
