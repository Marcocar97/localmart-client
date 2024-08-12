import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { AuthContext } from "../context/auth.context";

function Navbar() {

  const { isLoggedIn, userType, logout } = useContext(AuthContext);

  return (
    <AppBar position="static" color="primary" sx={{ mb: 4 }}>
       
      <Toolbar>
         
        {/* Mobile */} 
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
           
          <MenuIcon /> 
        </IconButton> 
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           
          LOCALMART 
        </Typography> 
        {/* Links and Buttons */} 
        <Box sx={{ display: "flex", alignItems: "center" }}>
           
          {!isLoggedIn && (
            <>
               
              <Button
                color="inherit"
                component={Link}
                to="/"
                className="navbar-button"
              >
                 
                Home 
              </Button> 
              <Button
                color="inherit"
                component={Link}
                to="/about-us"
                className="navbar-button"
              >
                 
                About Us 
              </Button> 
              <Button
                color="inherit"
                component={Link}
                to="/login"
                className="navbar-button"
              >
                 
                Login 
              </Button> 
            </>
          )} 
          {isLoggedIn && userType === "user" && (
            <>
               
              <Button
                color="inherit"
                component={Link}
                to="/offers"
                className="navbar-button"
              >
                 
                Ofertas 
              </Button> 
              <Button
                color="inherit"
                component={Link}
                to="/favorites"
                className="navbar-button"
              >
                 
                Favoritos 
              </Button> 
              <Button
                color="inherit"
                component={Link}
                to="/user-reservas"
                className="navbar-button"
              >
                 
                Reservas 
              </Button> 
              <Button
                color="inherit"
                component={Link}
                to="/my-profile"
                className="navbar-button"
              >
                 
                Mi Perfil 
              </Button> 
            </>
          )} 
          {isLoggedIn && userType === "business" && (
            <>
               
              <Button
                color="inherit"
                component={Link}
                to="/create-offer"
                className="navbar-button"
              >
                 
                Crear Oferta 
              </Button> 
              <Button
                color="inherit"
                component={Link}
                to="/my-offers"
                className="navbar-button"
              >
                 
                Mis Ofertas 
              </Button> 
              <Button
                color="inherit"
                component={Link}
                to="/my-business"
                className="navbar-button"
              >
                 
                Mi Negocio 
              </Button> 
            </>
          )} 
          {isLoggedIn && (
            <Button color="inherit" onClick={logout} className="navbar-button">
               
              Logout 
            </Button>
          )} 
        </Box> 
      </Toolbar> 
    </AppBar>
  );
};
export default Navbar;
