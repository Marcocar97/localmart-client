import React, { useState, useEffect } from "react";
import service from "../../service/service.config";


function OfferCard({ offer }) {

  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    const checkIfFavorite = async () => {
      try {
        const response = await service.get("/auth/user-favorites");
        const favorites = response.data;
        setIsFavorite(favorites.some((fav) => fav._id === offer._id));
      } catch (error) {
        console.error("Error verificando favoritos", error);
      }
    };
    checkIfFavorite();
  }, [offer._id]);
  const handleToggleFavorite = async () => {
    try {
      const response = await service.patch(`/auth/user-favorites/${offer._id}`);
      setIsFavorite(!isFavorite);
      alert(
        isFavorite ? "Offer removed from favorites" : "Offer added to favorites"
      );
    } catch (error) {
      console.error("Error actualizando favoritos", error);
      alert("Failed to update favorites");
    }
  };
  const handleAddReservation = async () => {
    try {
      const response = await service.post("/auth/user-reservas", {
        offerId: offer._id,
      });
      alert(
        `Reservation created successfully with confirmation number: ${response.data.confirmationNumber}`
      );
    } catch (error) {
      console.error("Error creando reservacion", error);
      alert("Failed to create reservation");
    }
  };
  return (
    <div className="offer-card">
      {" "}
      <h2>{offer.offerName}</h2> <p>{offer.description}</p>{" "}
      <p>Availability: {offer.availability}</p>{" "}
      <p>Schedules: {offer.schedules}</p>{" "}
      {offer.image && <img src={offer.image} alt={offer.offerName} />}{" "}
      <button onClick={handleAddReservation}>Add Reservation</button>{" "}
      <button onClick={handleToggleFavorite}>
        {" "}
        {isFavorite ? "💔 Remove from Favorites" : "❤️ Add to Favorites"}{" "}
      </button>{" "}
    </div>
  );
}
export default OfferCard;
