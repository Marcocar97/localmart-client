import React from "react";
import service from "../../service/service.config";

function OfferCard({ offer }) {

  const handleAddReservation = async () => {
    try {
      const response = await service.post("/auth/user-reservas", {
        offerId: offer._id,
      });
      alert(
        `Reservation created successfully with confirmation number: ${response.data.confirmationNumber}`
      );
    } catch (error) {
      console.error("Error creating reservation", error);
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
    </div>
  );
}
export default OfferCard;
