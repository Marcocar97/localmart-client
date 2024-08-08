import React, { useContext} from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";



const Navbar = () => {
  const { isLoggedIn, userType, logout } = useContext(AuthContext);
  return (
    <nav>
      
      {!isLoggedIn && 
      <Link to="/">Home</Link> }

      <Link to="/about-us">About Us</Link>

      {!isLoggedIn && <Link to="/login">Login</Link>}

      {isLoggedIn && userType === "user" && (
        <>
          <Link to="/offers">Ofertas</Link>
          <Link to="/favorites">Favoritos</Link>
          <Link to="/reservas">Reservas</Link>
          <Link to="/profile">Mi Perfil</Link>
        </>
      )}
      {isLoggedIn && userType === "business" && (
        <>
          
          <Link to="/create-offer">Crear Oferta</Link>
          <Link to="/my-offers">Mis Ofertas</Link>
          <Link to="/my-business">Mi Negocio</Link>
        </>
      )}

      {isLoggedIn && <button onClick={logout}>Logout</button>}
    </nav>
  );
};
export default Navbar;
