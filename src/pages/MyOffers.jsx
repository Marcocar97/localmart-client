import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import service from "../../service/service.config";
import OfferCardBusiness from "../components/BusinessComponents/OfferCardBusiness";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  TextField,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";

function MyOffersPage() {

  const [offers, setOffers] = useState([]);
  const [filteredOffers, setFilteredOffers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [error, setError] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    const agregaOffers = async () => {
      try {
        const response = await service.get("/auth/business-offers");
        setOffers(response.data);
        setFilteredOffers(response.data);
      } catch (error) {
        setError("Failed to fetch offers");
        setOpenSnackbar(true);
        console.error(error);
      }
    };
    
    agregaOffers();
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
      <Grid container spacing={2} sx={{ marginTop: 2 }}>
         
        {/* Lista de ofertas */} 
        <Grid
          item
          xs={3}
          sx={{
            overflowY: "scroll",
            backgroundColor: "#f5f5f5",
            height: "80vh",
            padding: 2,
          }}
        >
           
          <Typography variant="h6" gutterBottom>
             
            Mis ofertas publicadas
          </Typography> 
          <TextField
            label="Buscar oferta"
            variant="outlined"
            fullWidth
            value={searchTerm}
            onChange={handleSearch}
            sx={{ marginBottom: 2 }}
          /> 
          <Link to="/create-offer">
             
            <Button
              variant="contained"
              color="primary"
              sx={{ marginBottom: 2 }}
            >
               
              Agregar una nueva oferta
            </Button> 
          </Link> 
          {filteredOffers.length > 0 ? (
            filteredOffers.map((offer) => (
              <Paper
                key={offer._id}
                sx={{ marginBottom: 2, padding: 2, cursor: "pointer" }}
                onClick={() => handleSelectOffer(offer)}
              >
                 
                <Typography variant="subtitle1">
                  {offer.offerName}
                </Typography> 
                <Typography variant="body2" color="textSecondary">
                   
                  {offer.description} 
                </Typography> 
              </Paper>
            ))
          ) : (
            <Typography>No hay ofertas disponibles.</Typography>
          )} 
        </Grid> 
        {/* Derecha: Detalles de la oferta seleccionada */} 
        <Grid item xs={9} sx={{ padding: 2 }}>
           
          {selectedOffer ? (
            <Box
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
               
              <OfferCardBusiness offer={selectedOffer} /> 
              <Link to={`/edit-offer/${selectedOffer._id}`}>
                 
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ marginTop: 2 }}
                >
                   
                  Editar Oferta 
                </Button> 
              </Link> 
            </Box>
          ) : (
            <Typography variant="h6" color="textSecondary">
               
              Porfavor selecciona una oferta para ver los detalles 
            </Typography>
          )} 
        </Grid> 
      </Grid> 
    </Container>
  );
};
export default MyOffersPage;
