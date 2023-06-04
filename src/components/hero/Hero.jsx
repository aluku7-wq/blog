import React from "react";
import { Container } from "./Hero.styled";
import Image from "next/image";

const Hero = () => {
  return (
    <Container>
      <div className="overlay">
        <div className="wrapper">
          <div className="image_wrapper">
            <Image
              src={"/images/hero1.png"}
              alt=""
              width="0"
              height="0"
              sizes="100vw"
            />
          </div>
          <div className="text">
            <h1 className="site_name">Welcome to Alukublog</h1>
            <h2 className="title">
              Discover the Latest Trends and Insights in Technology,
              Electronics, Fashion, and Sports
            </h2>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
