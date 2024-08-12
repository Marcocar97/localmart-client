import React from "react";
import { Link } from "react-router-dom";

function OfferCardBusiness({ offer }) {
  
  return (
    <div className="offer-card-business">
      {offer.image && <img src={offer.image} alt={offer.name} />}
      <h3>{offer.offerName}</h3> 
      <p><b>Decripcion de la oferta:</b></p>
        <p>{offer.description}</p>
      <p><b>Validez de la oferta: </b>{offer.availability}</p>
      <p><b>Horarios: </b>{offer.schedules}</p>
    </div>
  );
}

export default OfferCardBusiness;