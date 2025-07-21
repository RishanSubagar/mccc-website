import { Button, Container, Typography, Grid } from "@mui/material";
import "./App.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import Carousel from "./components/carousel";
import { EmblaOptionsType } from "embla-carousel";

// import {
//   APIProvider
// } from "@vis.gl/react-google-maps";
import ContactForm from "./components/contactform";

import img1 from "./imgs/img1.png";
import img2 from "./imgs/img2.png";
import img3 from "./imgs/img3.png";
import img4 from "./imgs/img4.png";
import img5 from "./imgs/img5.png";
import about_img from "./imgs/about_img.jpg";
import body_img from "./imgs/body_img.jpg";

const sections = ["About", "Contact"];

function App() {
  const OPTIONS: EmblaOptionsType = {};

  const SLIDES = [img1, img2, img3, img4, img5];

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleMenuItemClick = (section: string) => {
    // Close the menu
    setAnchorElNav(null);
    // Scroll to the corresponding section
    const element = document.getElementById(section.toLowerCase());
    console.log(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <AppBar position="sticky" sx={{ backgroundColor: "white" }}>
        <Container maxWidth="xl" disableGutters sx={{ px: { xs: 2, md: 2 } }}>
          <Toolbar disableGutters>
            {/* Logo for larger screens */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href=""
              sx={{
                display: { xs: "none", md: "flex" },
                fontWeight: 510,
                color: "black",
                letterSpacing: ".04rem",
                textDecoration: "none",
                ml: { xl: -9 },
              }}
            >
              M C CENTERLESS GRINDING LTD
            </Typography>

            {/* LOGO */}
            {/* <Box
              component="a"
              href="/"
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                mr: 2,
                textDecoration: "none",
              }}
            >
              <Box
                component="img"
                src={logo}
                alt="M C Centerless Grinding Ltd"
                sx={{ height: 48 }} // Adjust height as needed
              />
            </Box> */}

            {/* Menu items for larger screens */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
              {sections.map((section) => (
                <Button
                  key={section}
                  onClick={() => handleMenuItemClick(section)}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                  }}
                >
                  {section}
                </Button>
              ))}
            </Box>
            {/* Logo for smaller screens */}
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
                fontSize: { xs: "0.8rem", sm: "1rem" }, // Adjust font size for smaller screens
              }}
            >
              M C Centerless Grinding Ltd
            </Typography>
            {/* Mobile Menu Button (only for small screens) */}
            <Box sx={{ display: { xs: "flex", md: "none" }, ml: "auto" }}>
              <IconButton
                size="large"
                aria-label="open menu"
                onClick={handleOpenNavMenu}
                sx={{ color: "black", ml: "auto" }}
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
                  <MenuItem
                    key={section}
                    onClick={() => handleMenuItemClick(section)}
                  >
                    <Typography sx={{ textAlign: "center" }}>
                      {section}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Container
        maxWidth={false}
        disableGutters
        sx={{ padding: 0, overflow: "hidden" }}
      >
        <section id="display" style={{ position: "relative", width: "100%" }}>
          {/* Text Content */}
          <Box
            sx={{
              position: "absolute", // Position the text on top of the slideshow
              top: "50%", // Center vertically
              left: "50%", // Center horizontally
              transform: "translate(-50%, -50%)", // Adjust for centering
              zIndex: 2,
              textAlign: "center",
              color: "white",
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Precision in Every Detail
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Your Trusted Partner in Centerless Grinding
            </Typography>
          </Box>
          {/* Opaque Layer */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.35)",
              zIndex: 1,
              pointerEvents: "none", // Allow interaction with underlying elements
            }}
          />
          {/* Slideshow */}
          <Box
            sx={{
              width: "100%", // Full width of the page
              height: "600px", // Set the height of the slideshow
              overflow: "hidden",
              zIndex: 0,
            }}
          >
            <Carousel slides={SLIDES} options={OPTIONS} />
          </Box>
        </section>
        {/* Services Section */}
        <section id="services">
          <Box
            sx={{
              width: "100%",
              backgroundColor: "whitesmoke",
              paddingTop: 8,
              paddingBottom: 16,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Container maxWidth="lg" sx={{ height: "auto" }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  textAlign: "center",
                  mb: 4,
                }}
              >
                Solutions for Every Industry
              </Typography>
              <Grid
                container
                spacing={4}
                rowSpacing={10}
                direction="row"
                sx={{
                  justifyContent: "center",
                  alignItems: "stretch",
                  margin: 0,
                }}
              >
                {/* Service 1 */}
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                  <Box
                    sx={{
                      backgroundColor: "white",
                      p: 4,
                      borderRadius: 2,
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                      height: "100%",
                      maxWidth: "300px",
                      margin: "0 auto", // Center the box horizontally
                      textAlign: "center",
                    }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                      Industries We Serve
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      We work with clients from a variety of industries that
                      require finished parts with tight tolerances.
                    </Typography>
                  </Box>
                </Grid>
                {/* Service 2 */}
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                  <Box
                    sx={{
                      backgroundColor: "white",
                      p: 4,
                      borderRadius: 2,
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                      height: "100%",
                      maxWidth: "300px",
                      margin: "0 auto",
                      textAlign: "center",
                    }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                      Precision Grinding
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      We specialize in high-precision grinding to meet demanding
                      specifications. Our services are also available to support
                      other machine shops and steel warehouses.
                    </Typography>
                  </Box>
                </Grid>
                {/* Service 3 */}
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                  <Box
                    sx={{
                      backgroundColor: "white",
                      p: 4,
                      borderRadius: 2,
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                      height: "100%",
                      maxWidth: "300px",
                      margin: "0 auto",
                      textAlign: "center",
                    }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                      More Capabilities
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Range of additional capabilities, including Bar Grinding,
                      Plunge Grinding, and Surface Grinding.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </section>
      </Container>
      <section id="about">
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Grid container spacing={4} alignItems="center">
            {/* Photo on the left */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component="img"
                src={about_img}
                alt="Final Products"
                sx={{
                  width: "100%",
                  borderRadius: 2,
                  boxShadow: 2,
                  objectFit: "cover",
                  maxHeight: 400,
                }}
              />
            </Grid>
            {/* Text on the right */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ px: { xs: 0, md: 4 } }}>
                <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
                  About Our Company
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  M C Centerless Grinding Ltd has been providing precision
                  grinding services for decades. Our experienced team and
                  advanced equipment ensure the highest quality for every
                  project. We serve a wide range of industries and pride
                  ourselves on our attention to detail and customer
                  satisfaction.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
      {/* About Section */}
      <section id="body">
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Grid
            container
            spacing={4}
            alignItems="center"
            justifyContent="center"
          >
            {/* Text on the left */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  px: { xs: 2, md: 4 },
                  textAlign: "center",
                }}
              >
                <Typography variant="h5" sx={{ mb: 2, fontStyle: "italic" }}>
                  Dedicated to Precision, Driven by Excellence
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  M C Centreless Grinding Ltd is driven by precision,
                  craftsmanship, and a relentless pursuit of excellence. In our
                  work, attention to detail is non-negotiable, and continuous
                  improvement is a way of life. We believe in earning trust
                  through consistency, delivering high-quality results that
                  exceed expectations. By collaborating closely with clients,
                  suppliers, and team members, we ensure that every project
                  contributes to shared success and long-term partnerships built
                  on reliability and respect.
                </Typography>
              </Box>
            </Grid>
            {/* Image on the right */}
            <Grid
              size={{ xs: 12, md: 6 }}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                component="img"
                src={body_img}
                alt="Grinding Process"
                sx={{
                  width: "100%",
                  maxWidth: 550,
                  borderRadius: 2,
                  boxShadow: 2,
                  objectFit: "cover",
                  maxHeight: 400,
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </section>
      <Box sx={{ width: "100%", backgroundColor: "white", py: 6 }}>
        <Container
          sx={{
            maxWidth: "lg",
          }}
        >
          <section id="contact">
            <ContactForm />
          </section>
        </Container>
      </Box>
      {/* <APIProvider>
        <section id="contact"></section>
      </APIProvider> */}
      <footer style={{ padding: "20px 0" }}>
        <Typography variant="body2">
          1050 Ellesmere Rd. Unit#5 Scarborough, ON M1H 2VA CANADA Phone (416)
          285-9706
        </Typography>
      </footer>
    </div>
  );
}

export default App;
