import { Box, Button, Container, InputBase, Typography } from "@mui/material";

const Subscribe = () => {
  return (
    <Container className="bg-slate-500 overflow-hidden p-4 mb-20">
      <Box className="flex lg:flex-row flex-col justify-center items-center">
        <Box className="lg:w-[55%] w-full px-4 py-8">
          <Typography className="text-white font-medium text-xl font-poppins text-justify">
            Subscribe to get information, latest news and other interesting offers about WONDER TRIP Travels
          </Typography>
        </Box>
        <Box className="lg:w-[45%] w-full">
          <Box className="bg-white flex justify-between gap-4 items-center p-4">
            <InputBase
              className="w-full font-poppins"
              placeholder="Type your email here"
              inputProps={{ "aria-label": "email-input" }}
            />
            <Button className="bg-primary-1 hover:bg-primary-2 text-white font-poppins font-medium px-6 rounded-lg normal-case text-lg">
              Subscribe
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Subscribe;