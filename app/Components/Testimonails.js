"use client"
import React from 'react';
import Slider from 'react-slick';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonialsData = [
  {
    quote: "Very good and insightful training facilitated by KnowledgeHut. The instructor was on top of it and could explain the concepts lucidly.",
    name: "Dr. Anoop Kumar",
    title: "Senior Instructor, KnowledgeHut",
    avatar: "/avtar.svg",
    rating: 5,
    img1: '/images/testiimg1.webp',
    img2: '/images/google.webp'
  },
  {
    quote: "Excellent and best training with practical examples and real-world experience sharing. Truly beneficial for our career development.",
    name: "Ms. Priya Sharma",
    title: "Software Engineer, ABC Corp",
    avatar: "/avtar2.svg",
    rating: 5,
    img1: '/images/testimg2.webp',
    img2: '/images/google.webp'
  },
  {
    quote: "The sessions were engaging and informative. The live demonstrations helped in understanding the concepts better.",
    name: "Mr. Raj Patel",
    title: "Project Manager, XYZ Ltd",
    avatar: "/avtar3.svg",
    rating: 4,
    img1: '/images/download.webp',
    img2: '/images/google.webp'
  },
  {
    quote: "A wonderful learning experience with a focus on real-world applications. Highly recommended for professionals.",
    name: "Ms. Shreya Singh",
    title: "Business Analyst, DEF Ltd",
    avatar: "/avtar4.svg",
    rating: 5,
    img1: '/images/testimgg4.webp',
    img2: '/images/google.webp'
  }
];

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
  };


  return (
    <> 
    <section className='test-main'>

  
    <div className='max-w-8xl mx-auto  px-4 md:px-8 lg:px-20 py-4 md:py-8  space-y-5 lg:space-y-0 overflow-hidden'>
      <h2 className='text-xl md:text-2xl lg:text-3xl font-extrabold text-center lg:my-5 '>What Our Clients Say</h2>
      <Slider {...settings}>
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className='px-2 my-5'> {/* Add padding here */}
            <div className='w-full h-auto    lg:min-h-[300px] flex flex-col justify-between border-2 border-[#dee5ec] bg-white shadow-lg rounded-lg p-6 relative group hover:border-yellow-400 hover:shadow-2xl transition-all duration-300 ease-in-out'>
              <div className='absolute top-[-20px] left-[30px] bg-white shadow-md border-2 rounded-full px-2 py-2 border-[#dee5ec] group-hover:border-yellow-400'>
                <FaQuoteLeft className='text-sm text-gray-700 group-hover:text-yellow-400' />
              </div>
              <div>
                <h3 className=' text-base md:text-lg font-semibold mb-4'>
                  {truncateText(testimonial.quote, 20)}
                </h3>
                <div className='flex text-yellow-400 text-xl mt-2'>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className='mx-1' />
                  ))}
                </div>
              </div>
              <div className='w-full border-[1px] border-dashed my-5 border-[#bfccda]'></div>
              <div className='w-full flex items-center'>
                <img className='w-14 rounded-full' src={testimonial.img1} alt={testimonial.name} />
                <div className='ml-4'>
                  <h4 className='text-lg font-semibold'>
                    {testimonial.name}
                  </h4>
                  <p className='text-sm text-gray-500'>
                    {testimonial.title}
                  </p>
                </div>
                <div className='ml-auto'>
                  <img className='w-10' src={testimonial.img2} alt='' />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </section>
    </>
  );
};

export default Testimonials;
