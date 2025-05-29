import { Box, Container, Grid, Typography } from "@mui/material";
import banner from "../../../assets/our-families-banner.png";

export default function OurFamilies() {
  return (
    <Box
      pt={6}
      pb={6}
      sx={{
        background: "linear-gradient(#E7F0FF, #E8F1FF)",
      }}
    >
      <Container>
        <Grid container alignItems="center" spacing={{ xs: 4, md: 10 }}>
          <Grid item xs={12} md={6}>
            <Typography
              fontWeight={600}
              color="primary.main"
              fontSize={{ xs: 14, md: 16 }}
              mb={1}
            >
              CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
            </Typography>

            <Typography variant="h2" fontWeight={700} mb={2}>
              Our Families
            </Typography>

            <Typography
              color="#77829D"
              fontSize={{ xs: 14, md: 16 }}
              lineHeight={1.8}
            >
              We will work with you to develop individualised care plans,
              including management of chronic diseases. If we cannot assist, we
              can provide referrals or advice about the type of practitioner you
              require. We treat all enquiries sensitively and in the strictest
              confidence.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={banner}
              alt="Our Families"
              width={1}
              height="auto"
              sx={{ borderRadius: 2 }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
