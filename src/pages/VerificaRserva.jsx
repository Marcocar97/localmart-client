import React, { useState } from "react";
import service from "../../service/service.config";

function ReservaVerificationPage()  {

  const [confirmationNumber, setConfirmationNumber] = useState("");
  const [reservation, setReservation] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await service.get(`/auth/reservas/${confirmationNumber}`);
      setReservation(response.data);
      setError("");
    } catch (error) {
      console.error("Error fetching reservation", error);
      setReservation(null);
      setError("Reservation not found");
    }
  };
  
  return (
    <div className="reservation-verification-page">
       
      <h1>Verify Reservation</h1> 
      <form onSubmit={handleSearch}>
         
        <label>
           
          Confirmation Number: 
          <input
            type="text"
            value={confirmationNumber}
            onChange={(e) => setConfirmationNumber(e.target.value)}
            required
          /> 
        </label> 
        <button type="submit">Search</button> 
      </form> 
      {error && <p className="error-message">{error}</p>} 
      {reservation && (
        <div className="reservation-details">
           
          <h2>Reservation Details</h2> 
          <p>
            <strong>Confirmation Number:</strong> 
            {reservation.confirmationNumber}
          </p> 
          <p>
            <strong>Created At:</strong> 
            {new Date(reservation.createDate).toLocaleString()}
          </p> 
          <h3>Offer Details</h3> 
          <p>
            <strong>Offer Name:</strong> {reservation.offer.offerName}
          </p> 
          <h3>User Details</h3> 
          <p>
            <strong>Name:</strong> {reservation.user.name}
          </p> 
          <p>
            <strong>Email:</strong> {reservation.user.email}
          </p> 
        </div>
      )} 
    </div>
  );
};
export default ReservaVerificationPage;
