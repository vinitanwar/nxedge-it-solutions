"use client"
import React from "react";
import { FaUserAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { GrEdit } from "react-icons/gr";
import { FaArrowRight } from "react-icons/fa";

const AllData = {
  WebDevelopment: {
    title: "The Evolution of Web Development: Trends and Best Practices",
    image: "/images/blog/web-development-Banner.webp",

    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "Web development has come a long way since the early days of the internet. What started as simple static pages has evolved into a complex ecosystem of dynamic web applications and frameworks. In this blog post, we'll explore the latest trends in web development, discuss best practices, and provide insights to help you stay ahead in this ever-changing field.",
        ],
      },
      {
        heading: "The Current Landscape of Web Development",
        paragraphs: [
          "As we step into 2024, web development continues to adapt to the growing needs of users and businesses alike. Here are some key trends shaping the industry:",
        ],
        listItems: [
          {
            title: "Progressive Web Apps (PWAs)",
            content:
              "PWAs are web applications that offer a native app-like experience on mobile devices. They combine the best of web and mobile apps, allowing users to access content offline and receive push notifications.",
          },
          {
            title: "Responsive Design",
            content:
              "With the variety of devices available today, responsive design is crucial. A website must provide a seamless experience on desktops, tablets, and smartphones.",
          },
          {
            title: "Single Page Applications (SPAs)",
            content:
              "SPAs offer a fluid user experience by loading content dynamically without refreshing the entire page. Frameworks like React, Angular, and Vue.js are popular for building SPAs.",
          },
          {
            title: "Serverless Architecture",
            content:
              "Serverless computing allows developers to build and run applications without managing servers. This architecture is cost-effective, scalable, and enables faster development cycles.",
          },
          {
            title: "Voice Search Optimization",
            content:
              "As voice-activated devices become more common, optimizing websites for voice search is vital.",
          },
        ],
      },
      {
        heading: "Best Practices for Web Development",
        paragraphs: [
          "To succeed in web development, consider the following best practices:",
        ],
        listItems: [
          {
            title: "Focus on User Experience (UX)",
            content:
              "User experience should be at the forefront of your development process. Conduct user research, gather feedback, and iterate on designs.",
          },
          {
            title: "Maintain Code Quality",
            content:
              "Writing clean and maintainable code is essential for long-term project success. Use coding standards, employ version control systems like Git, and conduct code reviews.",
          },
          {
            title: "Optimize Performance",
            content:
              "Website speed is crucial for user retention and SEO. Minimize HTTP requests, compress images, and leverage browser caching.",
          },
          {
            title: "Implement Security Best Practices",
            content:
              "Security should be a priority in web development. Use HTTPS, validate user input, and keep software up to date.",
          },
          {
            title: "Stay Updated with Industry Trends",
            content:
              "The web development landscape is continuously evolving. Stay informed about new technologies, frameworks, and tools.",
          },
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "Web development is a dynamic field that requires developers to adapt and innovate constantly. By embracing the latest trends and adhering to best practices, you can create engaging, high-performing, and secure web applications. Whether you're a seasoned developer or just starting, staying informed and being proactive will ensure your success in this exciting industry.",
        ],
      },
    ],
   blogTrendsData : [
  {
    title: "Responsive Design Best Practices",
    description: "Key tips for responsive layouts.",
    technology: "Responsive Design",
    image: "/images/blog/blogChild2.avif",
    link: "/blog/responsive-design",
  },
  {
    title: "The Future of Single Page Applications",
    description: "SPAs transforming user interaction.",
    technology: "SPA",
    image: "/images/blog/blogChild3.avif",
    link: "/blog/spa",
  },
  {
    title: "Progressive Web Apps (PWAs) Explained",
    description: "PWAs offer seamless offline experiences.",
    technology: "PWA",
    image: "/images/blog/blogChild1.avif",
    link: "/blog/pwa",
  },
  {
    title: "Understanding Web Accessibility",
    description: "Ensure inclusive web experiences.",
    technology: "Web Accessibility",
    image: "/images/blog/blogChild2.avif",
    link: "/blog/web-accessibility",
  },
  {
    title: "Mastering JavaScript Frameworks",
    description: "Explore top frameworks like React and Vue.",
    technology: "JavaScript",
    image: "/images/blog/blogChild3.avif",
    link: "/blog/javascript-frameworks",
  },
  {
    title: "Server-Side Rendering vs. Client-Side Rendering",
    description: "How SSR and CSR impact SEO and speed.",
    technology: "SSR vs CSR",
    image: "/images/blog/blogChild3.avif",
    link: "/blog/ssr-vs-csr",
  },
  {
    title: "Web Performance Optimization Tips",
    description: "Boost speed and user satisfaction.",
    technology: "Performance",
    image: "/images/blog/blogChild1.avif",
    link: "/blog/performance-optimization",
  },
  {
    title: "SEO-Friendly Web Development",
    description: "Build websites that rank high on search engines.",
    technology: "SEO",
    image: "/images/blog/blogChild2.avif",
    link: "/blog/seo-web-development",
  },
]

  },
  PPCAdvertising: {
    title: "Maximizing Your Reach: Effective Pay-Per-Click Advertising Strategies",
    image: "/images/blog/banner.webp",

    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "Pay-Per-Click (PPC) advertising is a powerful online marketing strategy that allows businesses to reach their target audience effectively. This blog post delves into the essentials of PPC advertising, discussing current trends and best practices to maximize your advertising efforts.",
        ],
      },
      {
        heading: "Understanding PPC Advertising",
        paragraphs: [
          "PPC advertising works on a simple principle: advertisers pay a fee each time one of their ads is clicked. Here are some key components of PPC advertising:",
        ],
        listItems: [
          {
            title: "Search Ads",
            content:
              "These ads appear in search engine results when users search for specific keywords. They are typically displayed at the top of the search results page.",
          },
          {
            title: "Display Ads",
            content:
              "Display ads are visual-based advertisements that appear on websites within the Google Display Network, helping to build brand awareness.",
          },
          {
            title: "Social Media Ads",
            content:
              "These ads appear on social media platforms, allowing businesses to target users based on demographics, interests, and behaviors.",
          },
          {
            title: "Remarketing Ads",
            content:
              "Remarketing targets users who have previously interacted with your website, reminding them of your products or services.",
          },
        ],
      },
      {
        heading: "Best Practices for PPC Advertising",
        paragraphs: [
          "To optimize your PPC campaigns, consider these best practices:",
        ],
        listItems: [
          {
            title: "Keyword Research",
            content:
              "Conduct thorough keyword research to identify high-performing keywords that align with your business goals.",
          },
          {
            title: "Ad Copy Optimization",
            content:
              "Write compelling ad copy that resonates with your audience and encourages them to click.",
          },
          {
            title: "Landing Page Relevance",
            content:
              "Ensure that your landing pages are relevant to your ads to improve quality scores and conversion rates.",
          },
          {
            title: "A/B Testing",
            content:
              "Regularly test different ad copies, images, and landing pages to determine what works best for your audience.",
          },
          {
            title: "Monitor and Adjust",
            content:
              "Continuously monitor your campaigns and adjust bids, budgets, and targeting based on performance data.",
          },
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "PPC advertising can significantly enhance your online presence and drive traffic to your website. By understanding the fundamentals and implementing effective strategies, you can maximize your return on investment and achieve your marketing goals. Stay updated with industry changes and continuously refine your approach for long-term success.",
        ],
      },
    ],
 blogTrendsData: [
  {
    title: "Mastering PPC Advertising",
    description: "Effective strategies for maximizing PPC performance.",
    technology: "PPC Advertising",
    image: "/images/blog/ppcChild1.avif",
    link: "/blog/mastering-ppc-advertising",
  },
  {
    title: "PPC Campaign Optimization Techniques",
    description: "Key methods to optimize your PPC campaigns.",
    technology: "PPC Optimization",
    image: "/images/blog/ppcChild2.avif",
    link: "/blog/ppc-campaign-optimization",
  },
  {
    title: "Understanding Google Ads",
    description: "A beginner’s guide to getting started with Google Ads.",
    technology: "Google Ads",
    image: "/images/blog/ppcChild3.avif",
    link: "/blog/understanding-google-ads",
  },
  {
    title: "Maximizing ROI with PPC",
    description: "How to boost ROI through strategic PPC methods.",
    technology: "ROI in PPC",
    image: "/images/blog/ppcChild4.avif",
    link: "/blog/maximizing-roi-with-ppc",
  },
  {
    title: "The Future of PPC in Digital Marketing",
    description: "Explore the evolving trends in PPC advertising.",
    technology: "Future of PPC",
    image: "/images/blog/ppcChild5.avif",
    link: "/blog/future-of-ppc",
  },
  {
    title: "Facebook Ads vs. Google Ads",
    description: "Comparing two giants in PPC advertising.",
    technology: "PPC Comparison",
    image: "/images/blog/ppcChild6.avif",
    link: "/blog/facebook-ads-vs-google-ads",
  },
  {
    title: "Retargeting Strategies in PPC",
    description: "Enhance your PPC results with smart retargeting.",
    technology: "PPC Retargeting",
    image: "/images/blog/ppcChild7.avif",
    link: "/blog/ppc-retargeting-strategies",
  },
  {
    title: "Creating Effective PPC Landing Pages",
    description: "Boost conversions with optimized landing pages.",
    technology: "PPC Landing Pages",
    image: "/images/blog/ppcChild8.avif",
    link: "/blog/creating-effective-ppc-landing-pages",
  }
]

  },
  ResponsiveWebDesign: {
    title: "Responsive Web Design: Creating Seamless User Experiences",
    image: "/images/blog/business_website_innerbanner.webp",

    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "Responsive web design (RWD) is an approach that ensures web pages render well on a variety of devices and window or screen sizes. This blog post will explore the principles of responsive web design, its importance, and best practices to create websites that provide a seamless experience for users.",
        ],
      },
      {
        heading: "The Importance of Responsive Web Design",
        paragraphs: [
          "As mobile device usage continues to rise, having a responsive web design is essential. Here are some key reasons why RWD is crucial:",
        ],
        listItems: [
          {
            title: "Improved User Experience",
            content:
              "A responsive design provides users with a consistent experience across devices, making it easier to navigate and engage with content.",
          },
          {
            title: "SEO Benefits",
            content:
              "Search engines favor responsive websites, which can lead to better rankings and increased organic traffic.",
          },
          {
            title: "Cost-Effective",
            content:
              "Instead of creating separate websites for mobile and desktop, RWD allows you to maintain a single site, reducing development and maintenance costs.",
          },
          {
            title: "Adaptability",
            content:
              "Responsive design allows your website to adapt to new devices and screen sizes, ensuring longevity in an ever-evolving digital landscape.",
          },
        ],
      },
      {
        heading: "Best Practices for Responsive Web Design",
        paragraphs: [
          "To effectively implement responsive web design, consider these best practices:",
        ],
        listItems: [
          {
            title: "Flexible Grid Layouts",
            content:
              "Use a fluid grid layout that scales smoothly to fit different screen sizes, ensuring a consistent design.",
          },
          {
            title: "Media Queries",
            content:
              "Utilize CSS media queries to apply different styles based on the device's characteristics, such as width, height, and orientation.",
          },
          {
            title: "Responsive Images",
            content:
              "Use responsive images that adjust in size and resolution based on the user's device to enhance performance and load times.",
          },
          {
            title: "Mobile-First Approach",
            content:
              "Design your website for mobile devices first and then scale up for larger screens to prioritize mobile user experience.",
          },
          {
            title: "Testing Across Devices",
            content:
              "Regularly test your website on various devices and browsers to ensure a consistent user experience.",
          },
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "Responsive web design is no longer optional; it is a necessity in today’s multi-device world. By following best practices and embracing the principles of RWD, you can create engaging, user-friendly websites that cater to your audience’s needs. Whether you are a seasoned developer or new to web design, focusing on responsiveness will enhance your site’s performance and user satisfaction.",
        ],
      },
    ],
  blogTrendsData: [
  {
    title: "Understanding Responsive Web Design",
    description: "An overview of responsive design principles.",
    technology: "Responsive Design",
    image: "/images/blog/responsiveChild1.avif",
    link: "/blog/understanding-responsive-web-design",
  },
  {
    title: "Mobile-First Design: Best Practices",
    description: "Key strategies for implementing mobile-first design.",
    technology: "Mobile-First Design",
    image: "/images/blog/responsiveChild2.avif",
    link: "/blog/mobile-first-design-best-practices",
  },
  {
    title: "CSS Flexbox and Grid Layouts",
    description: "Using Flexbox and Grid for responsive layouts.",
    technology: "CSS Flexbox/Grid",
    image: "/images/blog/responsiveChild3.avif",
    link: "/blog/css-flexbox-grid-layouts",
  },
  {
    title: "Media Queries for Responsive Design",
    description: "How to effectively use media queries.",
    technology: "Media Queries",
    image: "/images/blog/responsiveChild4.avif",
    link: "/blog/media-queries-for-responsive-design",
  },
  {
    title: "Responsive Images: Techniques and Tips",
    description: "Best practices for responsive images in web design.",
    technology: "Responsive Images",
    image: "/images/blog/responsiveChild5.avif",
    link: "/blog/responsive-images-techniques-and-tips",
  },
  {
    title: "The Importance of Accessibility in Responsive Design",
    description: "Creating accessible designs for all users.",
    technology: "Web Accessibility",
    image: "/images/blog/responsiveChild6.avif",
    link: "/blog/accessibility-in-responsive-design",
  },
  {
    title: "Testing Your Responsive Design",
    description: "Tools and methods for testing responsive layouts.",
    technology: "Responsive Testing",
    image: "/images/blog/responsiveChild7.avif",
    link: "/blog/testing-your-responsive-design",
  },
  {
    title: "Future Trends in Responsive Web Design",
    description: "Exploring the future of responsive design.",
    technology: "Future of Design",
    image: "/images/blog/responsiveChild8.avif",
    link: "/blog/future-trends-in-responsive-web-design",
  }
]

  },
};

