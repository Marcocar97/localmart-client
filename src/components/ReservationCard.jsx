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
       
      <h2>Numero de confirmacion: {reservation.confirmationNumber}</h2> 
      <p>Fecha: {new Date(reservation.createDate).toLocaleDateString()}</p> 
      <p>Oferta: {reservation.offer.offerName}</p> 
      <p>Nombre del cliente: {reservation.user.name}</p> 
      <button onClick={handleDelete} style={{ color: "red" }}>
         
        Cancelar reserva 
      </button>
    </div>
  );
}
export default ReservationCard;
