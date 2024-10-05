"use client";

import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";


const Services = () => {
  const [widht, setwidth] = useState(0);
 
  const services = [
    {
      title: "Search Engine Optimization (SEO)",
      description:
        "Enhance your online visibility & drive organic traffic with our advanced SEO techniques. We optimize your website to rank higher.",
      image: "/images/services/img1.webp",
      bgColor: "#1C2833", // Dark Slate
    },
    {
      title: "Pay-Per-Click (PPC) Advertising",
      description:
        "Reach your audience instantly and drive qualified leads with targeted PPC campaigns. Our experts craft compelling ad copy and optimize.",
      image: "/images/services/img2.webp",
      bgColor: "#5B2C6F", // Dark Purple
    },
    {
      title: "Social Media Marketing",
      description:
        "Build a strong brand presence and engage with your audience on social media platforms. We create strategic social media campaigns to boost brand.",
      image: "/images/services/img3.webp",
      bgColor: "#145A32", // Dark Green
    },
    {
      title: "Website Design and Development",
      description:
        "Make a lasting impression with a professionally designed and user-friendly website. Our web design and development services ensure a standout online presence.",
      image: "/images/services/img5.webp",
      bgColor: "#1C2833", // Dark Slate
    },
    {
      title: "Content Marketing Services",
      description:
        "Focus on creating, distributing, and promoting valuable content to engage target audiences, enhance brand awareness, and drive traffic.",
      image: "/images/services/img6.webp",
      bgColor: "#5B2C6F", // Dark Purple
    },
    {
      title: "Local SEO Services",
      description:
        "Help businesses optimize their online presence to attract more customers from relevant local searches.",
      image: "/images/services/img7.webp",
      bgColor: "#145A32", // Dark Green
    },
  ];
  
  
  
  return (
    <section className="py-5 lg:py-12 px-4 sm:px-6 lg:px-10 xl:px-20 bg-gray-100 overflow-hidden">
      <div className="text-center mb-8 lg:mb-12">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
          Our Premium Digital Marketing Services
          <br className="hidden lg:block" />
          To Elevate Your Business
        </h2>
        <p className="text-sm md:text-base lg:text-lg text-gray-600 mt-3 lg:mt-4">
          Explore our top-notch services designed to enhance your online
          presence and drive success.
        </p>
      </div>

      {/* mobile Or Tablet */}

      <div className="lg:hidden">
        <Swiper
          loop={true}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1, // For small screens (mobile)
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2, // For medium screens (small tablets)
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3, // For tablets
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4, // For larger screens
              spaceBetween: 30,
            },
            1440: {
              slidesPerView: 5, // For very large screens
              spaceBetween: 40,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper "
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div
                className="boxCard p-6  h-[25rem] rounded-lg shadow-lg"
                style={{ backgroundColor: service.bgColor }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-white">{service.description} </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* extraLarge screen */}
      <div className="hidden lg:block">
        <div className="flex justify-center">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setwidth(index)}
              onMouseLeave={() => setwidth(index)}
              onClick={() => setwidth(index)}
              className={` ${
                widht == index ? "lg:w-[400px] xl:w-[500px]" : "w-[80px]"
              } cursor-pointer overflow-hidden rounded-2xl lg:h-[20rem] xl:h-[25rem] mx-3  duration-500  relative`}
            >
              <div
                className={`${
                  widht == index ? "opacity-100" : "opacity-0"
                } bg-gray-600 absolute text-white overflow-hidden   bottom-0  flex items-end gap-4`}
              >
                <div>
                  <h5
                    style={{ backgroundColor: service.bgColor }}
                    className="w-[60px] h-[60px] flex justify-center items-center rounded-full"
                  >
                    {index + 1}
                  </h5>
                </div>
                <div>
                  <h4 className="font-bold text-lg">{service.title}</h4>
                  <p className="w-[80%]  text-justify  ">
                    {service.description}
                  </p>
                </div>
              </div>
              {}
              <h3
                className={`${
                  index == widht ? "opacity-0" : "opacity-100"
                } absolute  left-2 bottom-0 w-[60px] h-[60px] flex justify-center items-center rounded-full text-white`}
                style={{ background: service.bgColor }}
              >
                {index + 1}
              </h3>
              <img
                src={service.image}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
