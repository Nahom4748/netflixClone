import React from "react";
import HeroPage from "../HeroPage/HeroPage";
import NextWatch from "../NextWatch/NextWatch";
import Allmovies from "../RenderAllMovies/Allmovies";

function Hero() {
  return (
    <div>
      <HeroPage />
      <Allmovies />
    </div>
  );
}

export default Hero;
