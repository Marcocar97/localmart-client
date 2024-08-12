import React from "react";
import { useNavigate } from "react-router-dom";
import service from "../../service/service.config";

function ReservationCard({ reservation, onDelete }) {

  const navigate = useNavigate;

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this reservation?")) {
      try {
        await service.delete(`/auth/user-reservas/${reservation._id}`);
        alert("Reservation deleted successfully!");
        onDelete(reservation._id);
      } catch (error) {
        console.error("Error deleting reservation", error);
      }
    }
  };
  
  return (
    <div className="reservation-card">
       
      <h2>Reservation {reservation.confirmationNumber}</h2> 
      <p>Date: {new Date(reservation.createDate).toLocaleDateString()}</p> 
      <p>Offer: {reservation.offer.offerName}</p> 
      <p>User: {reservation.user.name}</p> 
      <button onClick={handleDelete} style={{ color: "red" }}>
         
        Delete Reservation 
      </button>
    </div>
  );
}
export default ReservationCard;
