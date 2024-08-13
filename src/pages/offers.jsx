import React, { useState, useEffect } from "react";
import service from "../../service/service.config";
import OfferCard from "../components/OfferCard";
import { Container, Grid, Paper, Typography, TextField, Box, Snackbar, Alert } from "@mui/material";

function UserOffers() {

  const [offers, setOffers] = useState([]);
  const [filteredOffers, setFilteredOffers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [error, setError] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {

    const fetchOffers = async () => {
      try {
        const response = await service.get("/auth/user-offers");
        setOffers(response.data);
        setFilteredOffers(response.data);
      } catch (error) {
        setError("Failed to fetch offers");
        setOpenSnackbar(true);
        console.error("Error fetching offers:", error.message);
      }
    };

    fetchOffers();

  }, []);

  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();

    setSearchTerm(searchValue);

    const filtered = offers.filter(
      (offer) =>
        offer.offerName.toLowerCase().includes(searchValue) ||
        offer.description.toLowerCase().includes(searchValue)
    );
    setFilteredOffers(filtered);
  };


  const handleSelectOffer = (offer) => {
    setSelectedOffer(offer);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);

  };

  return (

    <Container maxWidth="lg">
       
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
         
        <Alert onClose={handleCloseSnackbar} severity="error">
           
          {error} 
        </Alert> 
      </Snackbar> 
      
      <Grid
        container
        spacing={2}
        sx={{ marginTop: 2, height: "100vh", display: "flex" }}
      >
         
        {/* Lista de ofertas */} 
        <Grid
          item
          xs={12}
          sm={4}
          md={3}
          sx={{
            overflowY: "auto",
            backgroundColor: "#f5f5f5",
            height: "100%",
            padding: 2,
            borderRight: "1px solid #ddd",
          }}
        >
           
          <Typography variant="h6" gutterBottom>
             
            Todas las ofertas 
          </Typography> 
          <TextField
            label="Buscar ofertas"
            variant="outlined"
            fullWidth
            value={searchTerm}
            onChange={handleSearch}
            sx={{ marginBottom: 2 }}
          /> 
          {filteredOffers.length > 0 ? (
            filteredOffers.map((offer) => (
              <Paper
                key={offer._id}
                sx={{
                  marginBottom: 2,
                  padding: 2,
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                  "&:hover": { backgroundColor: "#e0e0e0" },
                }}
                onClick={() => handleSelectOffer(offer)}
              >
                 
                <Typography variant="subtitle1">
                   
                  {offer.offerName} 
                </Typography> 
                <Typography variant="body2" color="text.secondary">
                   
                  {offer.description} 
                </Typography> 
              </Paper>
            ))
          ) : (
            <Typography>No hay ofertas disponibles.</Typography>
          )} 
        </Grid> 


        {/* Detalles de la oferta seleccionada */} 
        <Grid
          item
          xs={12}
          sm={8}
          md={9}
          sx={{
            padding: 2,
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
           
          {selectedOffer ? (
            <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
               
              <OfferCard offer={selectedOffer} /> 
            </Box>
          ) : (
            <Typography variant="h6" color="text.secondary">
               
              Por favor selecciona una oferta para ver los detalles. 
            </Typography>
          )} 
        </Grid> 
      </Grid> 
    </Container>
  );
}
export default UserOffers;
