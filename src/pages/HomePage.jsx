import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Button, Grid, Paper, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import imag1 from "../pictures/User1.png";
import imag2 from "../pictures/Business.png";
import "../App.css";

function HomePage() {
  return (
    <Container>
           
      {/* USUARIOS */}     
      <Paper className="hero-section">
             
        <Box className="content-box">
               
          <Box className="title-box">
                 
            <Typography variant="h4" gutterBottom>
                   
              Ahorra dinero en cada compra     
            </Typography>     
            <Typography variant="body1" paragraph>
                   
              LocalMart te hace la vida más fácil. Gasta de forma adecuada y
              mejora la gestión de tu dinero, consigue grandes descuentos hoy mismo.     
            </Typography>  
            <br />   
            <Link to="/signup/user">
                   
              <Button variant="contained" color="primary">
                     
                Convertirme en usuario     
              </Button>     
            </Link>     
          </Box>     
          <br />
          <Box className="benefits">
                 
            <Typography className="benefit-item" variant="body1">
                   
              <span>✔</span> Ofertas exclusivas     
            </Typography>     
            <Typography className="benefit-item" variant="body1">
                   
              <span>✔</span> Descuentos de hasta el 60%     
            </Typography>     
            <Typography className="benefit-item" variant="body1">
                   
              <span>✔</span> Apoya el comercio local     
            </Typography>     
          </Box>     
          <Grid container spacing={4} mt={4}>
                 
            <Grid item xs={12} md={4}>
                   
              <Paper className="feature-box">
                     
                <Typography variant="h6">Ahorra</Typography>     
                <br />
                <Typography variant="body2">
                       
                  Con las ofertas que tenemos en nuestra plataforma ahorrar será
                  más fácil que nunca     
                </Typography>     
              </Paper>     
            </Grid>     
            <Grid item xs={12} md={4}>
                   
              <Paper className="feature-box">
                     
                <Typography variant="h6">Controla tu dinero</Typography>  
                <br />   
                <Typography variant="body2">
                       
                  Reserva las ofertas que más te convengan, puedes cancelarlas
                  sin gastos ni comisiones     
                </Typography>     
              </Paper>     
            </Grid>     
            <Grid item xs={12} md={4}>
                   
              <Paper className="feature-box">
                     
                <Typography variant="h6">Ofertas locales</Typography>     
                <br />
                <Typography variant="body2">
                       
                  Acceso exclusivo a fantásticas ofertas en tu panadería local,
                  tu bar habitual o tu restaurante favorito     
                </Typography>     
              </Paper>     
            </Grid>     
          </Grid>     
        </Box>     
        <Box>
               
          <img className="image" src={imag1} alt="User Image" />     
        </Box>     
      </Paper>    

      <br />

      {/* BUSINESS */}     
      <Paper className="hero-section">
             
        <Box className="content-box">
               
          <Box className="title-box">
                 
            <Typography variant="h4" gutterBottom>
                   
              Promociona tu negocio     
            </Typography>     
            <Typography variant="body1" paragraph>
                   
              LocalMart te da nuevos clientes, clientela recurrente. Sin
              esfuerzos, sin costes. Lleva tus ofertas a las personas adecuadas.     
            </Typography>     
            <br />
            <Link to="/signup/business">
                   
              <Button variant="contained" color="primary">
                     
                Promocionar mi negocio     
              </Button>     
            </Link>     
          </Box>    
          <br /> 
          <Box className="benefits">
                 
            <Typography className="benefit-item" variant="body1">
                   
              <span>✔</span> Incrementa tus ventas     
            </Typography>     
            <Typography className="benefit-item" variant="body1">
                   
              <span>✔</span> Haz crecer tu clientela habitual     
            </Typography>     
            <Typography className="benefit-item" variant="body1">
                   
              <span>✔</span> Miles de usuarios activos     
            </Typography>     
          </Box>     
          <Grid container spacing={4} mt={4}>
                 
            <Grid item xs={12} md={4}>
                   
              <Paper className="feature-box">
                     
                <Typography variant="h6">Publicidad</Typography>     
                <br />
                <Typography variant="body2">
                  Tu negocio será visto por miles de clientes
                </Typography>     
              </Paper>     
            </Grid>     
            <Grid item xs={12} md={4}>
                   
              <Paper className="feature-box">
                     
                <Typography variant="h6">Manejar tu negocio</Typography>    
                <br /> 
                <Typography variant="body2">
                  Podrás crear, editar o eliminar ofertas en cualquier momento
                </Typography>     
              </Paper>     
            </Grid>     
            <Grid item xs={12} md={4}>
                   
              <Paper className="feature-box">
                     
                <Typography variant="h6">Ventas</Typography>    
                <br /> 
                <Typography variant="body2">
                  Aumenta considerablemente tus ventas usando nuestra plataforma
                </Typography>     
              </Paper>     
            </Grid>     
          </Grid>     
        </Box>     
        <Box>
               
          <img className="image" src={imag2} alt="Business promotion" />     
        </Box>     
      </Paper>     
    </Container>
  );
}

export default HomePage;
