import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import service from "../../service/service.config";
import { AuthContext } from "../context/auth.context";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";

function UserProfilePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    const userProfile = async () => {
      try {
        const response = await service.get("/auth/user-profile");
        const user = response.data;
        setName(user.name);
        setEmail(user.email);
      } catch (error) {
        console.error("Error fetching user data", error);
        setError("Failed to fetch user data");
        setOpenSnackbar(true);
      }
    };
    userProfile();
  }, []);
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await service.put("/auth/user-profile", { name, email });
      setSuccessMessage("User profile updated successfully!");
      setOpenSnackbar(true);
      setTimeout(() => navigate("/offers"), 2000);
    } catch (error) {
      console.error("Error updating user profile", error);
      setError("Failed to update user profile");
      setOpenSnackbar(true);
    }
  };
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete your account?")) {
      try {
        await service.delete("/auth/user-profile");
        alert("User account deleted successfully!");
        logout();
        navigate("/");
      } catch (error) {
        console.error("Error deleting user account", error);
        setError("Failed to delete user account");
        setOpenSnackbar(true);
      }
    }
  };
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };
  return (
    <Container maxWidth="sm" sx={{ marginTop: 4 }}>
       
      <Typography variant="h4" gutterBottom>
         
        Editar mi perfil 
      </Typography> 
      <Box
        component="form"
        onSubmit={handleUpdate}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
         
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        /> 
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /> 
        <Button type="submit" variant="contained" color="primary">
           
          Actualizar datos 
        </Button> 
      </Box> 
      <Box sx={{ marginTop: 2 }}>
         
        <Button onClick={handleDelete} variant="outlined" color="error">
           
          Borrar mi cuenta 
        </Button> 
      </Box> 
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
         
        <Alert
          onClose={handleCloseSnackbar}
          severity={error ? "error" : "success"}
        >
           
          {error || successMessage} 
        </Alert> 
      </Snackbar> 
    </Container>
  );
}
export default UserProfilePage;
