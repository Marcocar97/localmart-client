import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import service from "../../service/service.config";
import { AuthContext } from "../context/auth.context";
import { Container, TextField, Button, Typography, Box, Snackbar, Alert, Grid } from "@mui/material";

function BusinessProfilePage() {

  const [businessName, setBusinessName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [logo, setLogo] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const navigate = useNavigate();

  const { logout } = useContext(AuthContext);

  useEffect(() => {

    const businessProfile = async () => {
      try {
        const response = await service.get("/auth/business-profile");
        const business = response.data;
        setBusinessName(business.businessName);
        setDescription(business.description);
        setCategory(business.category);
        setLocation(business.location);
        setLogo(business.logo);
        setEmail(business.email);
      } catch (error) {
        console.error("Error fetching business data", error);
        setError("Failed to fetch business data");
        setOpenSnackbar(true);
      }
    };

    businessProfile();

  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await service.put("/auth/business-profile", {
        businessName,
        description,
        category,
        location,
        logo,
        email,
      });

      alert("Business profile updated successfully!");
      navigate("/my-offers");
    } catch (error) {
      console.error("Error updating business profile", error);
      setError("Failed to update business profile");
      setOpenSnackbar(true);
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete your account?")) {
      try {
        await service.delete("/auth/business-profile");
        alert("Business account deleted successfully!");
        logout();
        navigate("/");
      } catch (error) {
        console.error("Error deleting business account", error);
        setError("Failed to delete business account");
        setOpenSnackbar(true);
      }
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);

  };

  return (
    <Container maxWidth="md">
       
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
         
        <Alert onClose={handleCloseSnackbar} severity="error">
           
          {error}
        </Alert>
      </Snackbar>
      <Typography variant="h4" gutterBottom>
         
        Editar la informacion de mi negocio
      </Typography>
      <Box component="form" onSubmit={handleUpdate} sx={{ mt: 2 }}>
         
        <Grid container spacing={2}>
           
          <Grid item xs={12} sm={6}>
             
            <TextField
              label="Business Name"
              variant="outlined"
              fullWidth
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
             
            <TextField
              label="Category"
              variant="outlined"
              fullWidth
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
             
            <TextField
              label="Location"
              variant="outlined"
              fullWidth
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
             
            <TextField
              label="Description"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
             
          </Grid>
          <Grid item xs={12}>
             
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
             
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mr: 2 }}
            >
               
              Actualizar mis informacion
            </Button>
            <Button
              type="button"
              variant="outlined"
              color="error"
              onClick={handleDelete}
            >
               
              Borrar mi cuenta
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
export default BusinessProfilePage;