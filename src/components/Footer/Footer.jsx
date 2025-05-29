import { Box, Container, Grid, Stack, Typography } from "@mui/material";

import logo from "../../assets/logo.png";
import fb from "../../assets/fb.png";
import pinterest from "../../assets/pinterest.png";
import twitter from "../../assets/twitter.png";
import yt from "../../assets/yt.png";
import FooterLink from "./FooterLink";

const socialIcons = [
  { src: fb, alt: "Facebook" },
  { src: twitter, alt: "Twitter" },
  { src: yt, alt: "YouTube" },
  { src: pinterest, alt: "Pinterest" },
];

const companyLinks = [
  "About Us",
  "Our Pricing",
  "Our Gallery",
  "Appointment",
  "Privacy Policy",
];

const departmentLinks = [
  "Orthology",
  "Neurology",
  "Dental Care",
  "Opthalmology",
  "Cardiology",
];

export default function Footer() {
  return (
    <Box bgcolor="primary.secondary" pb={3} pt={6}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Logo & Social */}
          <Grid item xs={12} md={4.5}>
            <Stack
              alignItems="flex-start"
              justifyContent="space-between"
              height="100%"
            >
              <Box
                component="img"
                src={logo}
                alt="Medify Logo"
                height={36}
                mb={2}
              />
              <Stack direction="row" spacing={1.5}>
                {socialIcons.map(({ src, alt }) => (
                  <Box
                    key={alt}
                    component="img"
                    src={src}
                    alt={alt}
                    height={36}
                  />
                ))}
              </Stack>
            </Stack>
          </Grid>

          {/* Footer Links */}
          <Grid item xs={12} md={2.5}>
            <Stack spacing={2}>
              {companyLinks.map((text) => (
                <FooterLink key={text}>{text}</FooterLink>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={2.5}>
            <Stack spacing={2}>
              {departmentLinks.map((text) => (
                <FooterLink key={text}>{text}</FooterLink>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={2.5}>
            <Stack spacing={2}>
              {companyLinks.map((text) => (
                <FooterLink key={`footer-${text}`}>{text}</FooterLink>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Typography
          fontWeight={300}
          color="#fff"
          fontSize={14}
          pt={3}
          mt={5}
          borderTop="1px solid rgba(255,255,255,0.1)"
        >
          © 2023 Surya Nursing Home. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
}
