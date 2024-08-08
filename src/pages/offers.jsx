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
      console.log("Response Data:", response.data); // Verifica los datos recibidos
      setOffers(response.data);
    } catch (error) {
      if (error.response) {
        // La solicitud fue hecha y el servidor respondió con un código de estado // que cae fuera del rango de 2xx
        console.error("Error Response Data:", error.response.data);
        console.error("Error Response Status:", error.response.status);
        console.error("Error Response Headers:", error.response.headers);
      } else if (error.request) {
        // La solicitud fue hecha pero no se recibió respuesta
        console.error("Error Request:", error.request);
      } else {
        // Algo sucedió al configurar la solicitud que lanzó un error
        console.error("Error Message:", error.message);
      }
    }
  };

  return (
    <div>
      {" "}
      <h1>All Offers</h1>
      <div className="offers-container">
        {" "}
        {offers.map((offer) => (
          <OfferCard key={offer._id} offer={offer} />
        ))}
      </div>
    </div>
  );
};
export default UserOffers;
