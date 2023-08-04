import { Outlet } from "react-router-dom";
import { Navbar } from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { Box } from "@mui/material";

const Layout = () => {
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
      <Box sx={{ flex: 1, minHeight: "60vh" }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
