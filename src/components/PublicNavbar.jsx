import React from "react";
import { Link } from "react-router-dom";

const PublicNavbar = () => {
  return (
    <nav>
      <Link to="/">Logo</Link> 
      <Link to="/about-us">About Us</Link>{" "}
      <Link to="/business">Negocios</Link>{" "}
      <Link to="/login">Iniciar Sesión</Link>{" "}
    </nav>
  );
};
export default PublicNavbar;
