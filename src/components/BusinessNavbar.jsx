import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/Private";

const BusinessNavbar = () => {
  const { logout } = useAuth();
  
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/login"); // Redirigir al usuario a la página de inicio de sesión
  };
  return (
    <nav>
      {" "}
      <Link to="/published-offers">Published Offers</Link>{" "}
      <Link to="/about-us">About Us</Link>{" "}
      <Link to="/my-offers">My Offers</Link>{" "}
      <Link to="/business-profile">My Business</Link>{" "}
      <button onClick={handleLogout}>Logout</button>{" "}
    </nav>
  );
};
export default BusinessNavbar;
