import { Box, Container, Grid, Typography } from "@mui/material";
import BlogCard from "./BlogCard";

export default function Blogs() {
  return (
    <Box component="section" py={6} aria-labelledby="blogs-heading">
      <Container>
        <Typography
          id="blogs-heading"
          color="primary.main"
          fontWeight={600}
          textAlign="center"
          gutterBottom
        >
          Blog & News
        </Typography>
        <Typography
          textAlign="center"
          variant="h2"
          mb={4}
          component="h2"
          sx={{ fontWeight: 700 }}
        >
          Read Our Latest News
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <BlogCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <BlogCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <BlogCard />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
