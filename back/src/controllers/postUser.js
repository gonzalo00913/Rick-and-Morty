const { User } = require("../db.js");

const createUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).send("Faltan datos");
    }

    const newUser = await User.create({ email, password });

    return res.json(newUser);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = createUser;

