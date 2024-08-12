import React, { useState, useEffect } from "react";
import service from "../../service/service.config";
import ReservationCard from "../components/ReservationCard";

function ReservationsPage() {
  const [reservations, setReservations] = useState([]);
  const [error, setError] = useState("");

  const reservation = async () => {
    try {
      const response = await service.get("/auth/user-reservas");
      console.log(response);
      setReservations(response.data);
    } catch (error) {
      console.error("Error reservations", error);
      setError("Failed to reservations");
    }
  };
  useEffect(() => {
    reservation();
  }, []);

  const handleDelete = (reservationId) => {
    setReservations(reservations.filter((res) => res._id !== reservationId));
  };

  return (
    <div className="reservations-page">
      <h1>Your Reservations</h1>

      {reservations.map((reservation) => (
        <ReservationCard
          key={reservation._id}
          reservation={reservation}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}
export default ReservationsPage;
