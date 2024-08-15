import React, { useState } from "react";
import service from "../../service/service.config";
import { Container, Typography, TextField, Button, Box, Snackbar, Alert, Paper } from "@mui/material";

function ReservaVerificationPage() {

  const [confirmationNumber, setConfirmationNumber] = useState("");
  const [reservation, setReservation] = useState(null);
  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await service.get(
        `/auth/reservas/${confirmationNumber}`
      );
      setReservation(response.data);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMessage(error.response.data.errorMessage);
      } else {
        setError("Reservation not found");
      }
      setReservation(null);
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);

  };

  return (

    <Container maxWidth="sm">
       
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
         
        <Alert onClose={handleCloseSnackbar} severity="error">
           
          {errorMessage || error} 
        </Alert> 
      </Snackbar> 
      <Typography variant="h4" gutterBottom align="center">
         
        Verificar reserva 
      </Typography> 
      <Box
        component="form"
        onSubmit={handleSearch}
        sx={{
          mt: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
         
        <TextField
          label="Numero de confirmacion"
          variant="outlined"
          fullWidth
          value={confirmationNumber}
          onChange={(e) => setConfirmationNumber(e.target.value)}
          required
          sx={{ mb: 2 }}
        /> 
        <Button type="submit" variant="contained" color="primary">
           
          Buscar
        </Button> 
      </Box> 
      {reservation && (
        <Paper elevation={3} sx={{ mt: 4, p: 3 }}>
           
          <Typography variant="h6" gutterBottom>
             
            Detalles de la reserva 
          </Typography> 
          <Typography variant="body1" paragraph>
             
            <strong>Numero de confirmacion:</strong> 
            {reservation.confirmationNumber} 
          </Typography> 
          <Typography variant="body1" paragraph>
             
            <strong>Reserva creada el:</strong> 
            {new Date(reservation.createDate).toLocaleString()} 
          </Typography> 
          <Typography variant="h6" gutterBottom>
             
            Detalles de la oferta
          </Typography> 
          <Typography variant="body1" paragraph>
             
            <strong>Nombre de la oferta:</strong> {reservation.offer.offerName} 
          </Typography> 
          <Typography variant="h6" gutterBottom>
             
            Detalles del usuario
          </Typography> 
          <Typography variant="body1" paragraph>
             
            <strong>Nombre:</strong> {reservation.user.name} 
          </Typography> 
          <Typography variant="body1" paragraph>
             
            <strong>Email:</strong> {reservation.user.email} 
          </Typography> 
        </Paper>
      )} 
    </Container>
  );
}
export default ReservaVerificationPage;
