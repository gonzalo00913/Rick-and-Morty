const { Router } = require("express");
const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");
const getAllCharacters = require("../controllers/getCharAll")
const createUser = require("../controllers/postUser.js");
const validateUser = require("../controllers/login")

const router = Router();

router.get("/onsearch/:id", getCharById);
router.get("/detail/:id", getCharDetail);
router.get("/all", getAllCharacters);
/* router.get("/registerUser", validateUser);
router.post("/register", createUser); */

module.exports = router;



