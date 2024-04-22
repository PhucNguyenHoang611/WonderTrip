/* eslint-disable @typescript-eslint/no-explicit-any */
import { CalendarTodayOutlined, LocationOnOutlined, ReceiptLongOutlined, TravelExploreOutlined } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";

const HomeBanner = () => {
  return (
    <Box className="box-border w-full h-[940px] overflow-hidden font-poppins">
      <LazyLoadImage
        height={900}
        alt="HomeBanner"
        src="/HomeImages/HomeBanner.jpg"
        className="box-border absolute top-10 w-full h-full max-h-[900px] object-cover object-center overflow-hidden opacity-100"
        onError={(e: any) => {
          e.currentTarget.src =
            "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg";
        }}
      />

      <Box className="absolute top-40 w-full flexbox-row">
        <Box className="w-[50%] lg:ml-80 md:ml-56 flexbox-col">
          <Typography textAlign="left" noWrap className="font-poppins font-semibold lg:text-7xl md:text-6xl text-3xl text-gray-200 md:mb-4">
            Let's Make Your
          </Typography>
          <Typography textAlign="right" noWrap className="lg:ml-24 md:ml-10 font-poppins font-semibold lg:text-7xl md:text-6xl text-3xl text-gray-200">
            Dream Vacation
          </Typography>
        </Box>
      </Box>

      <Box className="absolute bottom-10 w-full flexbox-row">
        <Box className="bg-background-1 lg:w-[90%] md:w-[50%] sm:w-[60%] w-[80%] p-4 rounded-2xl flex flex-col lg:flex-row justify-around lg:items-center items-start">
          <Box className="flexbox-row m-2">
            <Box className="mr-2">
              <LocationOnOutlined fontSize="large" />
            </Box>
            <Box className="flexbox-col">
              <Typography textAlign="left" className="w-full font-poppins font-bold text-xl">Location</Typography>
              <Typography textAlign="left" className="w-full font-poppins">Where do you want to go ?</Typography>
            </Box>
          </Box>

          <Box className="flexbox-row m-2">
            <Box className="mr-2">
              <CalendarTodayOutlined fontSize="large" />
            </Box>
            <Box className="flexbox-col">
              <Typography textAlign="left" className="w-full font-poppins font-bold text-xl">Date</Typography>
              <Typography textAlign="left" className="w-full font-poppins">Choose date</Typography>
            </Box>
          </Box>

          <Box className="flexbox-row m-2">
            <Box className="mr-2">
              <ReceiptLongOutlined fontSize="large" />
            </Box>
            <Box className="flexbox-col">
              <Typography textAlign="left" className="w-full font-poppins font-bold text-xl">Pricing</Typography>
              <Typography textAlign="left" className="w-full font-poppins">Choose your budget</Typography>
            </Box>
          </Box>

          <Box className="flexbox-row m-2 lg:w-auto w-full">
            <Button className="font-poppins bg-gray-600 hover:bg-gray-400 rounded-3xl text-white text-xl normal-case px-8 py-4" startIcon={<TravelExploreOutlined />}>
              Explore Now
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeBanner;