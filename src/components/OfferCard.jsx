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

  console.log(offer.business.businessName)

  const [isFavorite, setIsFavorite] = useState(false);
  

  useEffect(() => {
  
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
          height="250"
          image={offer.image}
          alt={offer.offerName}
        />
      )} 
      <CardContent>
         
        <Typography gutterBottom variant="h5" component="div">
           
          {offer.offerName} 
        </Typography> 

        
        <Typography variant="body2" color="text.secondary">
           
          Comercio: {offer.business.businessName} 
           </Typography>

        <Typography variant="body2" color="text.secondary">
           
          Ubicado en: {offer.business.location} 
           </Typography>
           <br />

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
        <br />
<br />
        <Typography variant="body2" color="text.secondary">
        <Typography gutterBottom variant="h5" component="div">
           
           Descripcion de la oferta 
         </Typography> 
         {offer.description} 
        </Typography> 
        <br />
        <Typography variant="body2" color="text.secondary">

        <Typography gutterBottom variant="h5" component="div">
           
           Informacion adicional 
         </Typography> 
           
          <b>Validez: </b> {offer.availability} 
        </Typography> 
        <Typography variant="body2" color="text.secondary">
           
          <b>Horarios: </b>  {offer.schedules} 
        </Typography> 
        <br />
        <Typography variant="body2" color="text.secondary">
        <Typography gutterBottom variant="h5" component="div">
           
           Acerca del comercio 
         </Typography> 
         <br />
         {offer.business.description} 
         <br />
         <p>Puedes contactar con nosotros a traves de:</p>
         {offer.business.email} 
        </Typography> 
        <br />
        <Button
          onClick={handleAddReservation}
          variant="contained"
          color="primary"
        >
           
          Reservar Oferta 
        </Button> 
      </CardContent> 
    </Card>
  );
}
export default OfferCard;
