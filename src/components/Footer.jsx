import React from "react";
import { Container, Grid, Typography, IconButton, Box, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 2,
        mt: "auto",
        backgroundColor: "primary.main",
        color: "white",

      }}
    >
       
      <Container maxWidth="lg" sx={{backgroundColor: "primary.main"}}>
         
        <Grid container spacing={4}>
           
          {/* Contact Section */} 
          <Grid item xs={12} sm={6} md={4}>
             
            <Typography variant="h6" gutterBottom>
               
              LOCALMART 
            </Typography> 
            <Typography variant="body1"> info@localmart.es </Typography> 
            <Box sx={{ mt: 2 }}>
               
              <IconButton
                color="inherit"
                href="https://facebook.com"
                aria-label="Facebook"
              >
                 
                <FacebookIcon /> 
              </IconButton> 
              <IconButton
                color="inherit"
                href="https://twitter.com"
                aria-label="Twitter"
              >
                 
                <TwitterIcon /> 
              </IconButton> 
              <IconButton
                color="inherit"
                href="https://instagram.com"
                aria-label="Instagram"
              >
                 
                <InstagramIcon /> 
              </IconButton> 
              <IconButton
                color="inherit"
                href="https://linkedin.com"
                aria-label="LinkedIn"
              >
                 
                <LinkedInIcon /> 
              </IconButton> 
            </Box> 
          </Grid> 
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom> Web creada por: </Typography>
            <Typography variant="body1"> Marcos Cardoza Sevilla </Typography> 
          </Grid> 
          <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" gutterBottom> Información Adicional </Typography> <Typography variant="body1"> <Link href="https://github.com/Marcocar97" color="inherit" underline="hover"> Mi GitHub </Link> </Typography>
          </Grid>
        </Grid> 
      </Container> 
    </Box>
  );
}
export default Footer;
