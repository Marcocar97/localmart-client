import React, { useState } from "react";
import service from "../../service/service.config";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Snackbar,
  Alert,
} from "@mui/material";

function OfferForm() {
  const [offerName, setOfferName] = useState("");
  const [description, setDescription] = useState("");
  const [availability, setAvailability] = useState("");
  const [schedules, setSchedules] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("offerName", offerName);
    formData.append("description", description);
    formData.append("availability", availability);
    formData.append("schedules", schedules);
    if (image) formData.append("image", image);
    try {
      const response = await service.post("/auth/business-offers", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response.data);
      navigate("/my-offers");
    } catch (error) {
      setError("Failed to create offer");
      setOpenSnackbar(true);
      console.error("Error creating offer:", error);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container component="main" maxWidth="xs">
       
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 8,
        }}
      >
         
        <Typography variant="h4" gutterBottom>
        </Typography> 
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }} noValidate>
           
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
            label="Describe tu oferta"
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
            label="horarios"
            value={schedules}
            onChange={(e) => setSchedules(e.target.value)}
          />
          <p>Sube una foto de tu oferta</p>
          <input
            type="file"
            style={{ margin: "16px 0", width: "100%" }}
            onChange={(e) => setImage(e.target.files[0])}
          /> 
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
             
            Submit 
          </Button> 
        </Box> 
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
        >
           
          <Alert onClose={handleCloseSnackbar} severity="error">
             
            {error} 
          </Alert> 
        </Snackbar> 
      </Box> 
    </Container>
  );
};
export default OfferForm;
