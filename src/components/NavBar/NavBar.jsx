import {
  Box,
  Container,
  Button,
  Stack,
  Typography,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../assets/logo.png";

export default function NavBar() {
  const isMobile = useMediaQuery("(max-width:900px)");
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { text: "Find Doctors", to: "#" },
    { text: "Hospitals", to: "/search" },
    { text: "Medicines", to: "#" },
    { text: "Surgeries", to: "#" },
    { text: "Software for Provider", to: "#" },
    { text: "Facilities", to: "#" },
  ];

  return (
    <header>
      {/* Top Banner */}
      <Box p={1} bgcolor="primary.main">
        <Typography fontSize={14} textAlign="center" color="#fff">
          The health and well-being of our patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness.
        </Typography>
      </Box>

      {/* Main Nav */}
      <Container maxWidth="xl">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          py={2}
        >
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="Logo" height={27} />
          </Link>

          {/* Desktop Nav Links */}
          {!isMobile && (
            <Stack direction="row" spacing={4} alignItems="center">
              {navLinks.map((link, idx) => (
                <Link key={idx} to={link.to} style={{ textDecoration: "none" }}>
                  <Typography color="textPrimary">{link.text}</Typography>
                </Link>
              ))}
              <Link to="/my-bookings" style={{ textDecoration: "none" }}>
                <Button variant="contained" disableElevation>
                  My Bookings
                </Button>
              </Link>
            </Stack>
          )}

          {/* Mobile Menu Icon */}
          {isMobile && (
            <IconButton onClick={() => setMenuOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Stack>
      </Container>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={menuOpen} onClose={() => setMenuOpen(false)}>
        <Box sx={{ width: 280, p: 2, position: "relative" }}>
          <IconButton
            onClick={() => setMenuOpen(false)}
            sx={{ position: "absolute", top: 8, right: 8 }}
          >
            <CloseIcon />
          </IconButton>

          <List sx={{ mt: 5 }}>
            {navLinks.map((link, idx) => (
              <ListItem
                button
                component={Link}
                to={link.to}
                key={idx}
                onClick={() => setMenuOpen(false)}
              >
                <ListItemText primary={link.text} />
              </ListItem>
            ))}
            <ListItem
              button
              component={Link}
              to="/my-bookings"
              onClick={() => setMenuOpen(false)}
            >
              <Button variant="contained" fullWidth>
                My Bookings
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </header>
  );
}
