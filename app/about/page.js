import React from 'react'
import AboutBanner from './BannerAbout'
import AboutSection from '../Components/AboutUs'
import Tailroad from '../Components/Tailroad'
import Counter from '../Components/Counter'
import Testimonials from '../Components/Testimonails'

const page = () => {
  return (
    <>
        <AboutBanner/>
        <AboutSection/>
        <Tailroad/>
        <Testimonials/>
        <Counter/>
    </>
  )
}

export default page
