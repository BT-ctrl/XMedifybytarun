import { Box, Container, Grid, Typography } from "@mui/material";
import faqBanner from "../../../assets/faqs-banner.jpg";
import CustomizedAccordions from "../../Accordion/Accordion";

export default function FAQs() {
  const faqs = [
    {
      question: "Why choose our medical for your family?",
      answer:
        "Our medical team provides compassionate, personalized care supported by years of experience and cutting-edge technology.",
    },
    {
      question: "Why we are different from others?",
      answer:
        "We focus on patient-centered service, 24/7 support, and have a proven track record of delivering quality outcomes.",
    },
    {
      question: "Trusted & experienced senior care & love",
      answer:
        "We specialize in senior care, offering a comforting and secure environment led by trusted professionals.",
    },
    {
      question: "How to get appointment for emergency cases?",
      answer:
        "Emergency appointments can be booked instantly via our mobile app or helpline available 24/7.",
    },
  ];

  return (
    <Box py={6}>
      <Container maxWidth="xl">
        <Typography
          color="primary.main"
          fontWeight={600}
          textAlign="center"
          mb={1}
        >
          Get Your Answer
        </Typography>
        <Typography textAlign="center" variant="h2" mb={4}>
          Frequently Asked Questions
        </Typography>

        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={faqBanner}
              width={1}
              height="auto"
              alt="FAQ banner"
              sx={{ borderRadius: 2 }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Box maxWidth={500} mx="auto">
              <CustomizedAccordions data={faqs} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
