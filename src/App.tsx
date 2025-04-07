import { Button, Container, Typography } from "@mui/material";
import "./App.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import Carousel from "./components/Carousel.tsx"; 
import { EmblaOptionsType } from 'embla-carousel'

import {
  APIProvider
} from "@vis.gl/react-google-maps";


const sections = ["About", "Contact"];

function App() {
  const OPTIONS: EmblaOptionsType = {}
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div className="App">
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* LOGO for larger screens */}
            <Typography
                variant="h6"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".04rem",
                  color: "black",
                  textDecoration: "none",
                }}
            >
              M C Centerless Grinding Ltd
            </Typography>
            {/* Menu items for larger screens */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "flex-end" }}>
              {sections.map((section) => (
                <Button
                  key={section}
                  onClick={handleCloseNavMenu}
                  sx={{ 
                    my: 2, color: "black", 
                    display: "block", 
                  }}
                >
                  {section}
                </Button>
              ))}
            </Box>
            {/* LOGO for smaller screens */}
            <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "black",
                  textDecoration: "none",
                }}
            >
              M C Centerless Grinding Ltd
            </Typography>
            {/* Mobile Menu Button (only for small screens) */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="open menu"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                {sections.map((section) => (
                  <MenuItem key={section} onClick={handleCloseNavMenu}>
                    <Typography sx={{ textAlign: "center" }}>{section}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Container>
        <section id="display">
          <Typography variant="h4" sx={{ mt: 4 }}>
            Precision in Every Detail
          </Typography>
          <Carousel slides={SLIDES} options={OPTIONS} />
        </section>
        <section id="about">
          <Typography variant="h4" sx={{ mt: 4 }}>
            Dedicated to Precision, Driven by Excellence
          </Typography>
          <p>We are driven by precision, craftsmanship, and a relentless pursuit of excellence. In our work, attention to detail is non-negotiable, and continuous improvement is a way of life. We believe in earning trust through consistency, delivering high-quality results that exceed expectations. By collaborating closely with clients, suppliers, and team members, we ensure that every project contributes to shared success and long-term partnerships built on reliability and respect.</p>
        </section>
        {/* <APIProvider>
          <section id="contact"></section>
        </APIProvider> */}
      </Container>
    </div>
  );
}

export default App;
