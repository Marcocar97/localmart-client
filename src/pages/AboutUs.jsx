import React from "react";
import { Container, Typography, Grid, Paper, Box } from "@mui/material";

function AboutUsPage() {

  return (

    <Container maxWidth="lg" sx={{ padding: "4rem 2rem" }}>
      
      <Typography variant="h2" gutterBottom sx={{ textAlign: "center", mb: 4 }}>
        
        Acerca de Nosotros 
      </Typography> 
      <Typography variant="h4" gutterBottom>
        
        Bienvenido a Localmart 
      </Typography> 
      <Typography variant="body1" paragraph>
        
        Localmart es una plataforma dinámica diseñada para conectar a los
        usuarios con ofertas publicadas por negocios locales. Nuestra misión es
        ayudar a los usuarios a descubrir ofertas y promociones increíbles
        mientras asistimos a los negocios en la adquisición de nuevos clientes. 
      </Typography> 
      <Typography variant="h5" gutterBottom>
        
        Nuestra Visión 
      </Typography> 
      <Typography variant="body1" paragraph>
        
        En Localmart, imaginamos una comunidad en la que los usuarios y los
        negocios crezcan juntos. Al proporcionar una plataforma fácil de usar
        para descubrir ofertas locales, nuestro objetivo es fomentar conexiones
        más sólidas y apoyar el crecimiento de pequeñas y medianas empresas. 
      </Typography> 
      <Grid container spacing={4} sx={{ mt: 4 }}>
        
        <Grid item xs={12} md={6}>
          
          <Paper sx={{ padding: "2rem", backgroundColor: "#f5f5f5" }}>
            
            <Typography variant="h6" gutterBottom>
              
              Para los Usuarios 
            </Typography> 
            <Typography variant="body1" paragraph>
              
              Como usuario, Localmart te ofrece una selección curada de ofertas
              y promociones de negocios cercanos a ti. Ya sea que estés buscando
              descuentos en restaurantes, compras o servicios, tenemos lo que
              necesitas. Nuestra plataforma facilita la búsqueda de las mejores
              ofertas y te mantiene conectado con los negocios locales. 
            </Typography> 
          </Paper> 
        </Grid> 
        <Grid item xs={12} md={6}>
          
          <Paper sx={{ padding: "2rem", backgroundColor: "#f5f5f5" }}>
            
            <Typography variant="h6" gutterBottom>
              
              Para los Negocios 
            </Typography> 
            <Typography variant="body1" paragraph>
              
              Para los negocios, Localmart ofrece una manera poderosa de llegar
              a nuevos clientes e incrementar tu visibilidad. Al listar tus
              ofertas en nuestra plataforma, puedes atraer más tráfico y
              conectar con una comunidad que está activamente buscando grandes
              ofertas. Únete hoy y empieza a hacer crecer tu base de clientes. 
            </Typography> 
          </Paper> 
        </Grid> 
      </Grid> 
      <Box sx={{ mt: 4, textAlign: "center" }}>
        
        <Typography variant="body2" color="text.secondary">
          
          Creado por Marcos Cardoza Sevilla 
        </Typography> 
        <Typography variant="body2" color="text.secondary">
          
          <a
            href="https://github.com/marcocar97"
            style={{ color: "#3f51b5", textDecoration: "none" }}
          >
            
            Visita nuestro GitHub 
          </a> 
        </Typography> 
      </Box> 
    </Container>
  );
}
export default AboutUsPage;
