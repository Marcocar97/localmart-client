import React from "react";

function OfferCard({ offer }) {
  return (
    <div className="offer-card">
      <h2>{offer.offerName}</h2> <p>{offer.description}</p>
      <p>Availability: {offer.availability}</p>
      <p>Schedules: {offer.schedules}</p>
      {offer.image && <img src={offer.image} alt={offer.name} />}
    </div>
  );
}

export default OfferCard;
