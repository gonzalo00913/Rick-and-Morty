const { User } = require("../db.js");

const validate = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) return res.status(400).send("faltan datos");

    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(404).send("usuario no encontrado");

    return user.password === password
      ? res.json({ access: true })
      : res.status(403).send("contraseña incorrecta");
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = validate