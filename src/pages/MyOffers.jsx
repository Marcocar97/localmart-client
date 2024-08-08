import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import service from "../../service/service.config";
import OfferCardBusiness from "../components/BusinessComponents/OfferCardBusiness";

const MyOffersPage = () => {
  const [offers, setOffers] = useState([]);
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [error, setError] = useState("");
  const mostrarOffers = async () => {
    try {
      const response = await service.get("/auth/business-offers");
      setOffers(response.data);
    } catch (error) {
      setError("Failed to fetch offers");
      console.error(error);
    }
  };
  useEffect(() => {
    mostrarOffers();
  }, []);
  const handleOfferClick = (offer) => {
    setSelectedOffer(offer);
  };
  return (
    <div className="offers-page">
      
      <div className="offers-list">
        
        <h1>Your Published Offers</h1>
        <Link to="/create-offer">
          
          <button className="add-offer-button">Add New Offer</button>
        </Link>
        {error && <p className="error-message">{error}</p>}
        <div className="offers-list-container">
          
          {offers.length > 0 ? (
            offers.map((offer) => (
              <div key={offer._id} onClick={() => handleOfferClick(offer)}>
                
                <OfferCardBusiness offer={offer} />

              </div>
            ))
          ) : (
            <p>No offers available.</p>
          )}
        </div>
      </div>
      <div className="offer-details">
        {" "}
        {selectedOffer ? (
          <>
            
            <h2>{selectedOffer.offerName}</h2>
            <p>{selectedOffer.description}</p>
            <p>
              <strong>Availability:</strong> {selectedOffer.availability}
            </p>
            <p>
              <strong>Schedules:</strong> {selectedOffer.schedules}
            </p>
            <img
              src={selectedOffer.image}
              alt={selectedOffer.offerName}
              className="offer-image"
            />
            <Link to={`/edit-offer/${selectedOffer._id}`}>
              
              <button className="edit-offer-button">Edit Offer</button>
            </Link>
          </>
        ) : (
          <p>Select an offer to see the details</p>
        )}
      </div>
    </div>
  );
};
export default MyOffersPage;
