import React, { useState, useEffect } from "react";
import service from "../../service/service.config";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

function OfferCard({ offer }) {

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
  console.log(offer.business)
    const checkIfFavorite = async () => {
      try {
        const response = await service.get("/auth/user-favorites");
        const favorites = response.data;
        setIsFavorite(favorites.some((fav) => fav._id === offer._id));
      } catch (error) {
        console.error("Error checking favorites", error);
      }
    };
    checkIfFavorite();
  }, [offer._id]);

  const handleToggleFavorite = async () => {

    try {
      await service.patch(`/auth/user-favorites/${offer._id}`);
      setIsFavorite(!isFavorite);
      alert(
        isFavorite ? "Offer removed from favorites" : "Offer added to favorites"
      );
    } catch (error) {
      console.error("Error updating favorites", error);
      alert("Failed to update favorites");
    }
  };

  const handleAddReservation = async () => {

    try {
      const response = await service.post("/auth/user-reservas", {
        offerId: offer._id,
      });
      alert(
        `Reservation created successfully with confirmation number: ${response.data.confirmationNumber}`
      );
    } catch (error) {
      console.error("Error creating reservation", error);
      alert("Failed to create reservation");
    }
  };


  return (
    <Card>
       
      {offer.image && (
        <CardMedia
          component="img"
          height="140"
          image={offer.image}
          alt={offer.offerName}
        />
      )} 
      <CardContent>
         
        <Typography gutterBottom variant="h5" component="div">
           
          {offer.offerName} 
        </Typography> 

        <Typography variant="body2" color="text.secondary">

          
           
          {offer.business.businessName} 
        </Typography> 



        <Typography variant="body2" color="text.secondary">
           
          {offer.description} 
        </Typography> 
        <Typography variant="body2" color="text.secondary">
           
          Availability: {offer.availability} 
        </Typography> 
        <Typography variant="body2" color="text.secondary">
           
          Schedules: {offer.schedules} 
        </Typography> 
        <Button
          onClick={handleAddReservation}
          variant="contained"
          color="primary"
        >
           
          Reservar Oferta 
        </Button> 
        <Button
          onClick={handleToggleFavorite}
          variant="outlined"
          sx={{ marginLeft: 2 }}
        >
           
          {isFavorite ? "💔 Quitar de favoritos" : "❤️ Agregar a Favoritos"} 
        </Button> 
      </CardContent> 
    </Card>
  );
}
export default OfferCard;