const Page = ({params}) => {
    console.log(params.singleBlog,)
  const blogData = AllData[params.singleBlog]; 

  return (
    <section className="bg-gray-50">
    {/* Blog Banner */}
    <div
      className="blog-banner h-48 bg-cover bg-center md:h-72 lg:h-96"
      style={{ background: `url(${blogData.image})` }}
    ></div>
  
    <div className="p-4 sm:p-6 lg:px-20 grid grid-cols-1 lg:grid-cols-5 gap-14 py-5">
      {/* Blog Content */}
      <div className="lg:col-span-3 p-3 lg:px-8 lg:py-8 bg-white shadow-lg rounded-lg transition-transform duration-300 hover:shadow-xl">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-start mb-4 sm:mb-6 text-gray-800">
          {blogData.title}
        </h1>
  
        {blogData.sections.map((section, index) => (
          <div key={index} className="mb-8 sm:mb-10 border-b pb-4 sm:pb-6 last:border-b-0">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 text-gray-700 transition-colors duration-300 hover:text-blue-600">
              {section.heading}
            </h2>
  
            {section.paragraphs.map((paragraph, pIndex) => (
              <p key={pIndex} className="mb-3 sm:mb-4 text-gray-600 leading-relaxed">
                {paragraph}
              </p>
            ))}
  
            {section.listItems && (
              <ul className="list-disc ml-4 sm:ml-6 mb-4">
                {section.listItems.map((item, iIndex) => (
                  <li
                    key={iIndex}
                    className="mb-2 sm:mb-3 text-gray-600 leading-relaxed transition-colors duration-300 hover:text-blue-600"
                  >
                    <strong className="text-gray-800">{item.title}:</strong> {item.content}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
  
      {/* Latest Blog Trends Section */}
    <div className="lg:col-span-2 ">
    <div className="sticky  top-16    ">
      <section className="overflow-auto h-[90vh] single-blog-section">
      <div className="p-4 sm:p-6 bg-gray-50">
          <h2 className="text-2xl font-bold mb-4 sm:mb-6 text-center text-gray-800">
           Recent Post
          </h2>
          <div className="flex flex-col  gap-4 sm:gap-6">
            {blogData.blogTrendsData.map((trend, index) => (
            
              <div className="flex items-center gap-2 border shadow-lg">
                <div>
                    <img src={trend.image} className="rounded-lg w-36 h-36" alt=""  />
                </div>
                <div className="flex flex-col  gap-2">
                    <p className="text-sm font-bold">{trend.title}</p>
                    <p>{trend.description}</p>
                    <p>Sept24 ,2019</p>
                   
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
        <div className="card2 px-4  bg-slate-50 py-8 border rounded-lg">
              <h5 className="text-center text-2xl">Fill The Form</h5>
              <div className="formSection">
                <form action="" className="flex flex-col gap-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="border px-2 py-2 w-full"
                    />
                    <FaUserAlt className="absolute right-8 top-3" />
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Your Email"
                      className="border px-2 py-2 w-full"
                    />
                    <FaEnvelope className="absolute right-8 top-3" />
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="border px-2 py-2 w-full"
                    />
                    <FaPhone className="absolute right-8 top-3" />
                  </div>
                  <div className="relative">
                    <textarea
                      name=""
                      id=""
                      className="border min-h-[10rem] min-w-full"
                    ></textarea>
                    <GrEdit className="absolute right-8 top-3" />
                  </div>
                  <div>
                    <button className="w-full bg-[#0284C7]  py-2 text-white font-bold rounded-lg">
                      Send Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
      </div>
    </div>
    </div>
  </section>
  
  );
};

export default Page;

// pending 