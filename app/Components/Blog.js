import Link from 'next/link';
import React from 'react';


const blogPosts = [
  {
    id: 1,
    title: "10 Essential SEO Tips to Boost Your Website's Ranking",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: "/images/blog/blog2.webp",
    date: "24 JUL",
    link:"/Blog/WebDevelopment"
  },
  {
    id: 2,
    title: "The Power of PPC Advertising: How to Maximize Your ROI",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: "/images/blog/blog3.webp",
    date: "24 JUL",
    link:"/Blog/PPCAdvertising"

  },
  {
    id: 3,
    title: "The Importance of Responsive Web Design in the Mobile Age",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: "/images/blog/blog1.webp",
    date: "24 JUL",
    link:"/Blog/ResponsiveWebDesign"
  }
];

const Blog = () => {
  return (
    <>
    <section className='blog-main overflow-hidden'>
    <div className="w-full mx-auto px-4 md:px-8 lg:px-20 py-4 md:py-8  py-4 lg:py-10 xl:py-24">
      <div className="text-center">
        <h2 className="text-xl font-extrabold tracking-tight text-gray-900 lg:text-3xl">Insights & Innovations: Our Latest Blog Posts</h2>
        <p className="mt-3 max-w-2xl mx-auto text-base md:text-lg text-gray-500 sm:mt-4">Explore our blog to discover actionable insights, success stories, and <br/>
        expert advice that can help drive growth for your business.</p>
      </div>
      <div className="mt-12 grid gap-10 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  mx-auto lg:max-w-none">
        {blogPosts.map((post) => (

          <div key={post.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex-shrink-0">
              <img className="h-48 w-full object-cover transition-transform duration-300 ease-in-out hover:scale-110" src={post.image} alt={post.title} />
            </div>
            <div className="flex-1 bg-white p-3 md:p-6 flex flex-col justify-between">
              <div className="flex-1">
                <div className="block mt-2">
                  <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                  <p className="mt-3 text-base text-gray-500">{post.description}</p>
                </div>
              </div>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#0284c7] text-white">
                    {post.date.split(' ')[0]}
                  </span>
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900">{post.date.split(' ')[1]}</div>
                </div>
              </div>
              <div className="mt-6">
                <Link href={post.link} className="text-base font-semibold text-[#0284c7] hover:text-[#0284c7]">
                  Read More &rarr;
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
    </>
  );
};

export default Blog;
