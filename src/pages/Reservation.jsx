import React, { useState, useEffect } from "react";
import service from "../../service/service.config";
import ReservationCard from "../components/ReservationCard";
import {
  Container,
  Grid,
  Typography,
  Box,
  CircularProgress,
  Paper,
  Snackbar,
  Alert,
  Button,
} from "@mui/material";
function ReservationsPage() {
  const [reservations, setReservations] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await service.get("/auth/user-reservas");
        setReservations(response.data);
      } catch (error) {
        console.error("Error fetching reservations", error);
        setError("Failed to fetch reservations");
        setOpenSnackbar(true);
      } finally {
        setLoading(false);
      }
    };
    fetchReservations();
  }, []);
  const handleDelete = (reservationId) => {
    setReservations(reservations.filter((res) => res._id !== reservationId));
  };
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };
  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
       
      <Typography variant="h4" gutterBottom>
         
        Mis reservas 
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
      ) : error ? (
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
        >
           
          <Alert onClose={handleCloseSnackbar} severity="error">
             
            {error} 
          </Alert> 
        </Snackbar>
      ) : reservations.length > 0 ? (
        <Grid container spacing={3}>
           
          {reservations.map((reservation) => (
            <Grid item xs={12} sm={6} md={4} key={reservation._id}>
               
              <Paper
                elevation={3}
                sx={{ padding: 2, display: "flex", flexDirection: "column" }}
              >
                 
                <ReservationCard
                  reservation={reservation}
                  onDelete={handleDelete}
                /> 
              </Paper> 
            </Grid>
          ))} 
        </Grid>
      ) : (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="50vh"
        >
           
          <Typography variant="h6" color="textSecondary">
             
            No reservations found. 
          </Typography> 
        </Box>
      )} 
    </Container>
  );
}
export default ReservationsPage;
