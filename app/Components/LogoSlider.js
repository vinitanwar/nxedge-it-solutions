// LogoSlider.js
"use client";
import React from "react";
import SlickSlider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LogoSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <>
      <div className="hidden lg:block lg:px-20 overflow-hidden mx-auto logo-brand">
        <SlickSlider {...settings}>
          <div className="slide">
            <img src="/images/brand/lg1.webp" alt="" />
          </div>
          <div className="slide">
            <img src="/images/brand/lg2.webp" alt="" />
          </div>
          <div className="slide">
            <img src="/images/brand/lg3.webp" alt="" />
          </div>
          <div className="slide">
            <img src="/images/brand/lg4.webp" alt="" />
          </div>
          <div className="slide">
            <img src="/images/brand/lg5.webp" alt="" />
          </div>
          <div className="slide">
            <img src="/images/brand/lg6.webp" alt="" />
          </div>
          <div className="slide">
            <img src="/images/brand/lg7.webp" alt="" />
          </div>
          <div className="slide">
            <img src="/images/brand/lg8.webp" alt="" />
          </div>
        </SlickSlider>
      </div>
    </>
  );
};

export default LogoSlider;
