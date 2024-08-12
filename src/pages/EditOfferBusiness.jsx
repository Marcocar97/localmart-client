import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import service from "../../service/service.config";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";

function EditOfferPage()  {
  const { offerId } = useParams();
  const navigate = useNavigate();
  const [offerName, setOfferName] = useState("");
  const [description, setDescription] = useState("");
  const [availability, setAvailability] = useState("");
  const [schedules, setSchedules] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    const offerDetails = async () => {
      try {
        const response = await service.get(`/auth/business-offers/${offerId}`);
        const offerData = response.data;
        setOfferName(offerData.offerName);
        setDescription(offerData.description);
        setAvailability(offerData.availability);
        setSchedules(offerData.schedules);
        setImage(offerData.image);
      } catch (error) {
        setError("Failed to fetch offer details");
        setOpenSnackbar(true);
        console.error(error);
      }
    };

    offerDetails();
  }, [offerId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedOffer = {
        offerName,
        description,
        availability,
        schedules,
        image,
      };
      await service.put(`/auth/business-offers/${offerId}`, updatedOffer);
      navigate("/my-offers");
    } catch (error) {
      setError("Failed to update offer");
      setOpenSnackbar(true);
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      await service.delete(`/auth/business-offers/${offerId}`);
      navigate("/my-offers");
    } catch (error) {
      setError("Failed to delete offer");
      setOpenSnackbar(true);
      console.error(error);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };
  
  return (
    <Container component="main" maxWidth="md">
       
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 8,
        }}
      >
         
        <Typography variant="h4" gutterBottom>
           
          Editar Oferta
        </Typography> 
        {error && (
          <Snackbar
            open={openSnackbar}
            autoHideDuration={6000}
            onClose={handleCloseSnackbar}
          >
             
            <Alert onClose={handleCloseSnackbar} severity="error">
               
              {error} 
            </Alert> 
          </Snackbar>
        )} 
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
           
          <TextField
            margin="normal"
            fullWidth
            label="Nombre de la oferta"
            value={offerName}
            onChange={(e) => setOfferName(e.target.value)}
            required
          /> 
          <TextField
            margin="normal"
            fullWidth
            label="Descripcion de la oferta"
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          /> 
          <TextField
            margin="normal"
            fullWidth
            label="Validez"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
          /> 
          <TextField
            margin="normal"
            fullWidth
            label="Horarios"
            value={schedules}
            onChange={(e) => setSchedules(e.target.value)}
          /> 
          <TextField
            margin="normal"
            fullWidth
            label="Imagen de la oferta"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          /> 
          <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
             
            <Button type="submit" variant="contained" color="primary">
               
              Actualizar Oferta 
            </Button> 
            <Button
              type="button"
              variant="outlined"
              color="error"
              onClick={handleDelete}
            >
               
              Borrar Oferta
            </Button> 
          </Box> 
        </Box> 
      </Box> 
    </Container>
  );
};
export default EditOfferPage;
