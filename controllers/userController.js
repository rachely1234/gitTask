// userController.js
const User = require('../models/users')
const id = 111
exports.upDateUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const  data  = req.body;
    const result = await upDateUser(userId, data)
    if (result === 'invalid') {
      return res.status(404).json({ massege: "user not found" })
    }
    if (!result) {
      return res.status(404).json({ massege: "user not found" })
    }
    res.json({ message: 'updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update user' })
  }
};
exports.addUser = async (req, res) => {
  try {
    const data = req.body
    
    const result = await addUser(data);
    if (result === 'invalid') {
      res.status(400).json({ message: 'email not valid' });

    }
    if (!result) {
      res.status(400).json({ message: 'user not insert' });

    }
    res.json({ message: "inserted successfully" })
  } catch (error) {
    res.status(500).json({ message: 'failed insert user' })
  }
};
exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const result = await deleteUser(userId)
    if (!result) {
      res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete user' });
  }
};

