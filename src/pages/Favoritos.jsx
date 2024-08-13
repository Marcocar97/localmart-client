import React, { useState, useEffect } from "react";
import service from "../../service/service.config";
import OfferCard from "../components/OfferCard";
import {
  Container,
  Grid,
  Typography,
  Box,
  CircularProgress,
  Paper,
} from "@mui/material";
function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await service.get("/auth/user-favorites");
        setFavorites(response.data);
      } catch (error) {
        console.error("Error fetching favorites", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFavorites();
  }, []);
  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
       
      <Typography variant="h4" gutterBottom>
         
        Mis ofertas Favoritas 
      </Typography> 
      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="70vh"
        >
           
          <CircularProgress /> 
        </Box>
      ) : (
        <Grid container spacing={3}>
           
          {favorites.length > 0 ? (
            favorites.map((offer) => (
              <Grid item xs={12} sm={6} md={4} key={offer._id}>
                 
                <Paper elevation={3} sx={{ padding: 2 }}>
                   
                  <OfferCard offer={offer} /> 
                </Paper> 
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
               
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="50vh"
              >
                 
                <Typography variant="h6" color="textSecondary">
                   
                  No favorites yet. 
                </Typography> 
              </Box> 
            </Grid>
          )} 
        </Grid>
      )} 
    </Container>
  );
}
export default FavoritesPage;
