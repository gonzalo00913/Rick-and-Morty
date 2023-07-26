import "./styleCar.css";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/actions";
import { Link } from "react-router-dom";

function Card({character,onClose, addFavorite, removeFavorite, myFavorites}){
  const { id,species, gender, image, name } = character;
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFavorite(id);
    } else {
      setIsFav(true);
      addFavorite(character);
    }
  };
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites, id]);

  return (
    <div className="container-card">
      <div className="container-btn-favorite">
      {isFav ? (
        <button className="favorite" onClick={handleFavorite}>❤️</button>
      ) : (
        <button className="favorite" onClick={handleFavorite}>🤍</button>
      )}
      
      <button className="x" onClick={() => onClose(id)}>X</button>
      </div>
      <Link className="detail" to={`/detail/${id}`}>
        <h2>{name}</h2>
      </Link>
      <img src={image} alt="imagen de personajes" />
      <h2>{species}</h2>
      <h2>{gender}</h2>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => {
      dispatch(addFavorite(character));
    },
    removeFavorite: (id) => {
      dispatch(removeFavorite(id));
    },
  };
};

const mapStateToProps = (state) => {
  return { myFavorites: state.myFavorites };
};

export default connect(mapStateToProps, mapDispatchToProps )(Card);
