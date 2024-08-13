import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

function OfferCardBusiness({ offer }) {

  return (
    <Card>
    
      {offer.image && (
        <CardMedia 
        component="img"
        height="250"
        image={offer.image}
        alt={offer.offerName}
      
      />)}
      <CardContent>
      <Typography gutterBottom variant="h3" component="div">
           
           {offer.offerName} 
         </Typography> 

         <Typography variant="body2" color="text.secondary">
        <Typography gutterBottom variant="h5" component="div">
           
           Descripcion de la oferta:
         </Typography> 
         {offer.description} 
        </Typography> 

      <p><b>Validez de la oferta: </b>{offer.availability}</p>
      <p><b>Horarios: </b>{offer.schedules}</p>
      </CardContent>
    </Card>
  );
}

export default OfferCardBusiness;