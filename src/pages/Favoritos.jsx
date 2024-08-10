import React, { useState, useEffect } from "react";
import service from "../../service/service.config";
import OfferCard from "../components/OfferCard"


const FavoritesPage = () => {

  const [favorites, setFavorites] = useState([]);
  
  useEffect(() => {
    const favorites = async () => {
      try {
        const response = await service.get("/auth/user-favorites");
        setFavorites(response.data);
      } catch (error) {
        console.error("Error agregando favoritos", error);
      }
    };
    favorites();
  }, []);

  return (
    <div className="favorites-page">
      {" "}
      <h1>My Favorites</h1>{" "}
      <div className="favorites-list">
        {" "}
        {favorites.length > 0 ? (
          favorites.map((offer) => <OfferCard key={offer._id} offer={offer} />)
        ) : (
          <p>No favorites yet.</p>
        )}{" "}
      </div>{" "}
    </div>
  );
};
export default FavoritesPage;
