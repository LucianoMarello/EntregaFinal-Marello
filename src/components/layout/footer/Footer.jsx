import { Call, EmailOutlined, Instagram, WhatsApp } from "@mui/icons-material";
import "./Footer.css";
import { Box, Grid } from "@mui/material";

const Footer = () => {
  return (
    <Box className="footer">
      <h3>
        Copyright ADN Almacén Dietético Natural Rosario - 2023. Todos los
        derechos reservados.
      </h3>
      <Grid className="footerIcons">
        <a href="https://www.instagram.com/adnalmacendietetico/">
          <Instagram fontSize="large" />
        </a>
        <a href="https://web.whatsapp.com/">
          <WhatsApp fontSize="large" />
        </a>
        <a href="tel:+543411234567">
          <Call fontSize="large" />
        </a>
        <a href="https://mail.google.com/">
          <EmailOutlined fontSize="large" />
        </a>
      </Grid>
    </Box>
  );
};

export default Footer;
