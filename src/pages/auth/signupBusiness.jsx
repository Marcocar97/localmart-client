import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../../../service/service.config";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Input,
  MenuItem
} from "@mui/material";

function SignupBusinessPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [logo, setLogo] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("businessName", businessName);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("location", location);

    if (logo) formData.append("logo", logo);

    try {
      await service.post("/auth/signup/business", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      navigate("/login");
    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 400) {
        setErrorMessage(error.response.data.errorMessage);
      } else {
        setErrorMessage("An error occurred during signup.");
      }
    }
  };
  const categories = [ "Restaurantes y Comida", "Compras y Retail", "Salud y Belleza", "Servicios Profesionales", "Entretenimiento y Ocio", "Hogar y Jardín", "Automotriz", "Educación y Formación", "Turismo y Viajes", "Servicios para el Hogar", "Arte y Cultura" ];  

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
           
          Registrar mi negocio 
        </Typography> 
        <Box component="form" onSubmit={handleSignup} sx={{ mt: 3 }}>
           
          <TextField
            margin="normal"
            fullWidth
            label="Nombre de tu negocio"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            required
          /> 
          <TextField
            margin="normal"
            fullWidth
            label="Describe tu negocio"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            multiline
            rows={3}
            required
          /> 
         <TextField margin="normal" fullWidth label="Categoría" select value={category} onChange={(e) => setCategory(e.target.value)} required > {categories.map((cat) => ( <MenuItem key={cat} value={cat}> {cat} </MenuItem> ))} </TextField>

          <TextField
            margin="normal"
            fullWidth
            label="Ubicacion de tu negocio"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          /> 
          <p>Agrega el logo de tu negocio</p>
          <Input
            type="file"
            fullWidth
            sx={{ mb: 2 }}
            onChange={(e) => setLogo(e.target.files[0])}
          /> 
          <TextField
            margin="normal"
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          /> 
          <TextField
            margin="normal"
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          /> 
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
             
            Registrar 
          </Button> 
          {errorMessage && (
            <Typography color="error">{errorMessage}</Typography>
          )} 
        </Box> 
      </Box> 
    </Container>
  );
};
export default SignupBusinessPage;
