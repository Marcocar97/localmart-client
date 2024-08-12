import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../../../service/service.config";
import { Container, Typography, TextField, Button, Box } from "@mui/material";

function SignupUserPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();

    try {
      await service.post("/auth/signup/user", { email, password, name });
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
           
          Registrarme como usuario 
        </Typography> 
        <Box component="form" onSubmit={handleSignup} sx={{ mt: 3 }}>
           
          <TextField
            margin="normal"
            fullWidth
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
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
             
            Sign Up 
          </Button> 
          {errorMessage && (
            <Typography color="error">{errorMessage}</Typography>
          )} 
        </Box> 
      </Box> 
    </Container>
  );
};
export default SignupUserPage;
