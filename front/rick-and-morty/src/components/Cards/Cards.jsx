import Card from "../Card/Card";
import "./styleCards.css";

function Cards({ characters, onClose }) {
  return(
    <div className="container-cards">
    {characters.map((character) => (
      <Card
        key={character.id}
        character={character}
        name={character.name}
        species={character.species}
        gender={character.gender}
        image={character.image}
        onClose={onClose}
      />
    ))}
  </div>
  )

}

export default Cards;


