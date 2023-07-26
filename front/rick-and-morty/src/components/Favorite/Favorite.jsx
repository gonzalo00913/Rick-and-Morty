import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";

const Favorites = () => {
  const favorites = useSelector((state) => state.myFavorites);

  return (
    <div className="container-cards" >
      {favorites.map(({ id, name, species, gender, image }) => {
        return (
          <Card className="container-card" key={id} character={{ id, name, species, gender, image }} />
        );
      })}
    </div>
  );
};

export default Favorites;