import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import banner from "../../../assets/patientcaring.png";
import tick from "../../../assets/tick-blue.png";

export default function PatientCaring() {
  const benefits = [
    "Stay Updated About Your Health",
    "Check Your Results Online",
    "Manage Your Appointments",
  ];

  return (
    <Box py={6} sx={{ background: "linear-gradient(#E7F0FF, #E8F1FF)" }}>
      <Container>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={banner}
              alt="Caring for patients"
              width={1}
              sx={{ borderRadius: 2 }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography fontWeight={600} color="primary.main" mb={1}>
              HELPING PATIENTS FROM AROUND THE GLOBE!!
            </Typography>

            <Typography variant="h2" mb={2}>
              Patient{" "}
              <Box component="span" color="primary.main">
                Caring
              </Box>
            </Typography>

            <Typography
              color="#77829D"
              fontSize={{ xs: 14, md: 16 }}
              lineHeight={1.8}
              mb={2}
            >
              Our goal is to deliver quality of care in a courteous, respectful,
              and compassionate manner. We hope you will allow us to care for
              you and strive to be the first and best choice for healthcare.
            </Typography>

            <List disablePadding>
              {benefits.map((item) => (
                <ListItem key={item} disableGutters>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <Box
                      component="img"
                      src={tick}
                      alt="tick"
                      height={22}
                      width={22}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{
                      fontSize: { xs: 14, md: 18 },
                      fontWeight: 500,
                      color: "#1B3C74",
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
