/* eslint-disable @typescript-eslint/no-explicit-any */
import HomeBanner from "@/components/Home/HomeBanner";
import HomeCarousel from "@/components/Home/HomeCarousel";
import Subscribe from "@/components/Home/Subscribe";
import { Box, Button, Grid, ImageList, ImageListItem, Typography } from "@mui/material";

const itemData: any = [
  {
    img: "https://images.pexels.com/photos/1437618/pexels-photo-1437618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Image 1"
  },
  {
    img: "https://images.pexels.com/photos/3155276/pexels-photo-3155276.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Image 2"
  },
  {
    img: "https://statics.vinpearl.com/du-lich-vinh-Ha-Long-hinh-anh3_1625912082_1661247765.jpg",
    title: "Image 3"
  },
  {
    img: "https://images.pexels.com/photos/2340478/pexels-photo-2340478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Image 4"
  },
  {
    img: "https://images.pexels.com/photos/1850586/pexels-photo-1850586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Image 5"
  },
  {
    img: "https://images.pexels.com/photos/3626473/pexels-photo-3626473.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Image 6"
  },
  {
    img: "https://images.pexels.com/photos/749078/pexels-photo-749078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Image 7"
  }
];

const Home = () => {
  return (
    <Box className="w-full">
      <HomeBanner />

      <Box className="w-full flexbox-col">
        <Typography className="text-center lg:text-5xl md:text-4xl text-3xl font-semibold font-poppins mt-20">
          Our Popular Categories
        </Typography>

        <Grid container spacing={2} className="w-full flexbox-row font-poppins my-20">
          <Grid item xs={12} sm={6} md={4} lg={2} className="w-full flexbox-col">
            <Box className="box-border flexbox-col w-[200px] h-[200px] overflow-hidden border-solid border-4 rounded-xl border-red-300 bg-white">
              <img alt="Hotels" src="/HomeImages/Hotel.png" className="box-border w-[60px] object-cover object-center opacity-100" />
              <Typography className="font-semibold text-xl font-poppins mt-8">Hotels</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2} className="w-full flexbox-col">
            <Box className="box-border flexbox-col w-[200px] h-[200px] overflow-hidden border-solid border-4 rounded-xl border-green-300 bg-white">
              <img alt="Hotels" src="/HomeImages/Notification.png" className="box-border w-[60px] object-cover object-center opacity-100" />
              <Typography className="font-semibold text-xl font-poppins mt-8">Things to do</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2} className="w-full flexbox-col">
            <Box className="box-border flexbox-col w-[200px] h-[200px] overflow-hidden border-solid border-4 rounded-xl border-orange-300 bg-white">
              <img alt="Hotels" src="/HomeImages/Cafe.png" className="box-border w-[60px] object-cover object-center opacity-100" />
              <Typography className="font-semibold text-xl font-poppins mt-8">Restaurant</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={2} className="w-full flexbox-col">
            <Box className="box-border flexbox-col w-[200px] h-[200px] overflow-hidden border-solid border-4 rounded-xl border-purple-300 bg-white">
              <img alt="Hotels" src="/HomeImages/Booking.png" className="box-border w-[60px] object-cover object-center opacity-100" />
              <Typography className="font-semibold text-xl font-poppins mt-8">Easy Booking</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={2} className="w-full flexbox-col">
            <Box className="box-border flexbox-col w-[200px] h-[200px] overflow-hidden border-solid border-4 rounded-xl border-blue-300 bg-white">
              <img alt="Hotels" src="/HomeImages/Plane.png" className="box-border w-[60px] object-cover object-center opacity-100" />
              <Typography className="font-semibold text-xl font-poppins mt-8">Tours</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Video */}
      <Box className="relative flexbox-row sm:mb-40">
        <Box className="lg:w-[70%] md:w-[80%] w-[90%]">
          <video className="top-0 left-0 w-full h-full shadow-lg" autoPlay loop muted>
            <source
              src="https://videos.pexels.com/video-files/4010511/4010511-hd_1920_1080_25fps.mp4"
              type="video/mp4" />
          </video>
        </Box>
        <Box className="hidden absolute lg:bottom-[-20%] md:bottom-[-30%] bottom-[-40%] lg:w-[60%] md:w-[70%] w-[80%] lg:h-1/2 md:h-2/3 h-4/5 bg-white opacity-100 sm:flex flex-col md:flex-row justify-center items-center">
          <Box className="md:w-[30%] flexbox-row px-8 w-full">
            <Typography className="font-poppins font-semibold lg:text-4xl text-3xl mb-2">
              Take The Best Place
            </Typography>
          </Box>
          <Box className="hidden md:block lg:h-[70%] h-[80%] border-solid border-2 border-black rounded-xl"></Box>
          <Box className="w-[70%] flex flex-col justify-center items-end px-6">
            <Typography className="md:w-auto w-full font-poppins lg:text-xl text-lg text-justify">
              Plan a perfect getway in a place where the sun shines all year. Explore pristine beaches, enjoy relaxed activities, and pamper yourself at the many wellness retreats.
            </Typography>
            <Button className="bg-slate-500 hover:bg-slate-300 text-white font-poppins font-medium px-6 normal-case lg:text-xl text-lg mt-2 md:w-auto w-full">
              See More
            </Button>
          </Box>
        </Box>
      </Box>
      <Box className="sm:hidden flex justify-center items-center w-full my-20">
        <Box className="flexbox-col w-[90%]">
          <Typography className="font-poppins font-semibold text-3xl mb-2">
            Take The Best Place
          </Typography>
          <Typography className="w-full font-poppins text-lg text-center">
            Plan a perfect getway in a place where the sun shines all year. Explore pristine beaches, enjoy relaxed activities, and pamper yourself at the many wellness retreats.
          </Typography>
          <Button className="bg-slate-500 hover:bg-slate-300 text-white font-poppins font-medium px-6 normal-case text-lg mt-2 w-full">
            See More
          </Button>
        </Box>
      </Box>

      <Box className="my-20 w-full flexbox-row">
        <Box className="w-[70%] flexbox-col">
          <Typography className="text-center lg:text-5xl md:text-4xl text-3xl font-semibold font-poppins mt-20 mb-10">
            Most Popular Destinations
          </Typography>

          <ImageList variant="masonry" cols={3} gap={8}>
            {itemData.map((item: any) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                  className="rounded-lg"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Box>

      <HomeCarousel />

      <Subscribe />
    </Box>
  );
};

export default Home;