import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "./detail.css";

const Detail = () => {
  const { detailId } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
 
 

    axios(`http://localhost:3001/detail/${detailId}`).then((response) =>
      setCharacter(response.data)
    );
  }, []);

  return (
    <div className="detail-margin-top">
    <div className="container-detail-car">
      {character.name ? (
        <>
          <img  className="detail-img" src={character.image} alt="img" />
          <div className="detail-info">
          <h2>{character.name}</h2>
          <p>{character.status}</p>
          <p>{character.species}</p>
          <p>{character.gender}</p>
          <p>{character.origin?.name}</p>
          <Link to="/Home"><button>Back</button></Link>
          </div>
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
    </div>
  );
};

export default Detail;