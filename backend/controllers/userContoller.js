const User = require('../models/user');

const createUser = async (req, res) => {
  try {
    const { email, name, preferences } = req.body;
    const user = new User({ email, name, preferences });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
};

module.exports = { createUser };
