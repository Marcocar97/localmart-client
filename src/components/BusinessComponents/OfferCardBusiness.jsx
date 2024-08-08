import React from "react";
import { Link } from "react-router-dom";

function OfferCardBusiness({ offer }) {
  return (
    <div className="offer-card-business">
      <h3>{offer.offerName}</h3> 
      <p>{offer.description}</p>
      <p>Availability: {offer.availability}</p>
      <p>Schedules: {offer.schedules}</p>
      {offer.image && <img src={offer.image} alt={offer.name} />}
    </div>
  );
}

export default OfferCardBusiness;