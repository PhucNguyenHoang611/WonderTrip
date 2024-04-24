import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Container, Grid, IconButton, Link, Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer
      className="bg-primary-1 text-white py-8 font-poppins flexbox-row"
      style={{ backgroundImage: "url('/FooterImage.jpg')", height: "400px" }}
    >
      <Container>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item xs={12} md={12} className="mb-8">
            <Grid container justifyContent="center">
              <Link href="#" color="inherit" className="mx-6 no-underline hover:underline font-semibold text-lg">Home</Link>
              <Link href="#" color="inherit" className="mx-6 no-underline hover:underline font-semibold text-lg">About</Link>
              <Link href="#" color="inherit" className="mx-6 no-underline hover:underline font-semibold text-lg">Discovery</Link>
              <Link href="#" color="inherit" className="mx-6 no-underline hover:underline font-semibold text-lg">Story</Link>
              <Link href="#" color="inherit" className="mx-6 no-underline hover:underline font-semibold text-lg">Contact</Link>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography variant="h5" align="center" className="font-semibold font-poppins mb-10" gutterBottom>
              @2024 WONDER TRIP
            </Typography>
            <Grid container justifyContent="center">
              <IconButton href="#" className="bg-white rounded text-black hover:text-white"><Facebook /></IconButton>
              <IconButton href="#" className="bg-white rounded text-black hover:text-white mx-8"><Twitter /></IconButton>
              <IconButton href="#" className="bg-white rounded text-black hover:text-white"><Instagram /></IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;