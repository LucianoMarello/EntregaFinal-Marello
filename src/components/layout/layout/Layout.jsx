import { Outlet } from "react-router-dom";
import { Navbar } from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { Box, Grid } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

const Layout = () => {
  const { logged } = useContext(AuthContext);
  logged();
  return (
    <Box
      sx={{
        backgroundColor: "beige",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <Grid sx={{ flex: 1, minHeight: "60vh" }}>
        <Outlet />
      </Grid>
      <Footer />
    </Box>
  );
};

export default Layout;
