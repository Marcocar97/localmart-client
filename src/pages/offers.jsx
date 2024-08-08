import React, { useEffect, useState } from "react";
import service from "../../service/service.config";


const UserOffers = () => {
  const [offers, setOffers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await service.get("/user-offers");
        setOffers(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchOffers();
  }, []);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      {" "}
      <h1>Ofertas</h1>{" "}
      <div className="offers-container">
        {" "}
        {offers.map((offer) => (
          <div key={offer._id} className="offer-card">
            {" "}
            <h2>{offer.offerName}</h2> <p>{offer.description}</p>{" "}
            <p>Disponibilidad: {offer.availability}</p>{" "}
            <p>Horarios: {offer.schedules.join(", ")}</p>{" "}
            {offer.image && <img src={offer.image} alt={offer.offerName} />}{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </div>
  );
};
export default UserOffers;
