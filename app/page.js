import React from "react";
import AboutUs from "./Components/AboutUs";
import Services from "./Components/Services";
import ImagesCards from "./Components/ImagesCards";
import Counter from "./Components/Counter";
import LogoSlider from "./Components/LogoSlider";
import Blog from "./Components/Blog";
import Benfite from "./Components/Benfite";
import Banner from "./Components/Banner";
import WorkProcess from "./Components/WorkProcess";
import Testimonails from "./Components/Testimonails";
import FAQSection from "./Components/FaqSection";
const page = () => {
  return (
    <>
      <Banner />
      <AboutUs />
      <Services />
      {/* <Tailroad />*/}
      <ImagesCards />
      <WorkProcess />
      <Benfite />
      <Counter />
      <FAQSection />
      <Testimonails />
      <Blog />
      <LogoSlider />

    </>
  );
};

export default page;
