import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, MenuItem, Select, FormControl, InputLabel, Container, Box, Typography } from "@mui/material";
import service from "../../../service/service.config";
import { AuthContext } from "../../context/auth.context";

function Login() {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("user");
  const [errorMessage, setErrorMessage] = useState(null)

  const { authenticateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await service.post("/auth/login", {
        email,
        password,
        userType,
      });
      localStorage.setItem("authToken", response.data.authToken);
      await authenticateUser();
      if (userType === "business") {
        navigate("/my-offers");
      } else {
        navigate("/offers");
      }
    } catch (error) {
      console.error(error);
      if(error.response && error.response.status === 400){
        setErrorMessage(error.response.data.errorMessage)
      } else {
        navigate("/")
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
          p: 3,
          borderRadius: 1,
          boxShadow: 3,
        }}
      >
        
        <Typography variant="h5">Iniciar Secion</Typography>  
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ mt: 3, width: "100%" }}
        >
          
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />  
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />  
          <FormControl fullWidth margin="normal">
            
            <InputLabel id="userType-label">User Type</InputLabel>  
            <Select
              labelId="userType-label"
              id="userType"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              label="User Type"
            >
              
              <MenuItem value="user">User</MenuItem>  
              <MenuItem value="business">Business</MenuItem>  
            </Select>  
          </FormControl>  
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            
            Login  
          </Button>  
          {errorMessage && <p>{errorMessage}</p>}
        </Box>  
      </Box>  
    </Container>
  );
};
export default Login;
