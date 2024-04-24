/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import Slider from "react-slick";

const ItemCard = ({ title, desc, imageUrl, scale }: any) => {
  return (
    <Card sx={{ maxWidth: 345, height: 500 }} className={`${scale ? "scale-100" : "scale-90"} transition duration-150 ease-in-out`}>
      <CardActionArea sx={{ height: "90%" }}>
        <CardMedia
          component="img"
          image={imageUrl}
          alt={title}
          sx={{ width: "100%", height: "75%", objectFit: "cover", objectPosition: "55%" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className="font-poppins font-semibold">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="font-poppins">
            {desc.length > 100 ? desc.substring(0, 100) + "..." : desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ height: "10%" }}>
        <Button size="small" color="primary" className="font-poppins font-semibold">
          Explore
        </Button>
      </CardActions>
    </Card>
  );
};

const sampleData = [
  {
    title: "Hanoi",
    desc: "Hanoi is the capital and most populous city of Vietnam.",
    imageUrl: "https://statics.vinpearl.com/du-lich-vinh-Ha-Long-hinh-anh3_1625912082_1661247765.jpg?w=248&fit=crop&auto=format"
  },
  {
    title: "Da Nang",
    desc: "Da Nang is the capital and most populous city of Vietnam.",
    imageUrl: "https://statics.vinpearl.com/du-lich-vinh-Ha-Long-hinh-anh3_1625912082_1661247765.jpg?w=248&fit=crop&auto=format"
  },
  {
    title: "Ho Chi Minh City",
    desc: "Ho Chi Minh City is the capital and most populous city of Vietnam.",
    imageUrl: "https://statics.vinpearl.com/du-lich-vinh-Ha-Long-hinh-anh3_1625912082_1661247765.jpg?w=248&fit=crop&auto=format"
  }
];

const HomeCarousel = () => {
  const [activeDot, setActiveDot] = useState(0);
  
  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    speed: 500,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    beforeChange: (_prev: number, next: number) => {
      setActiveDot(next);
    },
    appendDots: (dots: any) => (
      <Box>
        <ul className="flexbox-row gap-4">{dots}</ul>
      </Box>
    ),
    customPaging: (i: number) => (
      <Box
        className="w-[40px] cursor-pointer mx-2"
        sx={(i === activeDot) ? { borderBottom: "3px solid black" } : { borderBottom: "3px solid white" }}
      ></Box>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          appendDots: (dots: any) => (
            <Box>
              <ul className="flexbox-row gap-3">{dots}</ul>
            </Box>
          ),
          customPaging: (i: number) => (
            <Box
              className="w-[30px] cursor-pointer mx-2"
              sx={(i === activeDot) ? { borderBottom: "3px solid black" } : { borderBottom: "3px solid white" }}
            ></Box>
          )
        }
      }
    ]
  };

  return (
    <Box className="my-20 w-full flexbox-row">
      <Box className="lg:w-[50%] w-full flex flex-col justify-center">
        <Typography className="text-center lg:text-5xl md:text-4xl text-3xl font-semibold font-poppins mt-20 mb-10">
          Trip Packages
        </Typography>

        <Slider {...settings}>
          {sampleData.map((item: any, index: number) => (
            <Box className="lg:mb-8 mb-12">
              <ItemCard key={index} title={item.title} desc={item.desc} imageUrl={item.imageUrl}
                scale={
                  ((index === 0) && (activeDot === (sampleData.length - 1))) // First Item vs Last Item
                  || (index === (activeDot + 1))
                  ? true : false} />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default HomeCarousel;