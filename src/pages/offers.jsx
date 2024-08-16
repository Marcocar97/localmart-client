import React, { useState, useEffect } from "react";
import service from "../../service/service.config";
import OfferCard from "../components/OfferCard";
import {
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Box,
  Snackbar,
  Alert,
  MenuItem,
  Select,
  InputLabel,
  FormControl
} from "@mui/material";

function UserOffers() {
  const [offers, setOffers] = useState([]);
  const [filteredOffers, setFilteredOffers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [error, setError] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  // Define categories statically
  const categories = [
    "Restaurantes y Comida",
    "Compras y Retail",
    "Salud y Belleza",
    "Servicios Profesionales",
    "Entretenimiento y Ocio",
    "Hogar y Jardín",
    "Automotriz",
    "Educación y Formación",
    "Turismo y Viajes",
    "Servicios para el Hogar",
    "Arte y Cultura"
  ];

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              setError("El usuario ha denegado el permiso de ubicación.");
              break;
            case error.POSITION_UNAVAILABLE:
              setError("La ubicación no está disponible.");
              break;
            case error.TIMEOUT:
              setError("La solicitud de ubicación ha caducado.");
              break;
            case error.UNKNOWN_ERROR:
              setError("Ha ocurrido un error desconocido.");
              break;
            default:
              setError("Error desconocido.");
          }
          setOpenSnackbar(true);
        }
      );
    } else {
      setError("La geolocalización no es compatible con este navegador.");
      setOpenSnackbar(true);
    }

    const fetchOffers = async () => {
      try {
        const response = await service.get("/auth/user-offers");
        setOffers(response.data);
        setFilteredOffers(response.data);
      } catch (error) {
        setError("Failed to fetch offers");
        setOpenSnackbar(true);
        console.error("Error fetching offers:", error.message);
      }
    };
    fetchOffers();
  }, []);

  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchTerm(searchValue);
    filterOffers(searchValue, selectedCategory);
  };

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    filterOffers(searchTerm, category);
  };

  const filterOffers = (searchValue, category) => {
    const filtered = offers.filter(
      (offer) =>
        (offer.offerName.toLowerCase().includes(searchValue) ||
          offer.description.toLowerCase().includes(searchValue)) &&
        (category === "" || offer.category === category)
    );
    setFilteredOffers(filtered);
  };

  const handleSelectOffer = (offer) => {
    setSelectedOffer(offer);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container maxWidth="lg">
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="error">
          {error}
        </Alert>
      </Snackbar>
      <Grid
        container
        spacing={2}
        sx={{ marginTop: 2, height: "100vh", display: "flex" }}
      >
        {/* Lista de ofertas */}
        <Grid
          item
          xs={12}
          sm={4}
          md={3}
          sx={{
            overflowY: "auto",
            backgroundColor: "#f5f5f5",
            height: "100%",
            padding: 2,
            borderRight: "1px solid #ddd",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Todas las ofertas
          </Typography>
          <TextField
            label="Buscar ofertas"
            variant="outlined"
            fullWidth
            value={searchTerm}
            onChange={handleSearch}
            sx={{ marginBottom: 2 }}
          />
          <FormControl fullWidth sx={{ marginBottom: 2 }}>
            <InputLabel>Filtrar por categoría</InputLabel>
            <Select
              value={selectedCategory}
              onChange={handleCategoryChange}
              label="Filtrar por categoría"
            >
              <MenuItem value="">Todas</MenuItem>
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {filteredOffers.length > 0 ? (
            filteredOffers.map((offer) => (
              <Paper
                key={offer._id}
                sx={{
                  marginBottom: 2,
                  padding: 2,
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                  "&:hover": { backgroundColor: "#e0e0e0" },
                }}
                onClick={() => handleSelectOffer(offer)}
              >
                <Typography variant="subtitle1">
                  {offer.offerName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {offer.description.length > 60 ? offer.description.substring(0, 60) + "..." : offer.description}
                </Typography>
              </Paper>
            ))
          ) : (
            <Typography>No hay ofertas disponibles.</Typography>
          )}
        </Grid>
        {/* Detalles de la oferta seleccionada */}
        <Grid
          item
          xs={12}
          sm={8}
          md={9}
          sx={{
            padding: 2,
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          {selectedOffer ? (
            <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
              <OfferCard offer={selectedOffer} />
            </Box>
          ) : (
            <Typography variant="h6" color="text.secondary">
              Por favor selecciona una oferta para ver los detalles.
            </Typography>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default UserOffers;