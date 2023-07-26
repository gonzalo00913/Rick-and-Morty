const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

const getAllCharacters = (req, res) => {
  axios
    .get(URL)
    .then(response => {
      const characters = response.data.results.map(character => {
        const { id, name, species, image, gender } = character;
        return { id, name, species, image, gender };
      });
      res.status(200).json(characters);
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
};

module.exports = getAllCharacters;
