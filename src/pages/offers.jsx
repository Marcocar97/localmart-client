import React, { useEffect, useState } from "react";
import service from "../../service/service.config";
import OfferCard from "../components/OfferCard";

const UserOffers = () => {
  const [offers, setOffers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    allOffers()
  }, [])

  const allOffers = async () => {
    try {
      const response = await service.get("/auth/user-offers");
      console.log("Response Data:", response.data); 
      setOffers(response.data);
    } catch (error) {
        console.error("Error Message:", error.message);
      
    }
  };

  return (
    <div>
      
      <h1>All Offers</h1>
      <div className="offers-container">
        
        {offers.map((offer) => (
          <OfferCard key={offer._id} offer={offer} />
        ))}
      </div>
    </div>
  );
};
export default UserOffers;
