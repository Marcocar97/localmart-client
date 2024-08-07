import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/Private";

const UserNavbar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/login"); // Redirigir al usuario a la página de inicio de sesión
  };
  return (
    <nav>
      {" "}
      <Link to="/all-offers">All Offers</Link>{" "}
      <Link to="/about-us">About Us</Link>{" "}
      <Link to="/user-favorites">Favorites</Link>{" "}
      <Link to="/user-reservas">Reservas</Link>{" "}
      <Link to="/user-profile">My Profile</Link>{" "}
      <button onClick={handleLogout}>Logout</button>{" "}
    </nav>
  );
};
export default UserNavbar;
