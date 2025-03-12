const Resource = require('../models/resource');

const createResource = async (req, res) => {
  try {
    const { title, url, source, difficulty } = req.body;
    const resource = new Resource({ title, url, source, difficulty });
    await resource.save();
    res.status(201).json(resource);
  } catch (error) {
    res.status(500).json({ message: 'Error creating resource', error });
  }
};

module.exports = { createResource };
