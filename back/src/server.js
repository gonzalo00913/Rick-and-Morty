const express = require("express");
const router = require("./routes/index.js");
const cors = require("cors");
const { conn } = require("./db.js");

const app = express();
app.use(cors());
app.use(express.json())
app.use("/", router);


const PORT = 3001;

conn.sync({ force: true}).then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
  });
});
