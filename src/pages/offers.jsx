import React, { useEffect, useState } from "react";
import service from "../../service/service.config";
import OfferCard from "../components/OfferCard";
import { Grid, Paper, Typography, TextField } from "@mui/material";

function UserOffers() {

  const [offers, setOffers] = useState([]);
  const [filteredOffers, setFilteredOffers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOffer, setSelectedOffer] = useState(null);

  useEffect(() => {
    allOffers();
  }, []);

  const allOffers = async () => {
    try {
      const response = await service.get("/auth/user-offers");
      setOffers(response.data);
      setFilteredOffers(response.data);
    } catch (error) {
      console.error("Error fetching offers:", error.message);
    }
  };

  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchTerm(searchValue);
    const filtered = offers.filter(
      (offer) =>
        offer.offerName.toLowerCase().includes(searchValue) ||
        offer.description.toLowerCase().includes(searchValue)
    );
    setFilteredOffers(filtered);
  };
  
  const handleSelectOffer = (offer) => {
    setSelectedOffer(offer);
  };


  return (
    <Grid container spacing={2} style={{ height: "100vh" }}>

      {/* Panel izquierdo: Lista de ofertas */}
      <Grid
        item
        xs={3}
        style={{ overflowY: "scroll", backgroundColor: "#f5f5f5", height: "100%" }}
      >

        <Typography variant="h6" sx={{ padding: 2 }}>
          All Offers
        </Typography>

        {/* Search Bar */}
        <TextField
          label="Search Offers"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={handleSearch}
          sx={{ marginBottom: 2, padding: "0 16px" }}
        />

        {/* Lista de ofertas filtradas */}{" "}
        {filteredOffers.map((offer) => (
          <Paper
            key={offer._id}
            sx={{ margin: 2, padding: 2, cursor: "pointer" }}
            onClick={() => handleSelectOffer(offer)}
          >
            
            <Typography variant="subtitle1">{offer.offerName}</Typography>{" "}
            <Typography variant="body2">{offer.description}</Typography>{" "}
          </Paper>
        ))}
      </Grid>

      {/* Panel derecho: Detalles de la oferta seleccionada */}{" "}
      <Grid item xs={9} style={{ padding: "16px", height:"100%" }}>
        
        {selectedOffer ? (
          <div
            style={{ height: "100%", display: "flex", flexDirection: "column", overflow: "auto" }}
          >
        
            <OfferCard offer={selectedOffer} />
          </div>
        ) : (
          <Typography variant="h6" color="textSecondary">
            
            Please select an offer to view details.
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};
export default UserOffers;
