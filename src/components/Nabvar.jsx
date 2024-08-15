import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Typography, IconButton, Box, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { AuthContext } from "../context/auth.context";

function Navbar() {

  const [drawerOpen, setDrawerOpen] = useState(false);
  const { isLoggedIn, userType, logout } = useContext(AuthContext);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: "Home", to: "/" },
    { text: "Acerca de nosotros", to: "/about-us" },
    { text: "Login", to: "/login" },
  ];

  const userItems = [
    { text: "Ofertas", to: "/offers" },
    { text: "Favoritos", to: "/favorites" },
    { text: "Reservas", to: "/user-reservas" },
    { text: "Mi Perfil", to: "/my-profile" },
  ];

  const businessItems = [
    { text: "Crear Oferta", to: "/create-offer" },
    { text: "Mis Ofertas", to: "/my-offers" },
    { text: "Mi Negocio", to: "/my-business" },
  ];
  
  const handleLogout = () => {
    logout();
    setDrawerOpen(false);
  };
  return (
    <AppBar position="static" color="primary" sx={{ mb: 4 }}>
       
      <Toolbar>
         
        {isMobile && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
             
            <MenuIcon /> 
          </IconButton>
        )} 
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           
          LOCALMART 
        </Typography> 
        {!isMobile && (
          <Box sx={{ display: "flex", alignItems: "center" }}>
             
            {!isLoggedIn &&
              menuItems.map((item) => (
                <Button
                  key={item.text}
                  color="inherit"
                  component={Link}
                  to={item.to}
                  className="navbar-button"
                >
                   
                  {item.text} 
                </Button>
              ))} 
            {isLoggedIn &&
              userType === "user" &&
              userItems.map((item) => (
                <Button
                  key={item.text}
                  color="inherit"
                  component={Link}
                  to={item.to}
                  className="navbar-button"
                >
                   
                  {item.text} 
                </Button>
              ))} 
            {isLoggedIn &&
              userType === "business" &&
              businessItems.map((item) => (
                <Button
                  key={item.text}
                  color="inherit"
                  component={Link}
                  to={item.to}
                  className="navbar-button"
                >
                   
                  {item.text} 
                </Button>
              ))} 
            {isLoggedIn && (
              <Button
                color="inherit"
                onClick={handleLogout}
                className="navbar-button"
              >
                 
                Logout 
              </Button>
            )} 
          </Box>
        )} 
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
           
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
             
            <List>
               
              {!isLoggedIn &&
                menuItems.map((item) => (
                  <ListItem
                    button
                    key={item.text}
                    component={Link}
                    to={item.to}
                  >
                     
                    <ListItemText primary={item.text} /> 
                  </ListItem>
                ))} 
              {isLoggedIn &&
                userType === "user" &&
                userItems.map((item) => (
                  <ListItem
                    button
                    key={item.text}
                    component={Link}
                    to={item.to}
                  >
                     
                    <ListItemText primary={item.text} /> 
                  </ListItem>
                ))} 
              {isLoggedIn &&
                userType === "business" &&
                businessItems.map((item) => (
                  <ListItem
                    button
                    key={item.text}
                    component={Link}
                    to={item.to}
                  >
                     
                    <ListItemText primary={item.text} /> 
                  </ListItem>
                ))} 
              {isLoggedIn && (
                <ListItem button onClick={handleLogout}>
                   
                  <ListItemText primary="Logout" /> 
                </ListItem>
              )} 
            </List> 
          </Box> 
        </Drawer> 
      </Toolbar> 
    </AppBar>
  );
}
export default Navbar;
