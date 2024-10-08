"use client";

import React,{useState} from "react";
import Link from "next/link";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";

import { IoIosArrowForward } from "react-icons/io";
import { FaEnvelope, FaUserAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { GrEdit } from "react-icons/gr";

import {
  FaBrush,
  FaClipboard,
  FaBookOpen,
  FaFolderOpen,
  FaPrint,
  FaTabletAlt,
  FaAdjust,
  FaUserFriends,
  FaFilm,
  FaMagic,
  FaCube,
  FaPencilAlt,
  FaPaintBrush,
  FaFlag,
  FaComments,
  FaLaptop,
  FaPalette,
  FaFont,
  FaLaptopCode,
  FaMobileAlt,
  FaClipboardCheck,
  FaChartLine,
  FaLink,
  FaChartBar,
  FaDatabase,
  FaCloud,
  FaPlug,
  FaCodeBranch,
  FaClipboardList,
  FaUserShield,
  FaChartPie,
  FaHandsHelping,
  FaGlobe,
  FaFileAlt,
  FaBullhorn,
  FaSearch,
  FaLanguage,
  FaEdit,
  FaServer,
  FaClock,
  FaBook,
  FaLock,
  FaUser,
  FaCogs,
  FaLightbulb,
  FaDollarSign,
  FaEye,
  FaShareAlt,
  FaUsers,
  FaCog,
  FaTachometerAlt,
  FaShieldAlt,
  FaUserCheck,
  FaRobot,
  FaBug,
  FaRetweet,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaStar,
  FaMapMarkerAlt,
  FaImage,
  FaVideo,
} from "react-icons/fa";
import Counter from "@/app/Components/Counter";

export default function page({ params }) {
  const { myservice: particuluarService } = params;
  const serviceMenu = [
    {
      servieName: " Website Design",
      ChilService: [
        {
          name: "E-commerce Website Design",
          link: "/AllService/EcoomWebsite",
        },
        {
          name: "  Web-Application-development",
          link: "/AllService/WebApplicationdevelopment",
        },
        {
          name: "  CMS Web Development",
          link: "/AllService/CMSWebDevelopment",
        },
        {
          name: " Small Business Website",
          link: "/AllService/businessdevelopement",
        },
        {
          name: "  Coporate Website",
          link: "/AllService/corporatewebsitedesign",
        },
      ],
    },

    {
      servieName: "  Mobile and App Development",
      ChilService: [
        {
          name: "  Android App Development",
          link: "/AllService/androidapplicationdevelopment",
        },
        {
          name: "   Ios App Development",
          link: "/AllService/iosApplicationDevelopment",
        },
        {
          name: "  Hybrid App  Development",
          link: "/AllService/hybridapplicationdevelopment",
        },
        {
          name: "  Mobile App Testing",
          link: "/AllService/mobileapplicationtesting",
        },
        {
          name: "  Quailty Assurance",
          link: "/AllService/qualityAssurance",
        },
      ],
    },
    {
      servieName: "  Digital Marketing ",
      ChilService: [
        {
          name: "  Seo Services",
          link: "/AllService/searchEngineOptimization",
        },
        {
          name: "  PPC Management",
          link: "/AllService/payPerClickService",
        },
        {
          name: " Social Media Marketing (SMM)",
          link: "/AllService/socialMediaMarketingService",
        },
        {
          name: "  Local Seo Services",
          link: "/AllService/localSeoServices",
        },
        {
          name: " Content Marketing Services",
          link: "/AllService/contentMarketingService",
        },
      ],
    },
    {
      servieName: " Design & Branding",
      ChilService: [
        {
          name: " Logo Design",
          link: "/AllService/logoDesignService",
        },
        {
          name: " Coporate Identity Design",
          link: "/AllService/corporateStationeryDesign",
        },
        {
          name: "  Brochure Design  ",
          link: "/AllService/brochureDesignService",
        },
        {
          name: " Animated Vidoes ",
          link: "/AllService/animatedServices",
        },
        {
          name: " Creative Agency",
          link: "/AllService/creativeServices",
        },
      ],
    },
  ];

  const [curentService,setCurentService]=useState(serviceMenu[0].servieName)
  
  const handleServiceClick = (serviceName) => {
    setCurentService((prev) => (prev === serviceName ? "" : serviceName));
  };


  const allData = {
    EcoomWebsite: {
      section1: {
        Breadcrumb: "ecommerce-website-development",
        heading: "Custom Web Design & Development Solutions",
        para: "Looking to grow your business by connecting with customers online? An eCommerce website is the perfect way to expand your customer base and boost sales. Whether you're launching your first online store or looking to improve an existing one, our expert team can deliver results-driven eCommerce design services. At Nx Edge Solutions we offer cutting-edge eCommerce web development with a sleek user interface, seamless payment gateway and shipping API integration, robust security features, and easy-to-manage product inventory. Trust our experienced developers for comprehensive eCommerce solutions that drive growth and success for your business.",
        img: "/images/AllServiceImages/ecom1.jpg",
      },
      gallerySection: {
        title: "Website For Small Business & Startups",
        subtitle: "Elevate Your Startup to an Established Brand",
        paragraphs: [
          "Whether you own a small business or are nurturing a startup, we specialize in creating professional websites at competitive price points. Leveraging the latest technologies, we design attractive layouts and develop features tailored to enhance user experience. A well-crafted website for small businesses can transform visitors into loyal customers by making a lasting impression on their target audience. Ultimately, this leads to increased revenue and significant business growth.",
          "At NX edge Solutions, we prioritize delivering SEO-friendly websites for broader visibility and optimal ROI. Our responsive design ensures an exceptional viewing experience across all mobile devices. Additionally, we seamlessly integrate your website with various social media platforms to further strengthen your brand identity. Let us help your business evolve into a well-recognized brand with our comprehensive small business web design services.",
        ],
        images: [
          { id: 1, src: "/images/sammBusiness.avif", alt: "Design 1" },
          { id: 2, src: "/images/smallBusiness2.avif", alt: "Design 2" },
          { id: 3, src: "/images/smallBusiness3.avif", alt: "Design 3" },
          { id: 4, src: "/images/samllBusiness4.avif", alt: "Design 4" },
        ],
      },
      Section2: {
        img: "/Images/serviceSide.webp",
        heading: "Reliable eCommerce Website Development Company",
        para: "The core objective of any online store development is to provide users with an experience as seamless and engaging as a physical store while offering the administrator easy management capabilities. At Nx Edge Solutions, a certified eCommerce website development company in India, we address both these needs by ensuring the following criteria in our online store development services:",
        user: {
          heading: "THE USERS",
          listData: [
            "User-Friendly Navigation & Attractive Interface",
            "Multiple Product Images for a Realistic Shopping Experience",
            "Fast & Simple Checkout Process",
            "Organized Categories & Filters for Efficient Searching",
            "Secure Payment Gateways",
            "Comprehensive Order Tracking System",
          ],
        },
        ManageOrder: {
          heading: "Easy To Track & Manage Orders",
          listData: [
            "Intuitive Navigation with Engaging Design",
            "High-Quality Product Images for Enhanced User Experience",
            "Streamlined and Hassle-Free Checkout",
            "Smart Filters and Well-Organized Categories for Quick Searches",
            "Advanced Security for Payment Processing",
            "Detailed Order Tracking for Transparency",
          ],
        },
      },
      swiperdata : [
        {
          title: "SEO Strategy & Optimization",
          description:
            "Craft a powerful SEO strategy tailored to your business. Optimize on-page and off-page factors to achieve long-term visibility and traffic growth.",
          image: "/images/AllServiceImages/Eccom2.avif",
          bgColor: "#2E4053", // Darker Blue Slate
        },
        {
          title: "PPC Campaigns for SEO",
          description:
            "Leverage PPC campaigns to complement your SEO efforts and generate instant traffic while boosting your website's overall authority.",
            image: "/images/AllServiceImages/ecom6.avif",
            bgColor: "#6C3483", // Vibrant Purple
        },
        {
          title: "Social Media & SEO Integration",
          description:
            "Boost your SEO through social media integration, driving social signals and enhancing brand visibility across multiple channels.",
            image: "/images/AllServiceImages/ecom3.avif",
          bgColor: "#1E8449", // Forest Green
        },
        {
          title: "Web Design for SEO",
          description:
            "Ensure your website design is SEO-friendly. We focus on responsive designs, fast load times, and optimal user experience to boost your rankings.",
            image: "/images/AllServiceImages/ecom7.webp",
          bgColor: "#34495E", // Charcoal Blue
        },
        {
          title: "Content Creation for SEO",
          description:
            "Create high-quality, SEO-optimized content that engages your audience and improves your website’s search engine rankings with targeted keywords.",
            image: "/images/AllServiceImages/ecom6.avif",
          bgColor: "#884EA0", // Dark Lavender
        },
        {
          title: "Local SEO Optimization",
          description:
            "Improve your local search visibility with our Local SEO services. Optimize your Google My Business and ensure your business shows up in local searches.",
            image: "/images/AllServiceImages/ecom7.webp",
          bgColor: "#239B56", // Bold Green
        },
      ],
      cards: [
        {
          title: "E-commerce Development",
          description: `Our e-commerce development services focus on creating robust and user-friendly online stores. We specialize in building dynamic and responsive e-commerce platforms that cater to your specific business needs, ensuring seamless user experiences and efficient transaction processes.`,
          icon: (
            <FaLaptopCode className="text-5xl text-[#673ab7] mx-auto mb-4" />
          ),
        },
        {
          title: "Payment Gateway Integration",
          description: `We excel at integrating secure payment gateways to enhance your e-commerce application's functionality. Whether you need to connect with popular payment providers or implement custom solutions, we ensure smooth and secure transactions for your customers.`,
          icon: <FaLink className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Inventory Management",
          description: `Our inventory management services focus on creating systems that track and manage your products effectively. We implement solutions that provide real-time inventory updates, ensuring you have accurate data to make informed business decisions.`,
          icon: <FaDatabase className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "E-commerce Optimization",
          description: `Our optimization services aim to enhance the performance of your e-commerce platform. We implement SEO best practices, speed optimization, and user experience enhancements to increase traffic and conversions on your online store.`,
          icon: <FaCogs className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Consultation Services",
          description: `We provide expert consultation services to help you navigate the complexities of e-commerce. Our team analyzes your business model, recommends the best technologies, and assists you in formulating a strategic plan to achieve your e-commerce goals effectively.`,
          icon: <FaLightbulb className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Mobile Commerce Development",
          description: `Our mobile commerce development services focus on creating high-quality mobile-friendly e-commerce applications. We prioritize user experience and performance, ensuring your mobile app is not only functional but also engaging. From initial design to final deployment, we cover all aspects of mobile commerce development to elevate your online store.`,
          icon: <FaMobileAlt className="text-4xl text-[#673ab7] mx-auto" />,
        },
      ],

      section3: {
        heading: "Technologies We Use for Ecommerce Website Development",
        data: [
          {
            heading: "OpenCart Development",
            image: "/Images/openCart.webp",
            description:
              "OpenCart offers exceptional customization capabilities, allowing you to create a unique online store tailored to your needs. With its lightweight architecture and support for over 14,000 extensions, you can easily enhance your store's functionality. As a trusted eCommerce development partner in India, we specialize in delivering cost-effective solutions that prioritize security through PA-DSS compliance.",
          },
          {
            heading: "Magento Development",
            image: "/Images/developMent.webp",
            description:
              "Magento is a powerful platform that excels in handling large inventories and high traffic volumes. Its modular architecture provides extensive customization options for both front-end and back-end development. Ideal for multi-vendor marketplaces, Magento ensures high levels of security with its PA-DSS compliance, making it a top choice for serious eCommerce businesses.",
          },
          {
            heading: "WordPress Development",
            image: "/Images/wordPress.webp",
            description:
              "With WordPress, you can build lightweight and fast-loading websites that are easy to manage. We leverage WooCommerce, the leading eCommerce plugin that powers a significant share of online stores. WooCommerce offers robust scalability, secure payment processing, and flexible shipping options, making it a comprehensive solution for your eCommerce needs.",
          },
          {
            heading: "PrestaShop Development",
            image: "/Images/openCart.webp",
            description:
              "PrestaShop simplifies the eCommerce process by eliminating the need for complex coding and technical hurdles. This free, lightweight platform is user-friendly and supports multiple languages, enabling you to reach a global audience. Our expert developers are skilled in creating customized eCommerce solutions on PrestaShop to meet your unique business goals.",
          },
          {
            heading: "Custom Development",
            image: "/Images/customDevelopment.webp",
            description:
              "Looking to differentiate your online store with specialized features? Our custom eCommerce development services cater to your specific requirements. Our skilled developers build user-friendly, feature-rich websites using frameworks such as Laravel, CakePHP, and CodeIgniter, alongside robust databases like MySQL, ensuring a unique online presence for your brand.",
          },
          {
            heading: "Shopify Development",
            image: "/Images/shopify.webp",
            description:
              "Shopify is a comprehensive hosted eCommerce platform that allows for rapid online store setup. With an array of over 100 professional themes and numerous plugins, our Shopify developers can quickly create a storefront tailored to your business. Enjoy features like drop shipping, fraud prevention, SEO optimization, and seamless social media integration for a competitive edge.",
          },
        ],
      },
      section4: {
        heading:
          "Innovative eCommerce Website Design Solutions in India - Team Up with Us",
        para: "We are eager to engage with you on your corporate web development project and help transform your vision into reality. Our dedicated team of professionals focuses on understanding your unique business needs and delivering customized solutions that align seamlessly with your strategic objectives. Let’s arrange a discussion to delve into your requirements, from project specifications to desired functionalities, ensuring we craft a digital experience that resonates with your audience. Together, we will ensure your project is completed on schedule and surpasses your expectations.",
        data: [
          {
            title: "Corporate Web Solutions",
            description:
              "We specialize in delivering customized corporate web solutions that enhance your online presence and drive business growth.",
            icon: <FaClock className="text-xl lg:text-2xl" />,
          },
          {
            title: "Tailored Development",
            description:
              "Our corporate websites are tailored to meet your specific needs, ensuring they reflect your brand identity and support your business objectives.",
            icon: <FaBook className="text-xl lg:text-2xl" />,
          },
          {
            title: "User-Friendly Interfaces",
            description:
              "Our focus on user-friendly design ensures that your corporate website is easy to navigate, enhancing the user experience and encouraging engagement.",
            icon: <FaUser className="text-xl lg:text-2xl" />,
          },
          {
            title: "Secure & Reliable",
            description:
              "Our corporate websites prioritize security and reliability, ensuring your data is protected while providing a seamless user experience.",
            icon: <FaLock className="text-xl lg:text-2xl" />,
          },
        ],
        img: "/images/AllServiceImages/ecom8.webp",
        lastPara:
          "In today's digital landscape, a strong online presence is crucial for any business. Our corporate web development services are tailored to meet the unique needs of enterprises, ensuring that your website not only looks professional but also functions seamlessly. Our experienced developers utilize the latest technologies and best practices to create scalable, secure, and user-friendly web applications. Whether you're looking to revamp an existing site or build a new platform from scratch, our dedicated team is here to deliver high-quality solutions that align with your business goals while keeping your budget in mind.",
      },
    },

    WebApplicationdevelopment: {
      section1: {
        Breadcrumb: "WEB APPLICATION DEVELOPMENT",
        heading: "Advanced Web Application Solutions",
        para: "Are you ready to elevate your business by engaging customers in the digital space? A well-designed eCommerce website can significantly enhance your reach and increase sales. Whether you're launching your first online store or seeking to optimize your current platform, our skilled team is dedicated to providing impactful eCommerce design solutions. At NS Edge Solutions, we specialize in advanced eCommerce web development, featuring intuitive user interfaces, seamless integration with payment gateways and shipping APIs, robust security measures, and easy product management tools. Rely on our seasoned developers to deliver tailored eCommerce solutions that foster business growth and success.",
        img: "/images/AllServiceImages/WebAppp1.avif",
      },
      gallerySection: {
        title: "Web Applications for Small Businesses & Startups",
        subtitle: "Elevate Your Startup with Robust Web Solutions",
        paragraphs: [
          "Whether you own a small business or are nurturing a startup, we specialize in developing custom web applications that meet your specific needs at competitive price points. Utilizing the latest technologies, we create user-friendly interfaces and implement features designed to enhance user engagement. A well-developed web application can transform user interactions into lasting relationships, driving customer loyalty and increased revenue.",
          "At NS Edge Solutions, we prioritize building scalable and secure web applications for optimal performance and growth. Our responsive designs ensure exceptional functionality across all devices. Additionally, we integrate your application with various third-party services and APIs to enhance its capabilities and improve user experience. Let us help your business thrive with our comprehensive web application development services.",
        ],
        images: [
          {
            id: 1,
            src: "/images/AllServiceImages/webapp1.avif",
            alt: "Web App Design 1",
          },
          {
            id: 2,
            src: "/images/AllServiceImages/webapp2.avif",
            alt: "Web App Design 2",
          },
          {
            id: 3,
            src: "/images/AllServiceImages/webapp2.avif",
            alt: "Web App Design 4",
          },
          {
            id: 4,
            src: "/images/AllServiceImages/webapp1.avif",
            alt: "Web App Design 3",
          },
        ],
      },

      Section2: {
        img: "/Images/serviceSide.webp",
        heading: "Reliable Web Application Development Company",
        para: "The primary goal of web application development is to provide users with a seamless and engaging experience while equipping administrators with intuitive management capabilities. At NS Edge Solutions, a certified web application development company in India, we address these needs by implementing the following criteria in our web application development services:",
        user: {
          heading: "FOR USERS",
          listData: [
            "Intuitive User Interface & Navigation",
            "Responsive Design for All Devices",
            "Fast Loading Times for Enhanced Performance",
            "Organized Features for Efficient Use",
            "Robust Security Measures",
            "Real-Time Data Tracking and Updates",
          ],
        },
        ManageOrder: {
          heading: "Easy Tracking & Management of Tasks",
          listData: [
            "User-Friendly Dashboard for Enhanced Management",
            "Comprehensive Data Visualization for Insights",
            "Effortless Task Assignment and Tracking",
            "Smart Search and Filtering Options for Quick Access",
            "Advanced Security Protocols for Data Protection",
            "Detailed Activity Logs for Transparency",
          ],
        },
      },
      swiperdata : [
        {
          title: "SEO Strategy & Optimization",
          description:
            "Craft a powerful SEO strategy tailored to your business. Optimize on-page and off-page factors to achieve long-term visibility and traffic growth.",
          image: "/images/AllServiceImages/WebAppp1.avif",
          bgColor: "#2E4053", // Darker Blue Slate
        },
        {
          title: "PPC Campaigns for SEO",
          description:
            "Leverage PPC campaigns to complement your SEO efforts and generate instant traffic while boosting your website's overall authority.",
            image: "/images/AllServiceImages/WebAppp2.jpeg",
            bgColor: "#6C3483", // Vibrant Purple
        },
        {
          title: "Social Media & SEO Integration",
          description:
            "Boost your SEO through social media integration, driving social signals and enhancing brand visibility across multiple channels.",
            image: "/images/AllServiceImages/WebAppp4.avif",
            bgColor: "#1E8449", // Forest Green
        },
        {
          title: "Web Design for SEO",
          description:
            "Ensure your website design is SEO-friendly. We focus on responsive designs, fast load times, and optimal user experience to boost your rankings.",
            image: "/images/AllServiceImages/WebAppp7.avif",
          bgColor: "#34495E", // Charcoal Blue
        },
        {
          title: "Content Creation for SEO",
          description:
            "Create high-quality, SEO-optimized content that engages your audience and improves your website’s search engine rankings with targeted keywords.",
            image: "/images/AllServiceImages/WebAppp5.avif",
          bgColor: "#884EA0", // Dark Lavender
        },
        {
          title: "Local SEO Optimization",
          description:
            "Improve your local search visibility with our Local SEO services. Optimize your Google My Business and ensure your business shows up in local searches.",
            image: "/images/AllServiceImages/WebAppp6.avif",
          bgColor: "#239B56", // Bold Green
        },
      ],

      cards: [
        {
          title: "Web Application Development",
          description: `Our web application development services encompass both frontend and backend technologies. We specialize in creating dynamic and responsive web applications that cater to your specific business needs. From crafting seamless user experiences to implementing robust server-side functionalities, we ensure that your web application is not just attractive but also efficient.`,
          icon: (
            <FaLaptopCode className="text-5xl text-[#673ab7] mx-auto mb-4" />
          ),
        },
        {
          title: "API Integration",
          description: `Our team excels at integrating APIs to enhance your web application's functionality. Whether you need to connect with third-party services or create custom APIs for your backend, we ensure smooth and efficient communication between your application components, enhancing overall performance and user experience.`,
          icon: <FaLink className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Database Management",
          description: `Our database management services focus on creating, maintaining, and optimizing databases to ensure data integrity and availability for your web applications. We work with various database systems to implement effective solutions that support your application’s data needs, ensuring reliability and performance.`,
          icon: <FaDatabase className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "DevOps Services",
          description: `Our DevOps services aim to streamline your web application development and operations processes. We implement automation tools and CI/CD practices to enhance productivity, ensure rapid deployment, and maintain high-quality standards throughout the software development lifecycle.`,
          icon: <FaCogs className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Consultation Services",
          description: `We provide expert consultation services to guide you through your web application development journey. Our team analyzes your business requirements, recommends the best technologies, and helps you formulate a strategic plan to achieve your goals efficiently and effectively.`,
          icon: <FaLightbulb className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Mobile App Development",
          description: `Our mobile app development services focus on creating high-quality applications that complement your web application. We prioritize user experience and performance, ensuring that your app is not only functional but also engaging. From initial design to final deployment, we cover all aspects of mobile app development to bring your ideas to life.`,
          icon: <FaMobileAlt className="text-4xl text-[#673ab7] mx-auto" />,
        },
      ],

      section3: {
        heading: "Technologies We Use for Web Application Development",
        data: [
          {
            heading: "React Development",
            description:
              "React is a popular JavaScript library for building user interfaces, allowing for the development of fast and interactive web applications. Its component-based architecture promotes reusability and efficient rendering, making it ideal for creating dynamic and responsive user experiences.",
          },
          {
            heading: "Node.js Development",
            description:
              "Node.js is a powerful runtime environment that enables the development of scalable network applications. Leveraging non-blocking I/O and event-driven architecture, Node.js is perfect for building real-time applications, APIs, and microservices that handle high traffic with ease.",
          },
          {
            heading: "Angular Development",
            description:
              "Angular is a robust framework for building dynamic single-page applications. With features like two-way data binding and dependency injection, Angular simplifies the development process and enhances performance, making it a great choice for enterprise-level applications.",
          },
          {
            heading: "Vue.js Development",
            description:
              "Vue.js is a progressive JavaScript framework that is easy to integrate into existing projects. Its flexible and modular structure makes it ideal for developing complex web applications with a focus on performance and user experience.",
          },
          {
            heading: "Django Development",
            description:
              "Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. It includes an array of built-in features, such as authentication and database management, making it suitable for developing secure and scalable web applications.",
          },
          {
            heading: "Custom Development",
            description:
              "Our custom web application development services cater to your unique business requirements. Using a variety of frameworks and technologies, including Laravel, Ruby on Rails, and ASP.NET, we build tailored solutions that ensure high performance and scalability for your applications.",
          },
        ],
      },

      section4: {
        heading:
          "Innovative Web Application Development Solutions in India - Team Up with Us",
        para: "We are eager to engage with you on your web application development project and help transform your vision into reality. Our dedicated team of professionals focuses on understanding your unique business needs and delivering customized solutions that align seamlessly with your strategic objectives. Let’s arrange a discussion to delve into your requirements, from project specifications to desired functionalities, ensuring we craft a digital experience that resonates with your audience. Together, we will ensure your project is completed on schedule and surpasses your expectations.",
        data: [
          {
            title: "Custom Web Solutions",
            description:
              "We specialize in delivering customized web application solutions that enhance your online presence and drive business growth.",
            icon: <FaClock className="text-xl lg:text-2xl" />,
          },
          {
            title: "Tailored Development",
            description:
              "Our web applications are tailored to meet your specific needs, ensuring they reflect your brand identity and support your business objectives.",
            icon: <FaBook className="text-xl lg:text-2xl" />,
          },
          {
            title: "User-Friendly Interfaces",
            description:
              "Our focus on user-friendly design ensures that your web application is easy to navigate, enhancing the user experience and encouraging engagement.",
            icon: <FaUser className="text-xl lg:text-2xl" />,
          },
          {
            title: "Secure & Reliable",
            description:
              "Our web applications prioritize security and reliability, ensuring your data is protected while providing a seamless user experience.",
            icon: <FaLock className="text-xl lg:text-2xl" />,
          },
        ],
        img: "/images/AllServiceImages/WebAppp1.avif",
        lastPara:
          "In today's digital landscape, a strong online presence is crucial for any business. Our web application development services are tailored to meet the unique needs of enterprises, ensuring that your application not only looks professional but also functions seamlessly. Our experienced developers utilize the latest technologies and best practices to create scalable, secure, and user-friendly web applications. Whether you're looking to revamp an existing application or build a new platform from scratch, our dedicated team is here to deliver high-quality solutions that align with your business goals while keeping your budget in mind.",
      },
    },
    CMSWebDevelopment: {
      section1: {
        Breadcrumb: "cms-website-development",
        heading: "Custom CMS Solutions for Your Business",
        para: "Are you looking to streamline your content management processes? A robust CMS is the ideal solution for managing your website's content efficiently. Whether you're implementing a new CMS or enhancing an existing one, our expert team at Nx Edge Solutions can deliver tailored CMS development services. We provide comprehensive CMS solutions that include user-friendly interfaces, flexible content management capabilities, secure access controls, and seamless integration with your existing systems. Trust our experienced developers to elevate your content management experience.",
        img: "/images/AllServiceImages/WEBAPPLICATIONDEVELOPMENT.avif",
      },
      gallerySection: {
        title: "Web Applications for Small Businesses & Startups",
        subtitle: "Elevate Your Startup with Robust Web Solutions",
        title: "CMS for Small Businesses & Startups",
        subtitle: "Empower Your Content Management Journey",
        paragraphs: [
          "Whether you're a small business or a startup, we specialize in creating professional CMS solutions at competitive prices. Leveraging the latest technologies, we design intuitive interfaces and develop features tailored to enhance content management and user engagement. A well-implemented CMS can transform your content workflow and improve your audience reach, leading to increased engagement and business growth.",
          "At Nx Edge Solutions, we prioritize delivering SEO-friendly CMS platforms for broader visibility and optimal ROI. Our responsive design ensures an exceptional user experience across all devices. Additionally, we seamlessly integrate your CMS with various marketing tools and social media platforms to further enhance your brand identity. Let us help you establish a powerful online presence with our comprehensive CMS development services.",
        ],
        images: [
          {
            id: 1,
            src: "/images/AllServiceImages/webapp1.avif",
            alt: "Web App Design 1",
          },
          {
            id: 2,
            src: "/images/AllServiceImages/webapp2.avif",
            alt: "Web App Design 2",
          },
          {
            id: 3,
            src: "/images/AllServiceImages/webapp2.avif",
            alt: "Web App Design 4",
          },
          {
            id: 4,
            src: "/images/AllServiceImages/webapp1.avif",
            alt: "Web App Design 3",
          },
        ],
      },
      swiperdata : [
        {
          title: "SEO Strategy & Optimization",
          description:
            "Craft a powerful SEO strategy tailored to your business. Optimize on-page and off-page factors to achieve long-term visibility and traffic growth.",
          image: "/images/AllServiceImages/WebAppp1.avif",
          bgColor: "#2E4053", // Darker Blue Slate
        },
        {
          title: "PPC Campaigns for SEO",
          description:
            "Leverage PPC campaigns to complement your SEO efforts and generate instant traffic while boosting your website's overall authority.",
            image: "/images/AllServiceImages/WebAppp2.jpeg",
            bgColor: "#6C3483", // Vibrant Purple
        },
        {
          title: "Social Media & SEO Integration",
          description:
            "Boost your SEO through social media integration, driving social signals and enhancing brand visibility across multiple channels.",
            image: "/images/AllServiceImages/WebAppp4.avif",
            bgColor: "#1E8449", // Forest Green
        },
        {
          title: "Web Design for SEO",
          description:
            "Ensure your website design is SEO-friendly. We focus on responsive designs, fast load times, and optimal user experience to boost your rankings.",
            image: "/images/AllServiceImages/WebAppp7.avif",
          bgColor: "#34495E", // Charcoal Blue
        },
        {
          title: "Content Creation for SEO",
          description:
            "Create high-quality, SEO-optimized content that engages your audience and improves your website’s search engine rankings with targeted keywords.",
            image: "/images/AllServiceImages/WebAppp5.avif",
          bgColor: "#884EA0", // Dark Lavender
        },
        {
          title: "Local SEO Optimization",
          description:
            "Improve your local search visibility with our Local SEO services. Optimize your Google My Business and ensure your business shows up in local searches.",
            image: "/images/AllServiceImages/WebAppp6.avif",
          bgColor: "#239B56", // Bold Green
        },
      ],

      Section2: {
        img: "/images/serviceSide.webp",
        heading: "Reliable CMS Development Company",
        para: "The primary objective of any CMS development is to provide users with a seamless and engaging content management experience while ensuring administrators have easy management capabilities. At Nx Edge Solutions, a certified CMS development company in India, we address these needs by ensuring the following criteria in our CMS development services:",

        user: {
          heading: "THE USERS",
          listData: [
            "Intuitive Navigation & Attractive Interface",
            "Customizable Content Templates",
            "Easy Content Creation and Editing",
            "Organized Media Library for Efficient Management",
            "Secure User Access Controls",
            "Comprehensive Analytics for Performance Tracking",
          ],
        },
        ManageOrder: {
          heading: "Efficient Content Management",
          listData: [
            "User-Friendly Dashboard for Quick Access",
            "High-Quality Media Uploads for Enhanced Content",
            "Streamlined Content Approval Workflows",
            "Smart Tagging and Categorization for Quick Searches",
            "Advanced Security for User Data Protection",
            "Detailed Reporting and Analytics for Insights",
          ],
        },
      },

      cards: [
        {
          title: "Affordability",
          description: `Our CMS solutions are designed with affordability in mind. We provide cost-effective options that ensure you receive high-quality services without breaking the bank. Enjoy the benefits of a powerful CMS that fits your budget.`,
          icon: (
            <FaDollarSign className="text-5xl text-[#673ab7] mx-auto mb-4" />
          ),
        },
        {
          title: "What You See Is What You Get",
          description: `Experience true simplicity with our WYSIWYG editor. Our CMS allows you to visualize your content as you create it, enabling you to design, edit, and publish your pages effortlessly, without needing technical skills.`,
          icon: <FaEye className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Better Content Management",
          description: `Our CMS offers advanced content management features that make it easy to create, edit, and organize your content. Enjoy a user-friendly interface that simplifies workflows, allowing you to focus on delivering exceptional content.`,
          icon: <FaFileAlt className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Multiple Languages",
          description: `Expand your reach with our multi-language support. Our CMS allows you to create content in multiple languages, making it easier to engage with diverse audiences and enhance your global presence.`,
          icon: <FaGlobe className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Social Media Integration",
          description: `Seamlessly integrate your content with social media platforms. Our CMS allows you to share your updates across various channels, helping you connect with your audience and increase engagement effortlessly.`,
          icon: <FaShareAlt className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "SEO Friendly Website Development",
          description: `Our CMS solutions prioritize SEO best practices, ensuring your content is optimized for search engines. Increase your website's visibility and attract more traffic with features designed to enhance your search rankings.`,
          icon: <FaSearch className="text-4xl text-[#673ab7] mx-auto" />,
        },
      ],

      section3: {
        heading: "Technologies We Use for Web Application Development",
        data: [
          {
            heading: "React Development",
            description:
              "React is a popular JavaScript library for building user interfaces, allowing for the development of fast and interactive web applications. Its component-based architecture promotes reusability and efficient rendering, making it ideal for creating dynamic and responsive user experiences.",
          },
          {
            heading: "Node.js Development",
            description:
              "Node.js is a powerful runtime environment that enables the development of scalable network applications. Leveraging non-blocking I/O and event-driven architecture, Node.js is perfect for building real-time applications, APIs, and microservices that handle high traffic with ease.",
          },
          {
            heading: "Angular Development",
            description:
              "Angular is a robust framework for building dynamic single-page applications. With features like two-way data binding and dependency injection, Angular simplifies the development process and enhances performance, making it a great choice for enterprise-level applications.",
          },
          {
            heading: "Vue.js Development",
            description:
              "Vue.js is a progressive JavaScript framework that is easy to integrate into existing projects. Its flexible and modular structure makes it ideal for developing complex web applications with a focus on performance and user experience.",
          },
          {
            heading: "Django Development",
            description:
              "Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. It includes an array of built-in features, such as authentication and database management, making it suitable for developing secure and scalable web applications.",
          },
          {
            heading: "Custom Development",
            description:
              "Our custom web application development services cater to your unique business requirements. Using a variety of frameworks and technologies, including Laravel, Ruby on Rails, and ASP.NET, we build tailored solutions that ensure high performance and scalability for your applications.",
          },
        ],
      },

      section4: {
        heading: "Innovative CMS Solutions in India - Team Up with Us",
        para: "We are eager to collaborate with you on your CMS development project and help transform your vision into reality. Our dedicated team focuses on understanding your unique content management needs and delivering customized solutions that align seamlessly with your strategic objectives. Let’s arrange a discussion to delve into your requirements, from project specifications to desired functionalities, ensuring we craft a CMS platform that resonates with your content strategy and audience. Together, we will ensure your project is completed on schedule and exceeds your expectations.",
        data: [
          {
            title: "Custom CMS Solutions",
            description:
              "We specialize in delivering customized CMS platforms that enhance your content management process and drive business growth.",
            icon: <FaClock className="text-xl lg:text-2xl" />,
          },
          {
            title: "Tailored Development",
            description:
              "Our CMS platforms are tailored to meet your specific needs, ensuring they reflect your brand identity and support your business objectives.",
            icon: <FaBook className="text-xl lg:text-2xl" />,
          },
          {
            title: "User-Friendly Interfaces",
            description:
              "Our focus on user-friendly design ensures that your CMS is easy to navigate, enhancing the user experience and streamlining content management.",
            icon: <FaUser className="text-xl lg:text-2xl" />,
          },
          {
            title: "Secure & Reliable",
            description:
              "Our CMS solutions prioritize security and reliability, ensuring your data is protected while providing a seamless content management experience.",
            icon: <FaLock className="text-xl lg:text-2xl" />,
          },
        ],
        img: "/images/coporate.avif",

        lastPara:
          "In today's digital landscape, an efficient content management system is essential for any business. Our CMS development services are tailored to meet the unique needs of enterprises, ensuring that your platform not only looks professional but also functions seamlessly. Our experienced developers utilize the latest technologies and best practices to create scalable, secure, and user-friendly CMS solutions. Whether you're looking to revamp an existing system or build a new platform from scratch, our dedicated team is here to deliver high-quality solutions that align with your business goals while keeping your budget in mind.",
      },
    },
    businessdevelopement: {
      section1: {
        Breadcrumb: "business-development-services",
        heading: "Tailored Business Development Solutions",
        para: "Looking to elevate your business growth and establish a strong online presence? Our Business Development Services are designed to help you connect with customers, streamline operations, and boost your market reach. Whether you're a startup aiming to gain traction or an established enterprise seeking to optimize your processes, our expert team at Nx Edge Solutions delivers strategic solutions that drive results. We provide comprehensive services including market analysis, branding, digital marketing, and operational consulting to ensure your business achieves sustainable growth.",
        img: "/images/AllServiceImages/smallBusiness.avif",
      },
      gallerySection: {
        title: "Empowering Startups & Small Businesses",
        subtitle: "Transform Your Vision into Reality",
        paragraphs: [
          "At Nx Edge Solutions, we specialize in crafting bespoke business development strategies that align with your unique goals. Our team leverages industry insights and the latest technologies to create effective marketing campaigns, optimize customer engagement, and streamline your operations. By focusing on your specific needs, we help you transform challenges into opportunities, ensuring your business stands out in the competitive market.",
          "Our commitment to delivering measurable results means that we prioritize your success. With a strong emphasis on data-driven decision-making, we analyze your business environment to identify growth opportunities and risks. Let us partner with you to build a strong foundation for your business and pave the way for a prosperous future.",
        ],
        images: [
          { id: 1, src: "/images/sammBusiness.avif", alt: "Design 1" },
          { id: 2, src: "/images/smallBusiness2.avif", alt: "Design 2" },
          { id: 3, src: "/images/smallBusiness3.avif", alt: "Design 3" },
          { id: 4, src: "/images/samllBusiness4.avif", alt: "Design 4" },
        ],
      },
      Section2: {
        img: "/images/serviceSide.webp",
        heading: "Your Trusted Partner for Business Development",
        para: "At Nx Edge Solutions, we understand that business development is about more than just sales. It’s about creating long-term relationships and establishing a brand presence that resonates with your target audience. Our services focus on the following key areas:",
        user: {
          heading: "OUR FOCUS AREAS",
          listData: [
            "Market Research & Analysis",
            "Strategic Planning & Execution",
            "Brand Development & Positioning",
            "Lead Generation & Nurturing",
            "Digital Marketing & SEO",
            "Performance Metrics & Analytics",
          ],
        },
        ManageOrder: {
          heading: "Effective Order Management & Fulfillment",
          listData: [
            "Streamlined Order Processing",
            "Automated Inventory Management",
            "Customer Relationship Management (CRM)",
            "Data-Driven Insights for Decision Making",
            "Enhanced Customer Satisfaction through Timely Delivery",
            "Regular Performance Reporting",
          ],
        },
      },
      cards: [
        {
          title: "Market Research",
          description:
            "Our market research services provide insights into your industry landscape, helping you understand customer preferences and market trends to make informed decisions.",
          icon: (
            <FaChartLine className="text-5xl text-[#673ab7] mx-auto mb-4" />
          ),
        },
        {
          title: "Brand Strategy",
          description:
            "We develop comprehensive brand strategies that define your identity, differentiate you from competitors, and resonate with your target audience.",
          icon: <FaBullhorn className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Lead Generation",
          description:
            "Our lead generation services utilize innovative techniques to attract and convert potential customers, ensuring a steady pipeline for your business.",
          icon: <FaUsers className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Digital Marketing",
          description:
            "We implement data-driven digital marketing strategies that enhance your online visibility, drive traffic, and generate leads through SEO, PPC, and social media.",
          icon: <FaGlobe className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Operational Consulting",
          description:
            "Our operational consulting services help streamline your processes, optimize resource allocation, and enhance efficiency for better business performance.",
          icon: <FaCog className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Performance Analytics",
          description:
            "We provide analytics services that measure your performance, track KPIs, and offer actionable insights to improve your strategies.",
          icon: <FaChartBar className="text-4xl text-[#673ab7] mx-auto" />,
        },
      ],
      section3: {
        heading: "Technologies We Leverage for Business Development",
        data: [
          {
            heading: "CRM Solutions",
            icon: <FaHandsHelping />, // Replace this with the desired icon from react-icons
            description:
              "We utilize advanced CRM solutions to enhance customer engagement, streamline communications, and drive sales performance.",
          },
          {
            heading: "Data Analytics Tools",
            icon: <FaChartLine />, // Replace this with the desired icon from react-icons
            description:
              "Our data analytics tools provide insights into market trends, customer behavior, and business performance, empowering informed decision-making.",
          },
          {
            heading: "Marketing Automation Platforms",
            icon: <FaBullhorn />, // Replace this with the desired icon from react-icons
            description:
              "We implement marketing automation platforms to optimize campaigns, improve lead nurturing, and enhance customer interactions.",
          },
          {
            heading: "E-commerce Integration",
            icon: <FaLink />, // Use this icon instead
            description:
              "We offer seamless e-commerce integration to ensure smooth transactions, effective inventory management, and an enhanced shopping experience.",
          },
          {
            heading: "Project Management Tools",
            icon: <FaCog />, // Replace this with the desired icon from react-icons
            description:
              "Our project management tools facilitate collaboration, improve efficiency, and ensure timely delivery of projects.",
          },
          {
            heading: "Cloud Solutions",
            image: "", // No image provided
            icon: <FaCloud />, // Use this icon instead
            description:
              "We leverage cloud solutions to enhance scalability, improve data security, and enable remote collaboration for your business.",
          },
        ],
      },

      section4: {
        heading: "Innovative Business Development Solutions - Partner with Us",
        para: "At Nx Edge Solutions, we are committed to transforming your business aspirations into tangible outcomes. Our dedicated team collaborates closely with you to understand your unique challenges and tailor solutions that align with your strategic goals. Let’s start a conversation to explore your requirements, from business strategy formulation to technology integration, ensuring a streamlined process that exceeds your expectations.",
        data: [
          {
            title: "Customized Strategies",
            description:
              "We design tailored business development strategies that align with your vision and goals.",
            icon: <FaClipboardList className="text-xl lg:text-2xl" />,
          },
          {
            title: "Expert Guidance",
            description:
              "Our experienced team offers expert guidance to navigate the complexities of business development.",
            icon: <FaUserShield className="text-xl lg:text-2xl" />,
          },
          {
            title: "Performance-Oriented Solutions",
            description:
              "We focus on delivering performance-oriented solutions that drive measurable results.",
            icon: <FaChartPie className="text-xl lg:text-2xl" />,
          },
          {
            title: "Ongoing Support",
            description:
              "Our commitment to your success includes ongoing support and continuous optimization of strategies.",
            icon: <FaHandsHelping className="text-xl lg:text-2xl" />,
          },
        ],
        img: "/images/AllServiceImages/smallBusiness.gif",
        lastPara:
          "In today's competitive landscape, a strategic approach to business development is crucial for growth and sustainability. Our expert team at Nx Edge Solutions is dedicated to helping you navigate challenges and seize opportunities. With a focus on innovation and results, we create scalable, effective strategies that empower your business to thrive in the digital age.",
      },
    },
    corporatewebsitedesign: {
      section1: {
        Breadcrumb: "web-app-development-corporate",
        heading: "Custom Corporate Website Design Solutions",
        para: "Are you looking to establish a professional online presence that reflects your brand's values? Our Corporate Website Design services are tailored to meet your unique needs, ensuring that your website engages visitors and drives conversions. Whether you are a startup or an established corporation, our expert team at Nx Edge Solutions crafts stunning, user-friendly websites that elevate your brand and enhance your digital footprint. We provide a range of services, including responsive design, SEO optimization, and content management, to help you achieve a successful online strategy.",
        img: "/images/AllServiceImages/corporate.avif",
      },
      gallerySection: {
        title: "Empowering Brands Through Exceptional Web Design",
        subtitle: "Transform Your Online Presence",
        paragraphs: [
          "At Nx Edge Solutions, we specialize in creating bespoke corporate websites that align with your business objectives. Our team utilizes the latest technologies and design trends to develop engaging user experiences that capture your audience's attention. By focusing on your specific requirements, we help you turn your vision into a powerful online reality.",
          "Our commitment to excellence means that we prioritize your satisfaction. We analyze your business goals and user needs to create a tailored website that not only looks great but also performs well. Let us partner with you to build a strong online foundation that drives growth and visibility.",
        ],
        images: [
          { id: 1, src: "/images/sammBusiness.avif", alt: "Design 1" },
          { id: 2, src: "/images/smallBusiness2.avif", alt: "Design 2" },
          { id: 3, src: "/images/smallBusiness3.avif", alt: "Design 3" },
          { id: 4, src: "/images/samllBusiness4.avif", alt: "Design 4" },
        ],
      },
      Section2: {
        img: "/images/serviceSide.webp",
        heading: "Your Trusted Partner for Corporate Website Design",
        para: "At Nx Edge Solutions, we believe that a website is more than just a digital brochure; it's an essential tool for business growth. Our services focus on the following key areas:",
        user: {
          heading: "OUR DESIGN FOCUS AREAS",
          listData: [
            "User-Centered Design",
            "Responsive Layouts",
            "SEO Best Practices",
            "Branding and Visual Identity",
            "Content Management Systems",
            "Performance Optimization",
          ],
        },
        ManageOrder: {
          heading: "Efficient Project Management & Delivery",
          listData: [
            "Streamlined Design Process",
            "Collaborative Development Approach",
            "Regular Client Feedback Loops",
            "Data-Driven Design Decisions",
            "Timely Project Delivery",
            "Ongoing Support and Maintenance",
          ],
        },
      },
      cards: [
        {
          title: "Custom Web Design",
          description:
            "We create bespoke websites tailored to your brand identity, ensuring a unique online presence.",
          icon: (
            <FaLaptopCode className="text-5xl text-[#673ab7] mx-auto mb-4" />
          ),
        },
        {
          title: "SEO Optimization",
          description:
            "Our SEO strategies enhance your website's visibility, helping you reach a wider audience.",
          icon: <FaGlobe className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Content Management",
          description:
            "We integrate robust CMS solutions, allowing you to manage and update your website easily.",
          icon: <FaFileAlt className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Responsive Design",
          description:
            "Our websites are designed to be fully responsive, providing an optimal user experience across all devices.",
          icon: <FaMobileAlt className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Brand Development",
          description:
            "We help establish a strong brand presence through strategic design and messaging.",
          icon: <FaBullhorn className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Performance Analytics",
          description:
            "Our analytics services measure website performance, providing insights to drive improvements.",
          icon: <FaChartBar className="text-4xl text-[#673ab7] mx-auto" />,
        },
      ],
      section3: {
        heading: "Technologies We Use for Corporate Website Design",
        data: [
          {
            heading: "Content Management Systems",
            icon: <FaFileAlt />, // Use this icon for CMS
            description:
              "We utilize popular CMS platforms to enable easy content updates and management.",
          },
          {
            heading: "Web Analytics Tools",
            icon: <FaChartLine />, // Use this icon for Analytics
            description:
              "Our analytics tools provide insights into user behavior, helping optimize your site.",
          },
          {
            heading: "SEO Tools",
            icon: <FaSearch />, // Use this icon for SEO
            description:
              "We implement SEO tools to enhance your website's ranking and visibility on search engines.",
          },
          {
            heading: "E-commerce Platforms",
            icon: <FaLink />, // Use this icon for E-commerce
            description:
              "We offer seamless integration of e-commerce platforms for businesses looking to sell online.",
          },
          {
            heading: "Responsive Frameworks",
            icon: <FaCogs />, // Use this icon for frameworks
            description:
              "Our responsive design frameworks ensure your site performs well on all devices.",
          },
          {
            heading: "Cloud Hosting Solutions",
            icon: <FaCloud />, // Use this icon for Cloud Hosting
            description:
              "We leverage cloud hosting to provide scalable and secure solutions for your website.",
          },
        ],
      },

      section4: {
        heading:
          "Innovative Corporate Website Design Solutions - Partner with Us",
        para: "At Nx Edge Solutions, we are committed to transforming your business objectives into impactful online experiences. Our dedicated team collaborates closely with you to understand your unique challenges and tailor solutions that align with your strategic goals. Let’s start a conversation to explore your requirements, from website design to technology integration, ensuring a seamless process that exceeds your expectations.",
        data: [
          {
            title: "Customized Designs",
            description:
              "We design tailored corporate websites that align with your brand and goals.",
            icon: <FaClipboardList className="text-xl lg:text-2xl" />,
          },
          {
            title: "Expert Design Team",
            description:
              "Our experienced designers create visually appealing and functional websites.",
            icon: <FaUserShield className="text-xl lg:text-2xl" />,
          },
          {
            title: "Performance-Focused Solutions",
            description:
              "We deliver performance-oriented web solutions that drive measurable results.",
            icon: <FaChartPie className="text-xl lg:text-2xl" />,
          },
          {
            title: "Ongoing Support",
            description:
              "Our commitment includes ongoing support and continuous optimization of your website.",
            icon: <FaHandsHelping className="text-xl lg:text-2xl" />,
          },
        ],
        img: "/images/AllServiceImages/laptop.avif",
        lastPara:
          "In today's competitive digital landscape, a well-designed corporate website is crucial for business success. Our expert team at Nx Edge Solutions is dedicated to helping you navigate challenges and seize opportunities. With a focus on innovation and results, we create effective strategies that empower your business to thrive online.",
      },
    },
    androidapplicationdevelopment: {
      section1: {
        Breadcrumb: "web-app-development-android",
        heading: "Custom Android Application Development Solutions",
        para: "Are you looking to build a powerful Android application that engages users and drives business growth? Our Android Application Development services are tailored to meet your specific needs, ensuring that your app provides a seamless user experience while aligning with your brand's vision. Whether you are a startup or an established enterprise, our expert team at Nx Edge Solutions crafts high-quality, user-friendly applications that enhance your digital presence. We offer a comprehensive range of services, including UI/UX design, app testing, and deployment, to help you achieve a successful mobile strategy.",
        img: "/images/AllServiceImages/corporate.avif",
      },
      gallerySection: {
        title: "Empowering Businesses Through Exceptional Mobile Apps",
        subtitle: "Transform Your App Vision into Reality",
        paragraphs: [
          "At Nx Edge Solutions, we specialize in creating bespoke Android applications that align with your business objectives. Our team utilizes the latest technologies and design trends to develop engaging user experiences that capture your audience's attention. By focusing on your specific requirements, we help you turn your vision into a powerful mobile solution.",
          "Our commitment to excellence means that we prioritize your satisfaction. We analyze your business goals and user needs to create a tailored app that not only looks great but also performs well. Let us partner with you to build a strong mobile foundation that drives growth and visibility.",
        ],
        images: [
          { id: 1, src: "/images/sammBusiness.avif", alt: "Design 1" },
          { id: 2, src: "/images/smallBusiness2.avif", alt: "Design 2" },
          { id: 3, src: "/images/smallBusiness3.avif", alt: "Design 3" },
          { id: 4, src: "/images/samllBusiness4.avif", alt: "Design 4" },
        ],
      },
      Section2: {
        img: "/images/serviceSide.webp",
        heading: "Your Trusted Partner for Android Application Development",
        para: "At Nx Edge Solutions, we believe that a mobile application is more than just software; it's an essential tool for business growth. Our services focus on the following key areas:",
        user: {
          heading: "OUR APP DEVELOPMENT FOCUS AREAS",
          listData: [
            "User-Centered Design",
            "Performance Optimization",
            "Integration with Third-Party Services",
            "App Testing & Quality Assurance",
            "App Store Optimization",
            "Maintenance and Support",
          ],
        },
        ManageOrder: {
          heading: "Efficient Development Process & Delivery",
          listData: [
            "Streamlined Development Workflow",
            "Agile Project Management",
            "Regular Client Feedback Loops",
            "Data-Driven Development Decisions",
            "Timely App Delivery",
            "Ongoing Support and Maintenance",
          ],
        },
      },
      cards: [
        {
          title: "Custom App Development",
          description:
            "We create bespoke Android applications tailored to your brand identity, ensuring a unique mobile presence.",
          icon: (
            <FaLaptopCode className="text-5xl text-[#673ab7] mx-auto mb-4" />
          ),
        },
        {
          title: "UI/UX Design",
          description:
            "Our design strategies enhance user engagement and provide a seamless experience.",
          icon: <FaMobileAlt className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "App Testing",
          description:
            "We conduct thorough testing to ensure your app performs optimally across all devices.",
          icon: (
            <FaClipboardCheck className="text-4xl text-[#673ab7] mx-auto" />
          ),
        },
        {
          title: "Performance Optimization",
          description:
            "Our apps are designed to be efficient, ensuring fast load times and smooth functionality.",
          icon: <FaChartLine className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Integration Services",
          description:
            "We facilitate seamless integration with various APIs and third-party services.",
          icon: <FaLink className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Analytics & Insights",
          description:
            "Our analytics services measure app performance, providing insights to drive improvements.",
          icon: <FaChartBar className="text-4xl text-[#673ab7] mx-auto" />,
        },
      ],
      section3: {
        heading: "Technologies We Use for Android Application Development",
        data: [
          {
            heading: "Android SDK",
            icon: <FaMobileAlt />, // Use this icon for Android SDK
            description:
              "We utilize the Android SDK to develop high-quality applications with native features.",
          },
          {
            heading: "Firebase",
            icon: <FaDatabase />, // Use this icon for Firebase
            description:
              "Our apps leverage Firebase for real-time database management and analytics.",
          },
          {
            heading: "RESTful APIs",
            icon: <FaLink />, // Use this icon for APIs
            description:
              "We implement RESTful APIs for efficient data exchange between client and server.",
          },
          {
            heading: "Cloud Services",
            icon: <FaCloud />, // Use this icon for Cloud Services
            description:
              "We offer cloud-based solutions for data storage, scalability, and security.",
          },
          {
            heading: "Third-Party Integrations",
            icon: <FaPlug />, // Use this icon for Integrations
            description:
              "Our development process includes integrating various third-party services for enhanced functionality.",
          },
          {
            heading: "Version Control Systems",
            icon: <FaCodeBranch />, // Use this icon for Version Control
            description:
              "We leverage version control systems to manage code changes and collaborate efficiently.",
          },
        ],
      },
      section4: {
        heading:
          "Innovative Android Application Development Solutions - Partner with Us",
        para: "At Nx Edge Solutions, we are committed to transforming your business objectives into impactful mobile experiences. Our dedicated team collaborates closely with you to understand your unique challenges and tailor solutions that align with your strategic goals. Let’s start a conversation to explore your requirements, from app design to technology integration, ensuring a seamless process that exceeds your expectations.",
        data: [
          {
            title: "Customized App Solutions",
            description:
              "We design tailored Android applications that align with your brand and goals.",
            icon: <FaClipboardList className="text-xl lg:text-2xl" />,
          },
          {
            title: "Expert Development Team",
            description:
              "Our experienced developers create visually appealing and functional mobile applications.",
            icon: <FaUserShield className="text-xl lg:text-2xl" />,
          },
          {
            title: "Performance-Focused Applications",
            description:
              "We deliver performance-oriented mobile solutions that drive measurable results.",
            icon: <FaChartPie className="text-xl lg:text-2xl" />,
          },
          {
            title: "Ongoing Support",
            description:
              "Our commitment includes ongoing support and continuous optimization of your applications.",
            icon: <FaHandsHelping className="text-xl lg:text-2xl" />,
          },
        ],
        img: "/images/AllServiceImages/laptop.avif",
        lastPara:
          "In today's competitive mobile landscape, a well-developed Android application is crucial for business success. Our expert team at Nx Edge Solutions is dedicated to helping you navigate challenges and seize opportunities. With a focus on innovation and results, we create effective strategies that empower your business to thrive in the mobile age.",
      },
    },
    iosApplicationDevelopment: {
      section1: {
        Breadcrumb: "ios-application-development",
        heading: "Custom iOS Application Development Solutions",
        para: "Are you looking to create a powerful mobile application that reflects your brand's vision? Our iOS Application Development services are designed to meet your specific needs, ensuring that your app engages users and drives conversions. Whether you are a startup or an established enterprise, our expert team at Nx Edge Solutions develops stunning, user-friendly iOS applications that enhance your brand and improve your mobile presence. We provide a range of services, including UI/UX design, performance optimization, and app store deployment, to help you achieve a successful mobile strategy.",
        img: "/images/AllServiceImages/corporate.avif",
      },
      gallerySection: {
        title: "Empowering Brands Through Exceptional App Design",
        subtitle: "Transform Your Mobile Presence",
        paragraphs: [
          "At Nx Edge Solutions, we specialize in creating bespoke iOS applications that align with your business objectives. Our team utilizes the latest technologies and design trends to develop engaging user experiences that captivate your audience. By focusing on your specific requirements, we help you turn your vision into a powerful mobile reality.",
          "Our commitment to excellence means that we prioritize your satisfaction. We analyze your business goals and user needs to create a tailored application that not only looks great but also performs exceptionally. Let us partner with you to build a strong mobile foundation that drives growth and visibility.",
        ],
        images: [
          { id: 1, src: "/images/sammBusiness.avif", alt: "Design 1" },
          { id: 2, src: "/images/smallBusiness2.avif", alt: "Design 2" },
          { id: 3, src: "/images/smallBusiness3.avif", alt: "Design 3" },
          { id: 4, src: "/images/samllBusiness4.avif", alt: "Design 4" },
        ],
      },
      Section2: {
        img: "/images/serviceSide.webp",
        heading: "Your Trusted Partner for iOS Application Development",
        para: "At Nx Edge Solutions, we believe that an application is more than just a mobile tool; it's a crucial asset for business growth. Our services focus on the following key areas:",
        user: {
          heading: "OUR DEVELOPMENT FOCUS AREAS",
          listData: [
            "User-Centered Design",
            "Native App Development",
            "App Store Optimization",
            "Branding and Visual Identity",
            "Integration with APIs",
            "Performance Optimization",
          ],
        },
        ManageOrder: {
          heading: "Efficient Project Management & Delivery",
          listData: [
            "Streamlined Development Process",
            "Collaborative Approach",
            "Regular Client Feedback Loops",
            "Data-Driven Development Decisions",
            "Timely Project Delivery",
            "Ongoing Support and Maintenance",
          ],
        },
      },
      cards: [
        {
          title: "Custom App Design",
          description:
            "We create bespoke iOS applications tailored to your brand identity, ensuring a unique mobile presence.",
          icon: (
            <FaLaptopCode className="text-5xl text-[#673ab7] mx-auto mb-4" />
          ),
        },
        {
          title: "App Store Optimization",
          description:
            "Our optimization strategies enhance your app's visibility, helping you reach a wider audience.",
          icon: <FaGlobe className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Content Management",
          description:
            "We integrate robust CMS solutions, allowing you to manage and update your app content easily.",
          icon: <FaFileAlt className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Responsive Design",
          description:
            "Our applications are designed to be fully responsive, providing an optimal user experience across all devices.",
          icon: <FaMobileAlt className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Brand Development",
          description:
            "We help establish a strong brand presence through strategic design and messaging.",
          icon: <FaBullhorn className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Performance Analytics",
          description:
            "Our analytics services measure app performance, providing insights to drive improvements.",
          icon: <FaChartBar className="text-4xl text-[#673ab7] mx-auto" />,
        },
      ],
      section3: {
        heading: "Technologies We Use for iOS Application Development",
        data: [
          {
            heading: "Development Frameworks",
            icon: <FaFileAlt />, // Use this icon for Development Frameworks
            description:
              "We utilize popular frameworks to enable seamless and efficient iOS app development.",
          },
          {
            heading: "App Analytics Tools",
            icon: <FaChartLine />, // Use this icon for Analytics
            description:
              "Our analytics tools provide insights into user behavior, helping optimize your app.",
          },
          {
            heading: "SEO Tools",
            icon: <FaSearch />, // Use this icon for SEO
            description:
              "We implement SEO tools to enhance your app's ranking and visibility on app stores.",
          },
          {
            heading: "E-commerce Integration",
            icon: <FaLink />, // Use this icon for E-commerce
            description:
              "We offer seamless integration of e-commerce platforms for businesses looking to sell through their app.",
          },
          {
            heading: "Responsive Frameworks",
            icon: <FaCogs />, // Use this icon for frameworks
            description:
              "Our responsive design frameworks ensure your app performs well on all devices.",
          },
          {
            heading: "Cloud Hosting Solutions",
            icon: <FaCloud />, // Use this icon for Cloud Hosting
            description:
              "We leverage cloud hosting to provide scalable and secure solutions for your application.",
          },
        ],
      },

      section4: {
        heading:
          "Innovative iOS Application Development Solutions - Partner with Us",
        para: "At Nx Edge Solutions, we are committed to transforming your business objectives into impactful mobile experiences. Our dedicated team collaborates closely with you to understand your unique challenges and tailor solutions that align with your strategic goals. Let’s start a conversation to explore your requirements, from app design to technology integration, ensuring a seamless process that exceeds your expectations.",
        data: [
          {
            title: "Customized Designs",
            description:
              "We design tailored iOS applications that align with your brand and goals.",
            icon: <FaClipboardList className="text-xl lg:text-2xl" />,
          },
          {
            title: "Expert Development Team",
            description:
              "Our experienced developers create visually appealing and functional applications.",
            icon: <FaUserShield className="text-xl lg:text-2xl" />,
          },
          {
            title: "Performance-Focused Solutions",
            description:
              "We deliver performance-oriented app solutions that drive measurable results.",
            icon: <FaChartPie className="text-xl lg:text-2xl" />,
          },
          {
            title: "Ongoing Support",
            description:
              "Our commitment includes ongoing support and continuous optimization of your application.",
            icon: <FaHandsHelping className="text-xl lg:text-2xl" />,
          },
        ],
        img: "/images/AllServiceImages/laptop.avif",
        lastPara:
          "In today's competitive mobile landscape, a well-designed iOS application is crucial for business success. Our expert team at Nx Edge Solutions is dedicated to helping you navigate challenges and seize opportunities. With a focus on innovation and results, we create effective strategies that empower your business to thrive in the mobile space.",
      },
    },
    hybridapplicationdevelopment: {
      section1: {
        Breadcrumb: "hybrid-application-development",
        heading: "Custom Hybrid Application Development Solutions",
        para: "Are you looking to create a versatile mobile application that works seamlessly across multiple platforms? Our Hybrid Application Development services are designed to meet your specific needs, ensuring that your app engages users and drives conversions. Whether you are a startup or an established enterprise, our expert team at Nx Edge Solutions develops stunning, user-friendly hybrid applications that enhance your brand and improve your mobile presence. We provide a range of services, including UI/UX design, performance optimization, and app store deployment, to help you achieve a successful mobile strategy.",
        img: "/images/AllServiceImages/corporate.avif",
      },
      gallerySection: {
        title: "Empowering Brands Through Exceptional App Design",
        subtitle: "Transform Your Mobile Presence",
        paragraphs: [
          "At Nx Edge Solutions, we specialize in creating bespoke hybrid applications that align with your business objectives. Our team utilizes the latest technologies and design trends to develop engaging user experiences that captivate your audience. By focusing on your specific requirements, we help you turn your vision into a powerful mobile reality.",
          "Our commitment to excellence means that we prioritize your satisfaction. We analyze your business goals and user needs to create a tailored application that not only looks great but also performs exceptionally. Let us partner with you to build a strong mobile foundation that drives growth and visibility.",
        ],
        images: [
          { id: 1, src: "/images/sammBusiness.avif", alt: "Design 1" },
          { id: 2, src: "/images/smallBusiness2.avif", alt: "Design 2" },
          { id: 3, src: "/images/smallBusiness3.avif", alt: "Design 3" },
          { id: 4, src: "/images/samllBusiness4.avif", alt: "Design 4" },
        ],
      },
      Section2: {
        img: "/images/serviceSide.webp",
        heading: "Your Trusted Partner for Hybrid Application Development",
        para: "At Nx Edge Solutions, we believe that an application is more than just a mobile tool; it's a crucial asset for business growth. Our services focus on the following key areas:",
        user: {
          heading: "OUR DEVELOPMENT FOCUS AREAS",
          listData: [
            "User-Centered Design",
            "Cross-Platform Compatibility",
            "App Store Optimization",
            "Branding and Visual Identity",
            "Integration with APIs",
            "Performance Optimization",
          ],
        },
        ManageOrder: {
          heading: "Efficient Project Management & Delivery",
          listData: [
            "Streamlined Development Process",
            "Collaborative Approach",
            "Regular Client Feedback Loops",
            "Data-Driven Development Decisions",
            "Timely Project Delivery",
            "Ongoing Support and Maintenance",
          ],
        },
      },
      cards: [
        {
          title: "Custom App Design",
          description:
            "We create bespoke hybrid applications tailored to your brand identity, ensuring a unique mobile presence.",
          icon: (
            <FaLaptopCode className="text-5xl text-[#673ab7] mx-auto mb-4" />
          ),
        },
        {
          title: "App Store Optimization",
          description:
            "Our optimization strategies enhance your app's visibility, helping you reach a wider audience.",
          icon: <FaGlobe className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Content Management",
          description:
            "We integrate robust CMS solutions, allowing you to manage and update your app content easily.",
          icon: <FaFileAlt className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Responsive Design",
          description:
            "Our applications are designed to be fully responsive, providing an optimal user experience across all devices.",
          icon: <FaMobileAlt className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Brand Development",
          description:
            "We help establish a strong brand presence through strategic design and messaging.",
          icon: <FaBullhorn className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Performance Analytics",
          description:
            "Our analytics services measure app performance, providing insights to drive improvements.",
          icon: <FaChartBar className="text-4xl text-[#673ab7] mx-auto" />,
        },
      ],
      section3: {
        heading: "Technologies We Use for Hybrid Application Development",
        data: [
          {
            heading: "Development Frameworks",
            icon: <FaFileAlt />, // Use this icon for Development Frameworks
            description:
              "We utilize popular frameworks to enable seamless and efficient hybrid app development.",
          },
          {
            heading: "App Analytics Tools",
            icon: <FaChartLine />, // Use this icon for Analytics
            description:
              "Our analytics tools provide insights into user behavior, helping optimize your app.",
          },
          {
            heading: "SEO Tools",
            icon: <FaSearch />, // Use this icon for SEO
            description:
              "We implement SEO tools to enhance your app's ranking and visibility on app stores.",
          },
          {
            heading: "E-commerce Integration",
            icon: <FaLink />, // Use this icon for E-commerce
            description:
              "We offer seamless integration of e-commerce platforms for businesses looking to sell through their app.",
          },
          {
            heading: "Responsive Frameworks",
            icon: <FaCogs />, // Use this icon for frameworks
            description:
              "Our responsive design frameworks ensure your app performs well on all devices.",
          },
          {
            heading: "Cloud Hosting Solutions",
            icon: <FaCloud />, // Use this icon for Cloud Hosting
            description:
              "We leverage cloud hosting to provide scalable and secure solutions for your application.",
          },
        ],
      },

      section4: {
        heading:
          "Innovative Hybrid Application Development Solutions - Partner with Us",
        para: "At Nx Edge Solutions, we are committed to transforming your business objectives into impactful mobile experiences. Our dedicated team collaborates closely with you to understand your unique challenges and tailor solutions that align with your strategic goals. Let’s start a conversation to explore your requirements, from app design to technology integration, ensuring a seamless process that exceeds your expectations.",
        data: [
          {
            title: "Customized Designs",
            description:
              "We design tailored hybrid applications that align with your brand and goals.",
            icon: <FaClipboardList className="text-xl lg:text-2xl" />,
          },
          {
            title: "Expert Development Team",
            description:
              "Our experienced developers create visually appealing and functional applications.",
            icon: <FaUserShield className="text-xl lg:text-2xl" />,
          },
          {
            title: "Performance-Focused Solutions",
            description:
              "We deliver performance-oriented app solutions that drive measurable results.",
            icon: <FaChartPie className="text-xl lg:text-2xl" />,
          },
          {
            title: "Ongoing Support",
            description:
              "Our commitment includes ongoing support and continuous optimization of your application.",
            icon: <FaHandsHelping className="text-xl lg:text-2xl" />,
          },
        ],
        img: "/images/AllServiceImages/laptop.avif",
        lastPara:
          "In today's competitive mobile landscape, a well-designed hybrid application is crucial for business success. Our expert team at Nx Edge Solutions is dedicated to helping you navigate challenges and seize opportunities. With a focus on innovation and results, we create effective strategies that empower your business to thrive in the mobile space.",
      },
      // New section added for customer success stories
      successStories: {
        heading: "Customer Success Stories",
        para: "Discover how our hybrid application development services have transformed businesses across various industries. Here are some success stories that showcase our expertise:",
        stories: [
          {
            title: "E-commerce Transformation",
            description:
              "We helped a small retail company transition to a hybrid app, resulting in a 40% increase in sales within six months. The app's intuitive design and seamless payment integration improved customer satisfaction significantly.",
            img: "/images/successStory1.avif",
          },
          {
            title: "Streamlined Operations",
            description:
              "A logistics company partnered with us to develop a hybrid application that optimized their delivery processes. The app provided real-time tracking and reporting, reducing operational costs by 30%.",
            img: "/images/successStory2.avif",
          },
          {
            title: "Enhanced User Engagement",
            description:
              "We collaborated with a healthcare provider to create a hybrid application that facilitated patient appointments and telemedicine services. This led to a 50% increase in patient engagement and satisfaction.",
            img: "/images/successStory3.avif",
          },
        ],
      },
      // New section for FAQs
      faqSection: {
        heading: "Frequently Asked Questions",
        faqs: [
          {
            question: "What is hybrid application development?",
            answer:
              "Hybrid application development involves creating applications that can run on multiple platforms (iOS, Android) using a single codebase. This approach saves time and resources while ensuring a consistent user experience.",
          },
          {
            question:
              "What technologies do you use for hybrid app development?",
            answer:
              "We utilize frameworks like React Native, Flutter, and Ionic to build efficient and high-performance hybrid applications tailored to your needs.",
          },
          {
            question: "How long does it take to develop a hybrid application?",
            answer:
              "The timeline for developing a hybrid application varies based on complexity and features. Typically, projects can take anywhere from a few weeks to several months.",
          },
          {
            question: "Can you integrate third-party APIs into my hybrid app?",
            answer:
              "Yes, we can seamlessly integrate third-party APIs to enhance functionality and provide a better user experience for your hybrid application.",
          },
        ],
      },
    },
    mobileapplicationtesting: {
      section1: {
        Breadcrumb: "mobile-application-testing",
        heading: "Comprehensive Mobile Application Testing Solutions",
        para: "Are you seeking to ensure the quality and performance of your mobile application across various devices and platforms? Our Mobile Application Testing services are tailored to identify and resolve issues before your app goes live. Whether you are a startup or an established enterprise, our expert team at Nx Edge Solutions provides thorough testing processes to enhance your application's reliability and user satisfaction. We cover a range of testing types, including functional testing, performance testing, and security testing, to ensure your app meets the highest standards.",
        img: "/images/AllServiceImages/corporate.avif",
      },
      gallerySection: {
        title: "Empowering Brands Through Rigorous Testing",
        subtitle: "Ensure Quality Across All Devices",
        paragraphs: [
          "At Nx Edge Solutions, we specialize in delivering comprehensive mobile application testing services that align with your business objectives. Our dedicated team utilizes the latest tools and methodologies to develop robust testing strategies that ensure your app functions flawlessly across different devices and operating systems.",
          "Our commitment to excellence means that we prioritize quality and user experience. We analyze your application's requirements and conduct extensive testing to deliver a product that not only meets but exceeds user expectations. Let us partner with you to ensure your mobile application stands out in the competitive app marketplace.",
        ],
        images: [
          { id: 1, src: "/images/sammBusiness.avif", alt: "Testing 1" },
          { id: 2, src: "/images/smallBusiness2.avif", alt: "Testing 2" },
          { id: 3, src: "/images/smallBusiness3.avif", alt: "Testing 3" },
          { id: 4, src: "/images/samllBusiness4.avif", alt: "Testing 4" },
        ],
      },
      Section2: {
        img: "/images/serviceSide.webp",
        heading: "Your Trusted Partner for Mobile Application Testing",
        para: "At Nx Edge Solutions, we understand that testing is crucial to delivering a successful mobile application. Our services focus on the following key areas:",
        user: {
          heading: "OUR TESTING FOCUS AREAS",
          listData: [
            "Functional Testing",
            "Usability Testing",
            "Performance Testing",
            "Security Testing",
            "Compatibility Testing",
            "Automation Testing",
          ],
        },
        ManageOrder: {
          heading: "Efficient Testing Management & Delivery",
          listData: [
            "Comprehensive Test Plans",
            "Real Device Testing",
            "Agile Testing Methodologies",
            "Detailed Bug Reporting",
            "Continuous Integration",
            "Post-Release Support and Maintenance",
          ],
        },
      },
      cards: [
        {
          title: "Functional Testing",
          description:
            "We ensure all features of your app work as intended, identifying any bugs or issues before launch.",
          icon: (
            <FaClipboardCheck className="text-5xl text-[#673ab7] mx-auto mb-4" />
          ),
        },
        {
          title: "Performance Testing",
          description:
            "Our performance tests assess how your app behaves under various conditions, ensuring speed and responsiveness.",
          icon: <FaTachometerAlt className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Security Testing",
          description:
            "We conduct thorough security assessments to safeguard your app against vulnerabilities and data breaches.",
          icon: <FaShieldAlt className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Compatibility Testing",
          description:
            "Our testing ensures your app runs smoothly on different devices, screen sizes, and operating systems.",
          icon: <FaMobileAlt className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Usability Testing",
          description:
            "We evaluate the user experience to ensure that your app is intuitive and user-friendly, enhancing overall satisfaction.",
          icon: <FaUserCheck className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Automation Testing",
          description:
            "We implement automation testing to increase efficiency and accuracy in the testing process, reducing time to market.",
          icon: <FaRobot className="text-4xl text-[#673ab7] mx-auto" />,
        },
      ],
      section3: {
        heading: "Technologies We Use for Mobile Application Testing",
        data: [
          {
            heading: "Testing Frameworks",
            icon: <FaFileAlt />, // Use this icon for Testing Frameworks
            description:
              "We utilize popular testing frameworks to ensure comprehensive coverage and accurate results.",
          },
          {
            heading: "Bug Tracking Tools",
            icon: <FaBug />, // Use this icon for Bug Tracking
            description:
              "Our bug tracking tools streamline the reporting and resolution of issues, ensuring quick fixes.",
          },
          {
            heading: "Performance Monitoring Tools",
            icon: <FaChartLine />, // Use this icon for Performance Monitoring
            description:
              "We use advanced monitoring tools to analyze app performance and provide actionable insights.",
          },
          {
            heading: "Security Assessment Tools",
            icon: <FaLock />, // Use this icon for Security
            description:
              "Our security tools help identify vulnerabilities and ensure compliance with industry standards.",
          },
          {
            heading: "Automation Testing Tools",
            icon: <FaCogs />, // Use this icon for Automation
            description:
              "We leverage automation tools to enhance testing efficiency and accuracy for repeatable test cases.",
          },
          {
            heading: "Device Cloud Services",
            icon: <FaCloud />, // Use this icon for Device Cloud
            description:
              "We utilize device cloud services for real device testing across a wide range of environments.",
          },
        ],
      },
      section4: {
        heading:
          "Innovative Mobile Application Testing Solutions - Partner with Us",
        para: "At Nx Edge Solutions, we are committed to ensuring your mobile application is flawless before it reaches your users. Our dedicated team collaborates closely with you to understand your unique challenges and tailor solutions that align with your quality assurance goals. Let’s start a conversation to explore your requirements, from testing strategies to performance optimization, ensuring a seamless process that exceeds your expectations.",
        data: [
          {
            title: "Customized Testing Plans",
            description:
              "We create tailored testing plans that align with your application’s specific needs and requirements.",
            icon: <FaClipboardList className="text-xl lg:text-2xl" />,
          },
          {
            title: "Expert Testing Team",
            description:
              "Our experienced testers ensure comprehensive coverage and a high-quality user experience.",
            icon: <FaUserShield className="text-xl lg:text-2xl" />,
          },
          {
            title: "Quality-Focused Solutions",
            description:
              "We deliver testing solutions that prioritize quality and user satisfaction, helping you build trust.",
            icon: <FaChartPie className="text-xl lg:text-2xl" />,
          },
          {
            title: "Ongoing Support",
            description:
              "Our commitment includes continuous support and optimization even after your app goes live.",
            icon: <FaHandsHelping className="text-xl lg:text-2xl" />,
          },
        ],
        img: "/images/AllServiceImages/laptop.avif",
        lastPara:
          "In today's competitive mobile landscape, ensuring a bug-free application is crucial for your business success. Our expert team at Nx Edge Solutions is dedicated to helping you navigate challenges and seize opportunities. With a focus on quality assurance and user experience, we create effective strategies that empower your business to thrive in the mobile space.",
      },
    },
    qualityAssurance: {
      section1: {
        Breadcrumb: "quality-assurance",
        heading: "Comprehensive Quality Assurance Solutions",
        para: "At NX Edge Solutions, we understand that quality is paramount in software development. Our Quality Assurance services are designed to ensure your applications perform flawlessly across all platforms. From functional testing to performance optimization, our expert QA team employs industry best practices to deliver high-quality products that meet your business goals. Whether you’re launching a new application or improving an existing one, our comprehensive testing strategies help ensure a seamless user experience.",
        img: "/images/AllServiceImages/corporate.avif",
      },
      gallerySection: {
        title: "Elevating Standards Through Rigorous Testing",
        subtitle: "Ensure Your Software Meets the Highest Quality Standards",
        paragraphs: [
          "At NX Edge Solutions, we specialize in delivering tailored QA services that align with your unique business requirements. Our meticulous approach ensures that every feature of your application is thoroughly tested and validated, guaranteeing that your product functions as intended and provides an excellent user experience.",
          "Our commitment to quality means we leverage the latest testing technologies and methodologies, enabling us to detect and resolve issues early in the development process. Let us help you build confidence in your software solutions and enhance your brand reputation through rigorous quality assurance.",
        ],
        images: [
          { id: 1, src: "/images/sammBusiness.avif", alt: "Testing 1" },
          { id: 2, src: "/images/smallBusiness2.avif", alt: "Testing 2" },
          { id: 3, src: "/images/smallBusiness3.avif", alt: "Testing 3" },
          { id: 4, src: "/images/samllBusiness4.avif", alt: "Testing 4" },
        ],
      },
      Section2: {
        img: "/images/serviceSide.webp",
        heading: "Your Partner in Quality Assurance Excellence",
        para: "At NX Edge Solutions, we believe that quality assurance is an integral part of the development lifecycle. Our QA services focus on the following key areas:",
        user: {
          heading: "OUR QA FOCUS AREAS",
          listData: [
            "Functional Testing",
            "Performance Testing",
            "Security Testing",
            "Usability Testing",
            "Automation Testing",
            "Regression Testing",
          ],
        },
        ManageOrder: {
          heading: "Streamlined Testing Process",
          listData: [
            "Test Planning and Strategy",
            "Test Case Development",
            "Automated Testing Frameworks",
            "Continuous Integration Testing",
            "Defect Tracking and Reporting",
            "Post-Deployment Monitoring",
          ],
        },
      },
      cards: [
        {
          title: "Functional Testing",
          description:
            "We ensure that all functionalities of your application perform as expected under various conditions.",
          icon: (
            <FaClipboardCheck className="text-5xl text-[#673ab7] mx-auto mb-4" />
          ),
        },
        {
          title: "Performance Testing",
          description:
            "Our performance testing measures application responsiveness and stability under load to prevent bottlenecks.",
          icon: <FaTachometerAlt className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Security Testing",
          description:
            "We conduct thorough security assessments to identify vulnerabilities and protect your application from threats.",
          icon: <FaLock className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Usability Testing",
          description:
            "Our usability testing evaluates the user experience to ensure your application is intuitive and user-friendly.",
          icon: <FaUserCheck className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Automation Testing",
          description:
            "We implement automated testing processes to enhance efficiency and accuracy in your quality assurance.",
          icon: <FaRobot className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Regression Testing",
          description:
            "Our regression testing checks existing functionalities after updates or changes to ensure nothing is broken.",
          icon: <FaBug className="text-4xl text-[#673ab7] mx-auto" />,
        },
      ],
      section3: {
        heading: "Technologies We Use for Quality Assurance",
        data: [
          {
            heading: "Automated Testing Tools",
            icon: <FaCogs />, // Use this icon for tools
            description:
              "We utilize automated testing tools to streamline our testing processes and improve efficiency.",
          },
          {
            heading: "Performance Testing Tools",
            icon: <FaChartLine />, // Use this icon for Performance
            description:
              "Our performance testing tools help simulate user load and identify performance bottlenecks.",
          },
          {
            heading: "Security Testing Tools",
            icon: <FaLock />, // Use this icon for Security
            description:
              "We leverage advanced security testing tools to protect your application from potential threats.",
          },
          {
            heading: "Continuous Integration",
            icon: <FaPlug />, // Use this icon for CI
            description:
              "Our CI practices ensure that quality checks are part of the development process from the beginning.",
          },
          {
            heading: "Reporting and Analytics",
            icon: <FaChartPie />, // Use this icon for Analytics
            description:
              "We provide detailed reports and analytics on test results, helping you make informed decisions.",
          },
          {
            heading: "Cloud Testing Solutions",
            icon: <FaCloud />, // Use this icon for Cloud
            description:
              "Our cloud-based testing solutions allow for scalable testing across different environments.",
          },
        ],
      },
      section4: {
        heading: "Elevate Your Software Quality with Our QA Solutions",
        para: "At NX Edge Solutions, our mission is to ensure your software meets the highest quality standards. Our dedicated QA team works closely with you to understand your unique needs and deliver tailored solutions that enhance your product's reliability and performance. Let’s work together to achieve excellence in your software applications.",
        data: [
          {
            title: "Customized Testing Strategies",
            description:
              "We develop testing strategies tailored to your application’s unique requirements.",
            icon: <FaClipboardList className="text-xl lg:text-2xl" />,
          },
          {
            title: "Expert QA Professionals",
            description:
              "Our experienced QA team brings deep industry knowledge to ensure the highest quality.",
            icon: <FaUserShield className="text-xl lg:text-2xl" />,
          },
          {
            title: "Comprehensive Testing Coverage",
            description:
              "We provide thorough testing coverage across all aspects of your application.",
            icon: <FaChartPie className="text-xl lg:text-2xl" />,
          },
          {
            title: "Ongoing Support",
            description:
              "Our commitment to quality includes ongoing support and continuous improvement.",
            icon: <FaHandsHelping className="text-xl lg:text-2xl" />,
          },
        ],
        img: "/images/AllServiceImages/laptop.avif",
        lastPara:
          "In today’s competitive software landscape, robust quality assurance is essential for success. At NX Edge Solutions, we are dedicated to helping you navigate challenges and seize opportunities through comprehensive QA services. Together, we can build exceptional software solutions that meet your business needs and exceed user expectations.",
      },
    },
    searchEngineOptimization: {
      section1: {
        Breadcrumb: "search-engine-optimization",
        heading: "Custom Search Engine Optimization Solutions",
        para: "In today's digital landscape, having a strong online presence is vital for success. At Nx Edge Solutions, our Search Engine Optimization (SEO) services are tailored to elevate your website's visibility and drive organic traffic. Whether you are a startup or an established brand, our expert team employs proven strategies to enhance your search engine rankings, ensuring your business is easily found by potential customers. We focus on comprehensive keyword research, on-page and off-page optimization, and continuous performance analysis to help you achieve your digital marketing goals.",
        img: "/images/AllServiceImages/corporate.avif",
      },
      gallerySection: {
        title: "Boost Your Online Presence with Expert SEO",
        subtitle: "Transform Your Digital Strategy",
        paragraphs: [
          "At Nx Edge Solutions, we understand that SEO is not just about rankings; it's about creating a seamless user experience that drives conversions. Our dedicated team works closely with you to develop a customized SEO strategy that aligns with your business objectives. From optimizing your website's structure to enhancing content quality, we cover every aspect to ensure your online success.",
          "Our commitment to delivering results means that we continuously monitor and refine our strategies based on data-driven insights. Let us help you harness the power of SEO to reach new heights and engage your target audience effectively.",
        ],
        images: [
          { id: 1, src: "/images/sammBusiness.avif", alt: "Design 1" },
          { id: 2, src: "/images/smallBusiness2.avif", alt: "Design 2" },
          { id: 3, src: "/images/smallBusiness3.avif", alt: "Design 3" },
          { id: 4, src: "/images/samllBusiness4.avif", alt: "Design 4" },
        ],
      },
      Section2: {
        img: "/images/serviceSide.webp",
        heading: "Your Trusted Partner for SEO Excellence",
        para: "At Nx Edge Solutions, we believe that effective SEO is the foundation of digital marketing success. Our services focus on the following key areas:",
        user: {
          heading: "OUR SEO FOCUS AREAS",
          listData: [
            "Keyword Research & Strategy",
            "On-Page Optimization",
            "Technical SEO",
            "Content Marketing",
            "Link Building",
            "Local SEO",
          ],
        },
        ManageOrder: {
          heading: "Effective Project Management & Delivery",
          listData: [
            "Tailored SEO Strategies",
            "Transparent Reporting",
            "Collaborative Approach",
            "Regular Performance Reviews",
            "Agile Project Management",
            "Ongoing Support and Optimization",
          ],
        },
      },
      cards: [
        {
          title: "Comprehensive SEO Audits",
          description:
            "We conduct thorough SEO audits to identify opportunities for improvement and develop a roadmap for success.",
          icon: (
            <FaClipboardCheck className="text-5xl text-[#673ab7] mx-auto mb-4" />
          ),
        },
        {
          title: "Content Optimization",
          description:
            "Our content optimization strategies ensure your website content is relevant, engaging, and optimized for search engines.",
          icon: <FaEdit className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Link Building Strategies",
          description:
            "We implement effective link-building techniques to enhance your website’s authority and boost search rankings.",
          icon: <FaLink className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Mobile SEO",
          description:
            "With the rise of mobile users, we focus on optimizing your site for mobile devices to improve user experience and rankings.",
          icon: <FaMobileAlt className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Local SEO Services",
          description:
            "Our local SEO strategies ensure your business appears in local search results, driving targeted traffic to your site.",
          icon: <FaBullhorn className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Performance Tracking & Analytics",
          description:
            "We provide detailed analytics and performance tracking to measure the effectiveness of your SEO efforts and adjust strategies as needed.",
          icon: <FaChartLine className="text-4xl text-[#673ab7] mx-auto" />,
        },
      ],
      section3: {
        heading: "Technologies We Use for Effective SEO",
        data: [
          {
            heading: "SEO Tools",
            icon: <FaSearch />, // Use this icon for SEO
            description:
              "We utilize advanced SEO tools to analyze performance and identify growth opportunities.",
          },
          {
            heading: "Analytics Platforms",
            icon: <FaChartLine />, // Use this icon for Analytics
            description:
              "Our analytics platforms provide insights into traffic patterns and user behavior, guiding our strategies.",
          },
          {
            heading: "Content Management Systems",
            icon: <FaFileAlt />, // Use this icon for Content Management
            description:
              "We work with various CMS platforms to optimize your content for search engines effectively.",
          },
          {
            heading: "Keyword Research Tools",
            icon: <FaSearch />, // Use this icon for Keyword Research
            description:
              "We leverage keyword research tools to identify high-value search terms for your business.",
          },
          {
            heading: "Link Building Tools",
            icon: <FaLink />, // Use this icon for Link Building
            description:
              "Our link-building tools help identify opportunities for acquiring high-quality backlinks.",
          },
          {
            heading: "Local SEO Solutions",
            icon: <FaBullhorn />, // Use this icon for Local SEO
            description:
              "We implement local SEO solutions to enhance visibility in location-based searches.",
          },
        ],
      },
      section4: {
        heading:
          "Transform Your Digital Presence with Our SEO Solutions - Partner with Us",
        para: "At Nx Edge Solutions, we are dedicated to driving your online success through expert SEO strategies. Our team collaborates closely with you to understand your unique challenges and objectives, crafting tailored solutions that align with your business goals. Let's initiate a dialogue to explore how we can enhance your website's visibility and engagement through proven SEO techniques.",
        data: [
          {
            title: "Tailored SEO Strategies",
            description:
              "We create customized SEO plans that cater to your specific business needs and goals.",
            icon: <FaClipboardList className="text-xl lg:text-2xl" />,
          },
          {
            title: "Expert SEO Team",
            description:
              "Our experienced SEO specialists utilize industry best practices to improve your website's performance.",
            icon: <FaUserShield className="text-xl lg:text-2xl" />,
          },
          {
            title: "Ongoing Optimization",
            description:
              "We continuously monitor and optimize your SEO strategies for sustained success.",
            icon: <FaHandsHelping className="text-xl lg:text-2xl" />,
          },
          {
            title: "Transparent Reporting",
            description:
              "Our transparent reporting keeps you informed about your SEO performance and progress.",
            icon: <FaChartPie className="text-xl lg:text-2xl" />,
          },
        ],
        img: "/images/AllServiceImages/laptop.avif",
        lastPara:
          "In a competitive online landscape, a robust SEO strategy is essential for business success. At Nx Edge Solutions, we are committed to helping you navigate challenges and capitalize on opportunities. With a focus on innovation and results, we develop effective strategies that empower your business to thrive in the digital space.",
      },
    },
    payPerClickService: {
      section1: {
        Breadcrumb: "pay-per-click-service",
        heading: "Custom Pay-Per-Click (PPC) Solutions",
        para: "Nx Edge Solutions provides top-tier Pay-Per-Click (PPC) advertising services designed to boost your business's visibility and generate targeted leads. Whether you are a startup or an established business, our PPC experts craft highly effective campaigns that focus on your unique goals and audience. We specialize in creating strategies that deliver measurable results, optimizing ad performance across platforms like Google Ads, Bing Ads, and social media channels.",
        img: "/images/AllServiceImages/corporate.avif",
      },
      gallerySection: {
        title: "Maximize ROI with Our PPC Expertise",
        subtitle: "Drive Immediate Traffic and Conversions",
        paragraphs: [
          "At Nx Edge Solutions, we tailor our PPC services to meet your specific business needs, ensuring that every dollar you spend contributes to your ROI. Our team of specialists works meticulously on keyword research, ad copy creation, and continuous optimization to ensure your campaigns drive maximum impact.",
          "From small businesses to large enterprises, we provide transparent and data-driven PPC strategies that help you capture leads, increase conversions, and outshine your competition. Let us handle your PPC efforts while you focus on growing your business.",
        ],
        images: [
          { id: 1, src: "/images/sammBusiness.avif", alt: "PPC Campaign" },
          {
            id: 2,
            src: "/images/smallBusiness2.avif",
            alt: "Effective Ad Targeting",
          },
          {
            id: 3,
            src: "/images/smallBusiness3.avif",
            alt: "Optimized Results",
          },
          {
            id: 4,
            src: "/images/samllBusiness4.avif",
            alt: "Conversion Strategy",
          },
        ],
      },
      Section2: {
        img: "/images/serviceSide.webp",
        heading: "Your Partner for High-Impact PPC Campaigns",
        para: "At Nx Edge Solutions, we combine creativity, strategy, and technology to build PPC campaigns that deliver results. Our comprehensive services focus on the following key areas:",
        user: {
          heading: "OUR PPC FOCUS AREAS",
          listData: [
            "Keyword Research & Bidding Strategy",
            "Ad Copywriting & Creative Design",
            "Landing Page Optimization",
            "A/B Testing & Performance Tracking",
            "Google & Bing Ads Management",
            "Social Media Advertising",
          ],
        },
        ManageOrder: {
          heading: "Effective PPC Campaign Management",
          listData: [
            "Dedicated PPC Specialists",
            "Real-Time Analytics & Reporting",
            "Ongoing Campaign Adjustments",
            "Customized Campaign Strategies",
            "Conversion Tracking & Optimization",
            "Monthly Performance Reviews",
          ],
        },
      },
      cards: [
        {
          title: "Targeted Keyword Research",
          description:
            "We perform in-depth keyword research to ensure your ads appear in front of the right audience at the right time.",
          icon: <FaSearch className="text-5xl text-[#673ab7] mx-auto mb-4" />,
        },
        {
          title: "Engaging Ad Copy",
          description:
            "Our expert copywriters create compelling ad content that drives clicks and conversions.",
          icon: <FaEdit className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Bid Strategy & Budget Management",
          description:
            "We manage your PPC budget effectively, ensuring optimal bid strategies for the highest ROI.",
          icon: <FaDollarSign className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Landing Page Optimization",
          description:
            "We optimize landing pages to enhance user experience and boost conversion rates.",
          icon: <FaLaptopCode className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Conversion Tracking & Analytics",
          description:
            "Our tools provide deep insights into ad performance, allowing for ongoing adjustments and improvements.",
          icon: <FaChartLine className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Remarketing Campaigns",
          description:
            "We set up effective remarketing campaigns to re-engage visitors and encourage them to complete desired actions.",
          icon: <FaRetweet className="text-4xl text-[#673ab7] mx-auto" />,
        },
      ],
      section3: {
        heading: "Technologies We Use for Effective PPC",
        data: [
          {
            heading: "Google Ads",
            icon: <FaSearch />, // Use this icon for Google Ads
            description:
              "We manage highly targeted Google Ads campaigns to reach your potential customers effectively.",
          },
          {
            heading: "Bing Ads",
            icon: <FaSearch />, // Use this icon for Bing Ads
            description:
              "Our Bing Ads management services help expand your reach across different search platforms.",
          },
          {
            heading: "Social Media Ads",
            icon: <FaBullhorn />, // Use this icon for Social Media Ads
            description:
              "We create engaging ad campaigns on platforms like Facebook, Instagram, and LinkedIn to drive traffic.",
          },
          {
            heading: "Conversion Optimization Tools",
            icon: <FaClipboardCheck />, // Use this icon for Conversion Optimization
            description:
              "Our team uses advanced tools to monitor and enhance conversion rates for your PPC campaigns.",
          },
          {
            heading: "Analytics Platforms",
            icon: <FaChartLine />, // Use this icon for Analytics Platforms
            description:
              "We provide detailed reports and analytics to track the performance of your campaigns and adjust as needed.",
          },
          {
            heading: "A/B Testing Tools",
            icon: <FaChartBar />, // Use this icon for A/B Testing Tools
            description:
              "We use A/B testing tools to experiment with different ad creatives, landing pages, and strategies to optimize results.",
          },
        ],
      },
      section4: {
        heading:
          "Maximize Your Advertising Spend with Our Expert PPC Solutions",
        para: "At Nx Edge Solutions, we know that every business is unique, which is why we provide tailored Pay-Per-Click services designed to meet your specific goals. Our team of PPC experts will work closely with you to create campaigns that drive targeted traffic and increase your ROI. With a data-driven approach and real-time optimizations, we ensure your ads perform at their best and deliver tangible results.",
        data: [
          {
            title: "Tailored PPC Campaigns",
            description:
              "We customize every PPC campaign to meet your business objectives and target audience.",
            icon: <FaClipboardList className="text-xl lg:text-2xl" />,
          },
          {
            title: "Dedicated PPC Specialists",
            description:
              "Our team of experts manages every aspect of your PPC campaigns, from setup to optimization.",
            icon: <FaUserShield className="text-xl lg:text-2xl" />,
          },
          {
            title: "Ongoing Campaign Optimization",
            description:
              "We continuously monitor and adjust your campaigns for maximum performance and ROI.",
            icon: <FaHandsHelping className="text-xl lg:text-2xl" />,
          },
          {
            title: "Transparent Reporting",
            description:
              "Our transparent reporting keeps you informed about your PPC performance and key metrics.",
            icon: <FaChartPie className="text-xl lg:text-2xl" />,
          },
        ],
        img: "/images/AllServiceImages/laptop.avif",
        lastPara:
          "Whether you’re looking to generate more leads, increase sales, or boost brand awareness, Nx Edge Solutions is here to help. Our tailored PPC solutions provide the precision and scalability your business needs to grow. Partner with us to maximize your advertising spend and achieve measurable results.",
      },
    },
    socialMediaMarketingService: {
      section1: {
        Breadcrumb: "social-media-marketing",
        heading: "Social Media Marketing Services",
        para: "Unlock the full potential of social media with Nx Edge Solutions’ Social Media Marketing Services. We specialize in developing targeted strategies that amplify your brand’s online presence and engage your audience on platforms like Facebook, Instagram, Twitter, and LinkedIn. Our services are designed to help you grow your brand, increase traffic, and generate quality leads that convert.",
        img: "/images/AllServiceImages/corporate.avif",
      },
      gallerySection: {
        title: "Enhancing Your Brand Presence on Social Media",
        subtitle: "Drive Engagement and Build Strong Relationships",
        paragraphs: [
          "At Nx Edge Solutions, we understand the power of social media in shaping your brand’s identity. Our social media marketing services focus on crafting personalized strategies that resonate with your target audience, build trust, and promote long-lasting relationships.",
          "Whether it's organic growth or paid advertising, we ensure your brand stays visible and relevant in the crowded social media landscape. With our expertise, we boost your brand's reach and drive meaningful engagement that translates into real-world results.",
        ],
        images: [
          { id: 1, src: "/images/sammBusiness.avif", alt: "PPC Campaign" },
          {
            id: 2,
            src: "/images/smallBusiness2.avif",
            alt: "Effective Ad Targeting",
          },
          {
            id: 3,
            src: "/images/smallBusiness3.avif",
            alt: "Optimized Results",
          },
          {
            id: 4,
            src: "/images/samllBusiness4.avif",
            alt: "Conversion Strategy",
          },
        ],
      },
      Section2: {
        img: "/images/serviceSide.webp",
        heading: "Why Choose Nx Edge Solutions for Social Media Marketing?",
        para: "Our approach to social media marketing is rooted in a deep understanding of the platforms, trends, and algorithms that govern social engagement. We focus on driving measurable results that align with your business goals.",
        user: {
          heading: "Our Key Focus Areas",
          listData: [
            "Audience Targeting and Segmentation",
            "Content Strategy and Creation",
            "Social Media Advertising",
            "Community Management",
            "Analytics and Performance Tracking",
            "Brand Voice and Messaging",
          ],
        },
        ManageOrder: {
          heading: "How We Drive Results",
          listData: [
            "Custom Social Strategies",
            "Data-Driven Campaigns",
            "Real-Time Engagement",
            "Comprehensive Reporting",
            "Scalable Solutions",
            "Continuous Optimization",
          ],
        },
      },
      cards: [
        {
          title: "Content Creation & Curation",
          description:
            "We create engaging, high-quality content that resonates with your audience and promotes interaction.",
          icon: <FaEdit className="text-5xl text-[#673ab7] mx-auto mb-4" />,
        },
        {
          title: "Targeted Advertising",
          description:
            "Our targeted ad campaigns are designed to reach the right audience, maximizing your ROI on social platforms.",
          icon: <FaBullhorn className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Performance Analytics",
          description:
            "Our analytics tools track the success of your social media campaigns and provide insights for improvement.",
          icon: <FaChartBar className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Community Management",
          description:
            "We build and manage your online community, fostering meaningful conversations and engagement with your brand.",
          icon: <FaUsers className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Influencer Collaboration",
          description:
            "We partner with relevant influencers to amplify your brand’s message and broaden your reach.",
          icon: <FaShareAlt className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Social Media Consulting",
          description:
            "Our experts provide tailored advice on how to enhance your social media presence and performance.",
          icon: <FaLightbulb className="text-4xl text-[#673ab7] mx-auto" />,
        },
      ],
      section3: {
        heading: "Platforms We Specialize In",
        data: [
          {
            heading: "Facebook Marketing",
            icon: <FaFacebook />,
            description:
              "Leverage Facebook's vast user base to reach a broader audience with targeted ads and engaging content.",
          },
          {
            heading: "Instagram Marketing",
            icon: <FaInstagram />,
            description:
              "Create visually stunning campaigns that capture attention and drive engagement on Instagram.",
          },
          {
            heading: "LinkedIn Marketing",
            icon: <FaLinkedin />,
            description:
              "Position your brand as an industry leader with professional content and ads on LinkedIn.",
          },
          {
            heading: "Twitter Marketing",
            icon: <FaTwitter />,
            description:
              "Stay relevant with real-time updates and trending conversations on Twitter to boost your brand's presence.",
          },
          {
            heading: "YouTube Marketing",
            icon: <FaYoutube />,
            description:
              "Utilize YouTube to create video content that educates, entertains, and converts your target audience.",
          },
        ],
      },
      section4: {
        heading: "Maximize Your Social Media Impact with Nx Edge Solutions",
        para: "Nx Edge Solutions offers innovative and results-driven social media marketing services to help your business succeed online. Whether you're looking to increase brand awareness, drive website traffic, or boost conversions, our customized strategies are tailored to meet your specific needs.",
        data: [
          {
            title: "Strategic Campaigns",
            description:
              "We craft strategic social media campaigns that align with your business goals and deliver measurable results.",
            icon: <FaClipboardList className="text-xl lg:text-2xl" />,
          },
          {
            title: "Expert Team",
            description:
              "Our experienced social media specialists stay updated with the latest trends to ensure your campaigns are successful.",
            icon: <FaUserShield className="text-xl lg:text-2xl" />,
          },
          {
            title: "Data-Driven Insights",
            description:
              "We provide in-depth reporting and insights, allowing you to understand your social media performance.",
            icon: <FaChartPie className="text-xl lg:text-2xl" />,
          },
          {
            title: "Dedicated Support",
            description:
              "Our team offers ongoing support to ensure your social media strategy continues to evolve and thrive.",
            icon: <FaHandsHelping className="text-xl lg:text-2xl" />,
          },
        ],
        img: "/images/AllServiceImages/socialMediaMarketing.avif",
        lastPara:
          "At Nx Edge Solutions, we are committed to delivering outstanding social media marketing services that empower your business to reach new heights. Contact us today to explore how we can help your brand succeed on social platforms.",
      },
    },
    localSeoServices: {
      section1: {
        Breadcrumb: "local-seo-services",
        heading: "Local SEO Services",
        para: "Boost your business visibility in local search results with Nx Edge Solutions’ Local SEO Services. We specialize in optimizing your online presence to attract customers from your local community, ensuring that your business stands out in local searches and maps results. Whether you’re a small business or a multi-location company, we help you drive more local traffic and grow your customer base.",
        img: "/images/AllServiceImages/corporate.avif",
      },
      gallerySection: {
        title: "Dominate Local Search Results",
        subtitle: "Increase Foot Traffic and Boost Local Visibility",
        paragraphs: [
          "At Nx Edge Solutions, we understand the importance of appearing in local search results. Our Local SEO services focus on optimizing your business for geo-targeted searches, ensuring you connect with customers in your area when they need your services.",
          "We implement strategies tailored to your location, including Google My Business optimization, local citations, and localized content, helping you outrank your competition and drive more relevant traffic to your business.",
        ],
        images: [
          { id: 1, src: "/images/sammBusiness.avif", alt: "PPC Campaign" },
          {
            id: 2,
            src: "/images/smallBusiness2.avif",
            alt: "Effective Ad Targeting",
          },
          {
            id: 3,
            src: "/images/smallBusiness3.avif",
            alt: "Optimized Results",
          },
          {
            id: 4,
            src: "/images/samllBusiness4.avif",
            alt: "Conversion Strategy",
          },
        ],
      },
      Section2: {
        img: "/images/serviceSide.webp",
        heading: "Why Choose Nx Edge Solutions for Local SEO?",
        para: "Our Local SEO approach is designed to ensure your business appears prominently in local search results. We use the latest strategies and tools to enhance your visibility and attract more customers from your local area.",
        user: {
          heading: "Our Key Focus Areas",
          listData: [
            "Google My Business Optimization",
            "Localized Keyword Research",
            "Online Review Management",
            "Local Citation Building",
            "Mobile Optimization",
            "Geo-Targeted Content",
          ],
        },
        ManageOrder: {
          heading: "How We Achieve Local Success",
          listData: [
            "Accurate Business Listings",
            "Localized Content Strategies",
            "Comprehensive Reporting",
            "Map Pack Optimization",
            "Review and Reputation Management",
            "Ongoing SEO Adjustments",
          ],
        },
      },
      cards: [
        {
          title: "Google My Business",
          description:
            "Optimize your Google My Business profile to enhance your visibility in local search results and Google Maps.",
          icon: <FaGlobe className="text-5xl text-[#673ab7] mx-auto mb-4" />,
        },
        {
          title: "Local Citation Building",
          description:
            "We ensure your business is listed accurately across all major online directories to boost your local presence.",
          icon: <FaClipboardList className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Review Management",
          description:
            "Manage online reviews to enhance your reputation and attract more customers to your business.",
          icon: <FaStar className="text-4xl text-[#673ab7] mx-auto" />, // Example star icon, can replace with correct import.
        },
        {
          title: "Geo-Targeted Content",
          description:
            "Create and optimize content that speaks directly to your local audience and improves local search rankings.",
          icon: <FaBullhorn className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Mobile Optimization",
          description:
            "Ensure your website is fully optimized for mobile users, crucial for local search success.",
          icon: <FaMobileAlt className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Comprehensive Reporting",
          description:
            "Track your local SEO performance with detailed reports that highlight key metrics and growth areas.",
          icon: <FaChartLine className="text-4xl text-[#673ab7] mx-auto" />,
        },
      ],
      section3: {
        heading: "Our Local SEO Process",
        data: [
          {
            heading: "Local Keyword Research",
            icon: <FaSearch />,
            description:
              "Identify the most relevant local keywords to target, ensuring your business appears for searches in your area.",
          },
          {
            heading: "Google My Business Management",
            icon: <FaGlobe />,
            description:
              "Maximize your visibility in Google My Business, driving more local traffic to your business and increasing footfall.",
          },
          {
            heading: "Local Backlinks",
            icon: <FaLink />,
            description:
              "Build high-quality backlinks from local websites to improve your authority and search rankings.",
          },
          {
            heading: "NAP Consistency",
            icon: <FaClipboardCheck />,
            description:
              "Ensure your business name, address, and phone number (NAP) are consistent across all platforms and directories.",
          },
          {
            heading: "Mobile SEO",
            icon: <FaMobileAlt />,
            description:
              "Optimize your website for mobile users, ensuring it loads quickly and provides a seamless user experience.",
          },
        ],
      },
      section4: {
        heading: "Get Found Locally with Nx Edge Solutions",
        para: "Nx Edge Solutions’ Local SEO services are designed to help your business thrive in your local area. Whether you’re looking to attract more foot traffic, improve your online reputation, or increase your visibility in local search results, we provide the expertise you need to succeed.",
        data: [
          {
            title: "Localized Strategies",
            description:
              "Our strategies are tailored to your specific location, helping you rank higher in local search results.",
            icon: <FaMapMarkerAlt className="text-xl lg:text-2xl" />, // Example icon, you can adjust as needed.
          },
          {
            title: "Real-Time Results",
            description:
              "We provide ongoing tracking and reporting so you can see the impact of your Local SEO efforts in real time.",
            icon: <FaChartPie className="text-xl lg:text-2xl" />,
          },
          {
            title: "Dedicated Support",
            description:
              "Our team is always available to provide support and optimize your Local SEO campaigns for the best results.",
            icon: <FaHandsHelping className="text-xl lg:text-2xl" />,
          },
        ],
        img: "/images/AllServiceImages/laptop.avif",
        lastPara:
          "Get in touch with Nx Edge Solutions today to learn how we can help your business dominate local search and attract more customers from your area.",
      },
    },
    contentMarketingService: {
      section1: {
        Breadcrumb: "content-marketing",
        heading: "Content Marketing Services",
        para: "At Nx Edge Solutions, we believe that great content is the cornerstone of effective marketing. Our Content Marketing Services are designed to engage your audience, build brand authority, and drive conversions. We create tailored content strategies that align with your business goals, utilizing various formats to capture your audience’s attention.",
        img: "/images/AllServiceImages/corporate.avif",
      },
      gallerySection: {
        title: "Engaging Your Audience with Quality Content",
        subtitle: "Crafting Stories that Resonate",
        paragraphs: [
          "Our approach to content marketing focuses on delivering high-quality, relevant content that speaks to your audience’s needs and interests. From blog posts and articles to infographics and videos, we help you tell your brand story in a way that captivates and converts.",
          "By leveraging SEO best practices, we ensure that your content is discoverable and drives traffic to your website. Our goal is to create a consistent and engaging content experience that establishes your brand as an industry leader.",
        ],
        images: [
          { id: 1, src: "/images/sammBusiness.avif", alt: "PPC Campaign" },
          {
            id: 2,
            src: "/images/smallBusiness2.avif",
            alt: "Effective Ad Targeting",
          },
          {
            id: 3,
            src: "/images/smallBusiness3.avif",
            alt: "Optimized Results",
          },
          {
            id: 4,
            src: "/images/samllBusiness4.avif",
            alt: "Conversion Strategy",
          },
        ],
      },
      Section2: {
        img: "/images/serviceSide.webp", // Image remains unchanged
        heading: "Why Choose Nx Edge Solutions for Content Marketing?",
        para: "Our content marketing services are grounded in research and insights. We understand your audience, the competitive landscape, and the latest content trends. This knowledge allows us to create compelling content that not only attracts but also retains customers.",
        user: {
          heading: "Our Key Focus Areas",
          listData: [
            "Content Strategy Development",
            "Blog Writing and Management",
            "SEO and Keyword Research",
            "Social Media Content",
            "Email Marketing Campaigns",
            "Content Promotion and Distribution",
          ],
        },
        ManageOrder: {
          heading: "How We Drive Results",
          listData: [
            "Customized Content Plans",
            "Data-Driven Insights",
            "Engaging Storytelling",
            "Regular Performance Monitoring",
            "Target Audience Analysis",
            "Continuous Optimization",
          ],
        },
      },
      cards: [
        {
          title: "Content Strategy",
          description:
            "We develop a comprehensive content strategy tailored to your business goals and audience needs.",
          icon: (
            <FaClipboardList className="text-5xl text-[#673ab7] mx-auto mb-4" />
          ),
        },
        {
          title: "Blog & Article Writing",
          description:
            "Our skilled writers create informative and engaging blog posts and articles that resonate with your audience.",
          icon: <FaEdit className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "SEO Optimization",
          description:
            "We implement SEO best practices to ensure your content ranks high on search engines and reaches your target audience.",
          icon: <FaChartLine className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Visual Content Creation",
          description:
            "We create visually appealing content, including infographics and videos, to enhance engagement and shareability.",
          icon: <FaImage className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Content Distribution",
          description:
            "We promote your content across multiple platforms to maximize visibility and reach.",
          icon: <FaShareAlt className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Performance Analytics",
          description:
            "We provide detailed analytics to measure the effectiveness of your content marketing strategy.",
          icon: <FaChartBar className="text-4xl text-[#673ab7] mx-auto" />,
        },
      ],
      section3: {
        heading: "Content Types We Specialize In",
        data: [
          {
            heading: "Blog Posts",
            icon: <FaClipboardList />,
            description:
              "Engaging and informative articles that keep your audience informed and entertained.",
          },
          {
            heading: "Ebooks",
            icon: <FaBook />,
            description:
              "In-depth resources that provide valuable insights and establish your brand as an authority.",
          },
          {
            heading: "Infographics",
            icon: <FaChartPie />,
            description:
              "Visually appealing graphics that communicate complex information in an easy-to-understand format.",
          },
          {
            heading: "Videos",
            icon: <FaVideo />,
            description:
              "Dynamic video content that captures attention and drives engagement on social media and websites.",
          },
          {
            heading: "Case Studies",
            icon: <FaClipboardCheck />,
            description:
              "Real-world examples that showcase your brand's success and build trust with potential customers.",
          },
        ],
      },
      section4: {
        heading: "Transform Your Content Marketing with Nx Edge Solutions",
        para: "Our dedicated team at Nx Edge Solutions is committed to creating high-quality, impactful content that drives results. We tailor our services to meet your specific needs, ensuring that every piece of content serves a purpose and contributes to your overall marketing strategy.",
        data: [
          {
            title: "Tailored Content Solutions",
            description:
              "We create customized content solutions that align with your brand’s voice and objectives.",
            icon: <FaCogs className="text-xl lg:text-2xl" />,
          },
          {
            title: "Expert Team of Writers",
            description:
              "Our team of experienced writers knows how to craft compelling content that resonates with your audience.",
            icon: <FaUserShield className="text-xl lg:text-2xl" />,
          },
          {
            title: "Strategic Distribution",
            description:
              "We implement strategic distribution plans to ensure your content reaches the right audience at the right time.",
            icon: <FaShareAlt className="text-xl lg:text-2xl" />,
          },
          {
            title: "Ongoing Support and Optimization",
            description:
              "We offer continuous support and optimization to adapt your content strategy based on performance metrics.",
            icon: <FaHandsHelping className="text-xl lg:text-2xl" />,
          },
        ],
        img: "/images/AllServiceImages/laptop.avif",
        lastPara:
          "Contact Nx Edge Solutions today to discover how our Content Marketing Services can elevate your brand and drive meaningful results.",
      },
    },
    logoDesignService: {
      section1: {
        Breadcrumb: "logo-design-service",
        heading: "Custom Logo Design Solutions",
        para: "At Nx Edge Solutions, we specialize in creating unique and memorable logos that reflect your brand's identity. Our talented designers collaborate with you to understand your vision, ensuring your logo stands out in today's competitive market. We combine creativity and strategy to deliver designs that not only look great but also resonate with your target audience.",
        img: "/images/AllServiceImages/corporate.avif",
      },
      gallerySection: {
        title: "Crafting Logos That Tell Your Story",
        subtitle: "Make Your Brand Unforgettable",
        paragraphs: [
          "Our logo design services are tailored to your specific needs, ensuring that every aspect of your logo embodies your brand's values and mission. From concept to final design, our team works diligently to create logos that are both versatile and timeless.",
          "Whether you're a startup or an established brand, we provide professional logo design services that enhance your brand recognition and help you connect with your audience. Let us bring your brand vision to life with a logo that leaves a lasting impression.",
        ],
        images: [
          { id: 1, src: "/images/sammBusiness.avif", alt: "PPC Campaign" },
          {
            id: 2,
            src: "/images/smallBusiness2.avif",
            alt: "Effective Ad Targeting",
          },
          {
            id: 3,
            src: "/images/smallBusiness3.avif",
            alt: "Optimized Results",
          },
          {
            id: 4,
            src: "/images/samllBusiness4.avif",
            alt: "Conversion Strategy",
          },
        ],
      },
      Section2: {
        img: "/images/serviceSide.webp",
        heading: "Your Partner for Stunning Logo Designs",
        para: "At Nx Edge Solutions, we leverage creativity and industry insights to design logos that make a statement. Our comprehensive services focus on the following key areas:",
        user: {
          heading: "OUR LOGO DESIGN FOCUS AREAS",
          listData: [
            "Brand Research & Strategy",
            "Concept Development & Sketching",
            "Color Theory & Typography",
            "Logo Variations & Adaptability",
            "Client Collaboration & Feedback",
            "Final Deliverables & Guidelines",
          ],
        },
        ManageOrder: {
          heading: "Effective Logo Design Process",
          listData: [
            "Initial Consultation & Briefing",
            "Design Mockups & Revisions",
            "Final Logo Selection",
            "Deliverables in Multiple Formats",
            "Brand Identity Guidelines",
            "Post-Launch Support",
          ],
        },
      },
      cards: [
        {
          title: "In-Depth Brand Research",
          description:
            "We conduct thorough research to understand your brand and its audience, ensuring the logo aligns with your vision.",
          icon: <FaSearch className="text-5xl text-[#673ab7] mx-auto mb-4" />,
        },
        {
          title: "Creative Concept Development",
          description:
            "Our designers brainstorm and sketch unique concepts that encapsulate your brand's identity.",
          icon: <FaLightbulb className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Color & Typography Expertise",
          description:
            "We carefully select colors and fonts that enhance your brand message and appeal to your target market.",
          icon: <FaPalette className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Versatile Logo Variations",
          description:
            "We create multiple logo variations for different applications, ensuring flexibility and consistency.",
          icon: <FaFileAlt className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Comprehensive Brand Guidelines",
          description:
            "We provide detailed brand guidelines to maintain consistency in logo usage across platforms.",
          icon: <FaBook className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Post-Launch Support",
          description:
            "We offer ongoing support to help you navigate logo implementation and brand development.",
          icon: <FaHandsHelping className="text-4xl text-[#673ab7] mx-auto" />,
        },
      ],
      section3: {
        heading: "Technologies We Use for Effective Logo Design",
        data: [
          {
            heading: "Adobe Illustrator",
            icon: <FaCogs />, // Use this icon for Adobe Illustrator
            description:
              "We utilize Adobe Illustrator to create scalable and high-quality logo designs.",
          },
          {
            heading: "Sketch",
            icon: <FaEdit />, // Use this icon for Sketch
            description:
              "Our designers use Sketch for rapid prototyping and design collaboration.",
          },
          {
            heading: "Figma",
            icon: <FaGlobe />, // Use this icon for Figma
            description:
              "Figma enables real-time collaboration and feedback during the design process.",
          },
          {
            heading: "Color Palette Generators",
            icon: <FaPalette />, // Use this icon for Color Palette Generators
            description:
              "We use various tools to create harmonious color palettes for your brand.",
          },
          {
            heading: "Typography Tools",
            icon: <FaFont />, // Use this icon for Typography Tools
            description:
              "We leverage typography tools to select the perfect fonts that match your brand's identity.",
          },
          {
            heading: "Mockup Tools",
            icon: <FaImage />, // Use this icon for Mockup Tools
            description:
              "We use mockup tools to visualize how your logo will look in real-world applications.",
          },
        ],
      },
      section4: {
        heading: "Transform Your Brand with Our Expert Logo Design Services",
        para: "At Nx Edge Solutions, we understand the importance of a strong brand identity. Our logo design services are customized to meet your specific requirements, ensuring that your logo is a true representation of your brand. With a focus on creativity, strategy, and collaboration, we deliver logos that help you connect with your audience and stand out from the competition.",
        data: [
          {
            title: "Unique and Memorable Logos",
            description:
              "Our designs are tailored to be distinctive, ensuring your brand leaves a lasting impression.",
            icon: <FaStar className="text-xl lg:text-2xl" />,
          },
          {
            title: "Collaborative Design Process",
            description:
              "We involve you in every step, ensuring your vision is brought to life through our designs.",
            icon: <FaUsers className="text-xl lg:text-2xl" />,
          },
          {
            title: "High-Quality Deliverables",
            description:
              "We provide all logo files in multiple formats for both digital and print use.",
            icon: <FaFileAlt className="text-xl lg:text-2xl" />,
          },
          {
            title: "Brand Identity Support",
            description:
              "Beyond logo design, we offer support to help you build a cohesive brand identity.",
            icon: <FaCogs className="text-xl lg:text-2xl" />,
          },
        ],
        img: "/images/AllServiceImages/laptop.avif",
        lastPara:
          "Whether you're launching a new business or rebranding an existing one, Nx Edge Solutions is your go-to partner for logo design. Our creative solutions and collaborative approach ensure your logo captures the essence of your brand. Let's work together to create a logo that sets your business apart from the competition.",
      },
    },
    corporateStationeryDesign: {
      section1: {
        Breadcrumb: "corporate-stationery-design",
        heading: "Custom Corporate Stationery Design Solutions",
        para: "At Nx Edge Solutions, we specialize in crafting bespoke corporate stationery that enhances your brand's professional image. Our skilled designers work closely with you to create cohesive designs for all your stationery needs, ensuring your business stands out with style and sophistication.",
        img: "/images/AllServiceImages/corporate.avif",
      },
      gallerySection: {
        title: "Elevate Your Brand with Professional Stationery",
        subtitle: "Crafting a Lasting Impression",
        paragraphs: [
          "Our corporate stationery design services are tailored to your business identity, ensuring that every piece reflects your brand values and messaging. From business cards to letterheads and envelopes, our team meticulously designs stationery that resonates with your target audience.",
          "Whether you're a startup or an established company, we provide professional design solutions that enhance your brand presence and credibility. Let us help you make a memorable impression with stationery that speaks to your brand's essence.",
        ],
        images: [
          { id: 1, src: "/images/sammBusiness.avif", alt: "PPC Campaign" },
          {
            id: 2,
            src: "/images/smallBusiness2.avif",
            alt: "Effective Ad Targeting",
          },
          {
            id: 3,
            src: "/images/smallBusiness3.avif",
            alt: "Optimized Results",
          },
          {
            id: 4,
            src: "/images/samllBusiness4.avif",
            alt: "Conversion Strategy",
          },
        ],
      },
      Section2: {
        img: "/images/serviceSide.webp",
        heading: "Your Partner for Elegant Stationery Designs",
        para: "At Nx Edge Solutions, we combine creativity and strategy to design corporate stationery that leaves a lasting impact. Our comprehensive services focus on the following key areas:",
        user: {
          heading: "OUR STATIONERY DESIGN FOCUS AREAS",
          listData: [
            "Brand Consistency & Identity",
            "Design for Business Cards",
            "Letterhead and Envelope Design",
            "Brochures & Flyers",
            "Presentation Folders & Notepads",
            "Client Collaboration & Feedback",
          ],
        },
        ManageOrder: {
          heading: "Effective Stationery Design Process",
          listData: [
            "Initial Consultation & Briefing",
            "Design Mockups & Revisions",
            "Final Design Selection",
            "Deliverables in Multiple Formats",
            "Brand Identity Guidelines",
            "Post-Launch Support",
          ],
        },
      },
      cards: [
        {
          title: "Brand-Centric Designs",
          description:
            "We create stationery designs that align with your brand identity, enhancing recognition.",
          icon: <FaBrush className="text-5xl text-[#673ab7] mx-auto mb-4" />,
        },
        {
          title: "Creative Business Cards",
          description:
            "Our designers develop innovative business card designs that leave a memorable impression.",
          icon: <FaClipboard className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Professional Letterhead",
          description:
            "We design professional letterheads that reflect your brand's identity and professionalism.",
          icon: <FaFileAlt className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Versatile Brochure Designs",
          description:
            "We craft brochures that effectively communicate your brand message and engage your audience.",
          icon: <FaBookOpen className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Custom Presentation Folders",
          description:
            "Our custom folders help organize your documents while promoting your brand effectively.",
          icon: <FaFolderOpen className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Comprehensive Brand Guidelines",
          description:
            "We provide detailed guidelines to ensure consistency across all your stationery.",
          icon: <FaCogs className="text-4xl text-[#673ab7] mx-auto" />,
        },
      ],
      section3: {
        heading: "Technologies We Use for Effective Stationery Design",
        data: [
          {
            heading: "Adobe Illustrator",
            icon: <FaCogs />, // Use this icon for Adobe Illustrator
            description:
              "We utilize Adobe Illustrator to create high-quality and scalable stationery designs.",
          },
          {
            heading: "InDesign",
            icon: <FaEdit />, // Use this icon for InDesign
            description:
              "Our designers use InDesign for creating layouts and typesetting for print-ready materials.",
          },
          {
            heading: "Canva",
            icon: <FaGlobe />, // Use this icon for Canva
            description:
              "Canva allows us to collaborate easily on designs and create visually appealing materials.",
          },
          {
            heading: "Color Palette Generators",
            icon: <FaPalette />, // Use this icon for Color Palette Generators
            description:
              "We use tools to create harmonious color palettes that reflect your brand identity.",
          },
          {
            heading: "Typography Tools",
            icon: <FaFont />, // Use this icon for Typography Tools
            description:
              "We leverage typography tools to select the best fonts for your stationery designs.",
          },
          {
            heading: "Mockup Tools",
            icon: <FaImage />, // Use this icon for Mockup Tools
            description:
              "We use mockup tools to visualize how your stationery will look in real-world applications.",
          },
        ],
      },
      section4: {
        heading:
          "Transform Your Brand with Our Expert Stationery Design Services",
        para: "At Nx Edge Solutions, we recognize the significance of well-designed stationery in creating a strong brand identity. Our corporate stationery design services are tailored to meet your specific requirements, ensuring that your stationery effectively represents your brand. With a focus on creativity, strategy, and collaboration, we deliver designs that connect you with your audience.",
        data: [
          {
            title: "Cohesive and Professional Designs",
            description:
              "Our designs are crafted to maintain consistency and professionalism across all stationery.",
            icon: <FaClipboardList className="text-xl lg:text-2xl" />,
          },
          {
            title: "Collaborative Design Process",
            description:
              "We involve you in every step, ensuring your vision is realized through our designs.",
            icon: <FaUsers className="text-xl lg:text-2xl" />,
          },
          {
            title: "High-Quality Deliverables",
            description:
              "We provide all stationery files in multiple formats suitable for both digital and print use.",
            icon: <FaFileAlt className="text-xl lg:text-2xl" />,
          },
          {
            title: "Brand Identity Support",
            description:
              "Beyond stationery design, we offer assistance to help you build a cohesive brand identity.",
            icon: <FaCogs className="text-xl lg:text-2xl" />,
          },
        ],
        img: "/images/AllServiceImages/laptop.avif",
        lastPara:
          "Whether you're launching a new business or rebranding an existing one, Nx Edge Solutions is your trusted partner for corporate stationery design. Our creative solutions and collaborative approach ensure your stationery captures the essence of your brand. Let's work together to create stationery that enhances your professional image.",
      },
    },
    brochureDesignService: {
      section1: {
        Breadcrumb: "brochure-design-service",
        heading: "Custom Brochure Design Solutions",
        para: "At Nx Edge Solutions, we specialize in crafting visually appealing brochures that effectively communicate your brand message. Our talented designers collaborate with you to create brochures that not only look stunning but also engage your audience and drive results.",
        img: "/images/AllServiceImages/corporate.avif",
      },
      gallerySection: {
        title: "Showcasing Your Brand with Beautiful Brochures",
        subtitle: "Captivate Your Audience",
        paragraphs: [
          "Our brochure design services are tailored to meet your specific needs, ensuring that every brochure reflects your brand's values and objectives. From tri-folds to multi-page layouts, our team meticulously designs brochures that resonate with your target audience.",
          "Whether you're a startup or an established organization, we provide professional design solutions that enhance your brand's visibility and credibility. Let us help you make a lasting impression with brochures that convey your unique story.",
        ],
        images: [
          { id: 1, src: "/images/sammBusiness.avif", alt: "PPC Campaign" },
          {
            id: 2,
            src: "/images/smallBusiness2.avif",
            alt: "Effective Ad Targeting",
          },
          {
            id: 3,
            src: "/images/smallBusiness3.avif",
            alt: "Optimized Results",
          },
          {
            id: 4,
            src: "/images/samllBusiness4.avif",
            alt: "Conversion Strategy",
          },
        ],
      },
      Section2: {
        img: "/images/serviceSide.webp",
        heading: "Your Partner for Effective Brochure Designs",
        para: "At Nx Edge Solutions, we leverage creativity and strategy to design brochures that make a statement. Our comprehensive services focus on the following key areas:",
        user: {
          heading: "OUR BROCHURE DESIGN FOCUS AREAS",
          listData: [
            "Brand Messaging & Strategy",
            "Tri-fold & Bi-fold Brochures",
            "Multi-page Catalogs",
            "Digital & Print Formats",
            "Client Collaboration & Feedback",
            "Final Deliverables & Guidelines",
          ],
        },
        ManageOrder: {
          heading: "Effective Brochure Design Process",
          listData: [
            "Initial Consultation & Briefing",
            "Design Mockups & Revisions",
            "Final Design Selection",
            "Deliverables in Multiple Formats",
            "Brand Identity Guidelines",
            "Post-Launch Support",
          ],
        },
      },
      cards: [
        {
          title: "Compelling Content Creation",
          description:
            "We develop engaging content that captures your brand's message and resonates with your audience.",
          icon: <FaFileAlt className="text-5xl text-[#673ab7] mx-auto mb-4" />,
        },
        {
          title: "Eye-catching Design Layouts",
          description:
            "Our designers create layouts that are visually appealing and enhance the overall reading experience.",
          icon: <FaPalette className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Professional Print Specifications",
          description:
            "We ensure that your brochures are designed with the right specifications for high-quality printing.",
          icon: <FaPrint className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Digital Brochure Options",
          description:
            "We also create digital brochures that can be easily shared online and viewed on various devices.",
          icon: <FaTabletAlt className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Customizable Designs",
          description:
            "We provide designs that are customizable for different campaigns, audiences, and occasions.",
          icon: <FaAdjust className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Comprehensive Brand Guidelines",
          description:
            "We offer detailed guidelines to ensure consistency across all your brochure designs.",
          icon: <FaBookOpen className="text-4xl text-[#673ab7] mx-auto" />,
        },
      ],
      section3: {
        heading: "Technologies We Use for Effective Brochure Design",
        data: [
          {
            heading: "Adobe InDesign",
            icon: <FaCogs />, // Use this icon for Adobe InDesign
            description:
              "We utilize Adobe InDesign for creating professional layouts and typesetting for brochures.",
          },
          {
            heading: "Adobe Illustrator",
            icon: <FaEdit />, // Use this icon for Adobe Illustrator
            description:
              "Our designers use Adobe Illustrator for creating stunning graphics and illustrations.",
          },
          {
            heading: "Canva",
            icon: <FaGlobe />, // Use this icon for Canva
            description:
              "Canva allows us to collaborate easily on designs and create visually appealing materials.",
          },
          {
            heading: "Color Palette Generators",
            icon: <FaPalette />, // Use this icon for Color Palette Generators
            description:
              "We use tools to create harmonious color palettes that reflect your brand identity.",
          },
          {
            heading: "Typography Tools",
            icon: <FaFont />, // Use this icon for Typography Tools
            description:
              "We leverage typography tools to select the best fonts for your brochure designs.",
          },
          {
            heading: "Mockup Tools",
            icon: <FaImage />, // Use this icon for Mockup Tools
            description:
              "We use mockup tools to visualize how your brochure will look in real-world applications.",
          },
        ],
      },
      section4: {
        heading:
          "Transform Your Brand with Our Expert Brochure Design Services",
        para: "At Nx Edge Solutions, we understand the importance of well-designed brochures in creating a strong brand identity. Our brochure design services are customized to meet your specific requirements, ensuring that your brochures effectively represent your brand. With a focus on creativity, strategy, and collaboration, we deliver designs that connect you with your audience.",
        data: [
          {
            title: "Unique and Impactful Designs",
            description:
              "Our designs are tailored to be distinctive, ensuring your brand leaves a lasting impression.",
            icon: <FaStar className="text-xl lg:text-2xl" />,
          },
          {
            title: "Collaborative Design Process",
            description:
              "We involve you in every step, ensuring your vision is realized through our designs.",
            icon: <FaUsers className="text-xl lg:text-2xl" />,
          },
          {
            title: "High-Quality Deliverables",
            description:
              "We provide all brochure files in multiple formats suitable for both digital and print use.",
            icon: <FaFileAlt className="text-xl lg:text-2xl" />,
          },
          {
            title: "Brand Identity Support",
            description:
              "Beyond brochure design, we offer assistance to help you build a cohesive brand identity.",
            icon: <FaCogs className="text-xl lg:text-2xl" />,
          },
        ],
        img: "/images/AllServiceImages/laptop.avif",
        lastPara:
          "Whether you're launching a new product or rebranding an existing one, Nx Edge Solutions is your trusted partner for brochure design. Our creative solutions and collaborative approach ensure your brochures capture the essence of your brand. Let's work together to create brochures that enhance your marketing efforts.",
      },
    },
    animatedServices: {
      section1: {
        Breadcrumb: "animated-services",
        heading: "Custom Animated Services Solutions",
        para: "At Nx Edge Solutions, we specialize in creating engaging and captivating animations that elevate your brand's message. Our talented animators work closely with you to bring your ideas to life, ensuring your animations resonate with your audience and enhance your overall brand experience.",
        img: "/images/AllServiceImages/corporate.avif",
      },
      gallerySection: {
        title: "Bringing Your Ideas to Life Through Animation",
        subtitle: "Captivating Visual Storytelling",
        paragraphs: [
          "Our animated services are tailored to your specific needs, ensuring that every animation aligns with your brand values and goals. From explainer videos to promotional animations, our team crafts visuals that engage and inform your audience.",
          "Whether you're a startup or an established brand, we provide professional animation services that enhance your marketing efforts and create memorable experiences. Let us help you communicate your message effectively with animations that stand out.",
        ],
        images: [
          { id: 1, src: "/images/sammBusiness.avif", alt: "PPC Campaign" },
          {
            id: 2,
            src: "/images/smallBusiness2.avif",
            alt: "Effective Ad Targeting",
          },
          {
            id: 3,
            src: "/images/smallBusiness3.avif",
            alt: "Optimized Results",
          },
          {
            id: 4,
            src: "/images/samllBusiness4.avif",
            alt: "Conversion Strategy",
          },
        ],
      },
      Section2: {
        img: "/images/serviceSide.webp",
        heading: "Your Partner for Stunning Animated Designs",
        para: "At Nx Edge Solutions, we leverage creativity and technology to produce animations that capture attention and convey messages clearly. Our comprehensive services focus on the following key areas:",
        user: {
          heading: "OUR ANIMATED SERVICES FOCUS AREAS",
          listData: [
            "2D & 3D Animation",
            "Explainer Videos",
            "Motion Graphics",
            "Character Animation",
            "Visual Effects",
            "Client Collaboration & Feedback",
          ],
        },
        ManageOrder: {
          heading: "Effective Animation Design Process",
          listData: [
            "Initial Consultation & Briefing",
            "Storyboarding & Script Development",
            "Animation Production & Revisions",
            "Final Animation Delivery",
            "Format Optimization for Multiple Platforms",
            "Post-Launch Support",
          ],
        },
      },
      cards: [
        {
          title: "Creative Concept Development",
          description:
            "We develop unique animation concepts that align with your brand message and objectives.",
          icon: <FaFilm className="text-5xl text-[#673ab7] mx-auto mb-4" />,
        },
        {
          title: "High-Quality Animation Production",
          description:
            "Our team uses industry-leading tools to create high-quality animations that engage your audience.",
          icon: <FaStar className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Tailored Animation Solutions",
          description:
            "We tailor our animations to meet your specific needs, ensuring they resonate with your target audience.",
          icon: <FaEdit className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Visual Effects Expertise",
          description:
            "Our animations include stunning visual effects that enhance storytelling and captivate viewers.",
          icon: <FaMagic className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Comprehensive Support",
          description:
            "We provide ongoing support to help you implement and leverage your animations effectively.",
          icon: <FaHandsHelping className="text-4xl text-[#673ab7] mx-auto" />,
        },
      ],
      section3: {
        heading: "Technologies We Use for Effective Animation Design",
        data: [
          {
            heading: "Adobe After Effects",
            icon: <FaCogs />, // Use this icon for Adobe After Effects
            description:
              "We utilize Adobe After Effects for creating stunning animations and motion graphics.",
          },
          {
            heading: "Blender",
            icon: <FaCube />, // Use this icon for Blender
            description:
              "Blender enables us to create high-quality 3D animations and models.",
          },
          {
            heading: "Toon Boom Harmony",
            icon: <FaPencilAlt />, // Use this icon for Toon Boom Harmony
            description:
              "Toon Boom Harmony allows us to create beautiful 2D animations with ease.",
          },
          {
            heading: "Animation Software",
            icon: <FaVideo />, // Use this icon for Animation Software
            description:
              "We use various animation software to ensure we deliver high-quality outputs.",
          },
        ],
      },
      section4: {
        heading: "Transform Your Brand with Our Animated Services",
        para: "At Nx Edge Solutions, we understand the power of animation in storytelling. Our animated services are designed to engage your audience and effectively convey your message. With a focus on creativity, strategy, and collaboration, we deliver animations that help you connect with your audience.",
        data: [
          {
            title: "Engaging Visual Storytelling",
            description:
              "Our animations are crafted to tell your brand story in an engaging way, capturing viewer attention.",
            icon: <FaFilm className="text-xl lg:text-2xl" />,
          },
          {
            title: "Collaborative Design Process",
            description:
              "We involve you in every step, ensuring your vision is realized through our animations.",
            icon: <FaUsers className="text-xl lg:text-2xl" />,
          },
          {
            title: "High-Quality Deliverables",
            description:
              "We provide all animation files in multiple formats suitable for various platforms.",
            icon: <FaFileAlt className="text-xl lg:text-2xl" />,
          },
          {
            title: "Comprehensive Support",
            description:
              "Beyond animation, we offer support to help you effectively leverage your animated content.",
            icon: <FaCogs className="text-xl lg:text-2xl" />,
          },
        ],
        img: "/images/AllServiceImages/laptop.avif",
        lastPara:
          "Whether you're looking to create an explainer video or enhance your marketing materials with animation, Nx Edge Solutions is your trusted partner. Our creative solutions and collaborative approach ensure your animations effectively communicate your brand's message.",
      },
    },
    creativeServices: {
      section1: {
        Breadcrumb: "creative-services",
        heading: "Custom Creative Services Solutions",
        para: "At Nx Edge Solutions, we specialize in providing innovative creative services that elevate your brand's presence. Our team of creative experts collaborates with you to develop unique solutions that resonate with your audience and enhance your overall marketing strategy.",
        img: "/images/AllServiceImages/corporate.avif",
      },
      gallerySection: {
        title: "Innovative Creative Solutions for Your Brand",
        subtitle: "Bringing Your Vision to Life",
        paragraphs: [
          "Our creative services are tailored to your business needs, ensuring that every project reflects your brand's values and objectives. From graphic design to video production, we craft compelling visuals that capture attention and engage your audience.",
          "Whether you're a startup or an established enterprise, we provide professional creative solutions that enhance your brand identity and drive results. Let us help you tell your story through innovative and captivating designs.",
        ],
        images: [
          { id: 1, src: "/images/sammBusiness.avif", alt: "PPC Campaign" },
          {
            id: 2,
            src: "/images/smallBusiness2.avif",
            alt: "Effective Ad Targeting",
          },
          {
            id: 3,
            src: "/images/smallBusiness3.avif",
            alt: "Optimized Results",
          },
          {
            id: 4,
            src: "/images/samllBusiness4.avif",
            alt: "Conversion Strategy",
          },
        ],
      },
      Section2: {
        img: "/images/serviceSide.webp",
        heading: "Your Partner for Innovative Creative Designs",
        para: "At Nx Edge Solutions, we blend creativity and strategy to deliver services that leave a lasting impression. Our comprehensive services focus on the following key areas:",
        user: {
          heading: "OUR CREATIVE SERVICES FOCUS AREAS",
          listData: [
            "Graphic Design",
            "Brand Development",
            "Video Production",
            "Social Media Content",
            "Website Design",
            "Client Collaboration & Feedback",
          ],
        },
        ManageOrder: {
          heading: "Effective Creative Design Process",
          listData: [
            "Initial Consultation & Briefing",
            "Concept Development & Design",
            "Revisions & Feedback",
            "Final Design Delivery",
            "Implementation Support",
            "Post-Launch Evaluation",
          ],
        },
      },
      cards: [
        {
          title: "Innovative Graphic Design",
          description:
            "We create eye-catching designs that capture your brand's essence and engage your audience.",
          icon: (
            <FaPaintBrush className="text-5xl text-[#673ab7] mx-auto mb-4" />
          ),
        },
        {
          title: "Video Production Services",
          description:
            "Our team produces high-quality videos that tell your brand story and resonate with viewers.",
          icon: <FaVideo className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Brand Development Strategies",
          description:
            "We help you build a strong brand identity that sets you apart from the competition.",
          icon: <FaFlag className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Social Media Content Creation",
          description:
            "Our creative team develops engaging content for your social media channels to boost engagement.",
          icon: <FaComments className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Website Design & Development",
          description:
            "We design responsive and user-friendly websites that enhance your online presence.",
          icon: <FaLaptop className="text-4xl text-[#673ab7] mx-auto" />,
        },
        {
          title: "Creative Consultation Services",
          description:
            "Our experts provide tailored consultations to develop strategies that align with your business goals.",
          icon: <FaUserFriends className="text-4xl text-[#673ab7] mx-auto" />,
        },
      ],
      section3: {
        heading: "Technologies We Use for Creative Services",
        data: [
          {
            heading: "Adobe Creative Suite",
            icon: <FaCogs />, // Use this icon for Adobe Creative Suite
            description:
              "We utilize Adobe Creative Suite to deliver high-quality designs and animations.",
          },
          {
            heading: "Final Cut Pro",
            icon: <FaVideo />, // Use this icon for Final Cut Pro
            description:
              "Final Cut Pro enables us to edit videos efficiently and produce professional-grade content.",
          },
          {
            heading: "Canva",
            icon: <FaPalette />, // Use this icon for Canva
            description:
              "Canva allows us to create visually appealing designs with ease and collaboration.",
          },
          {
            heading: "Figma",
            icon: <FaFileAlt />, // Use this icon for Figma
            description:
              "Figma is our go-to tool for collaborative design and prototyping.",
          },
        ],
      },
      section4: {
        heading: "Transform Your Brand with Our Creative Services",
        para: "At Nx Edge Solutions, we understand the importance of creativity in achieving business goals. Our creative services are designed to help you connect with your audience and enhance your brand identity. With a focus on innovation, strategy, and collaboration, we deliver solutions that drive results.",
        data: [
          {
            title: "Engaging Visual Content",
            description:
              "Our designs and videos are crafted to engage and inform your audience effectively.",
            icon: <FaImage className="text-xl lg:text-2xl" />,
          },
          {
            title: "Collaborative Design Process",
            description:
              "We involve you in every step, ensuring your vision is realized through our creative outputs.",
            icon: <FaUsers className="text-xl lg:text-2xl" />,
          },
          {
            title: "High-Quality Deliverables",
            description:
              "We provide all creative files in multiple formats suitable for various platforms.",
            icon: <FaFileAlt className="text-xl lg:text-2xl" />,
          },
          {
            title: "Comprehensive Support",
            description:
              "Beyond creative services, we offer assistance to help you implement and leverage your designs effectively.",
            icon: <FaCogs className="text-xl lg:text-2xl" />,
          },
        ],
        img: "/images/AllServiceImages/laptop.avif",
        lastPara:
          "Whether you're looking to enhance your brand identity or launch a new marketing campaign, Nx Edge Solutions is your trusted partner for creative services. Our innovative solutions and collaborative approach ensure your creative projects resonate with your target audience.",
      },
    },
  };




  return (
    <>
      {/* Banner section  */}
      <section className="Banner firstSection flex flex-col lg:flex-row gap-10 items-center px-4 md:px-10 lg:px-20 lg:py-16 py-10 bg-gradient-to-b from-[#1C2F36] to-[#1C2F36] text-white lg:rounded shadow-lg">
        <div className="space-y-2 md:space-y-4 lg:space-y-8 flex-1">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-300">
            <ol className="list-reset flex">
              <li>
                <Link href="/" className="hover:text-gray-100">
                  Home
                </Link>
              </li>
              <li>
                <span className="mx-2">/</span>
              </li>
              <li className="text-white">
                {allData[particuluarService].section1.Breadcrumb}
              </li>
            </ol>
          </nav>

          {/* Heading Section */}
          <div className="space-y-2 md:space-y-4">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">
              {allData[particuluarService].section1.heading}
            </h3>
            <p className="text-base lg:text-xl leading-relaxed text-justify">
              {allData[particuluarService].section1.para}
            </p>
          </div>

          {/* Buttons Section */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-6">
            <button className="bg-[#dc3545] sm:w-fit text-white py-2 px-4 md:px-5 lg:px-8 transition duration-400 ease-in-out rounded-md text-sm sm:text-base focus:outline-none hover:bg-gray-300 hover:bg-gradient-to-r from-teal-400 to-indigo-700">
              Quick Enquiry
            </button>
            <button className="border border-white sm:w-fit text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-lg text-sm sm:text-base transition-all">
              Call us
            </button>
          </div>
        </div>

        <img
          src={allData[particuluarService].section1.img}
          className="w-full max-w-[60%] lg:max-w-[30%] rounded-full xl:max-w-[30%] shadow-lg  mt-6 lg:mt-0"
          alt="alter"
        />
      </section>

      <div className="layout grid grid-cols-1 lg:grid-cols-9 md:px-10 lg:px-20  gap-10 py-10">
        {/* left side content Section  */}
        <div className="lg:col-span-6 space-y-4 px-4">
          <div className="space-y-5 text-center md:text-start secondSection">
            <div className=" space-y-4 ">
              <h4 className="text-lg font-bold md:text-3xl ">
                {allData[particuluarService].Section2.heading}
              </h4>
              <p className="text-md md:text-lg">
                {allData[particuluarService].Section2.para}
              </p>
            </div>
            <div className="Swiper Section">
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
                    slidesPerView: 3, // For very large screens (if needed)
                    spaceBetween: 40,
                  },
                }}
                modules={[Autoplay]}
                className="mySwiper"
              >
                {allData[particuluarService].swiperdata.map((service, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="boxCard border text-center p-2 h-[25rem] rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                      // style={{ backgroundColor: service.bgColor }}
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-40 object-cover rounded-md mb-4"
                      />
                      <h3 className="text-lg font-bold text-black mb-2 text-center">
                        {service.title} okkk
                      </h3>
                      <p className="text-base text-black leading-relaxed text-center ">
                        {service.description}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          {/* Technologies we use section */}
          <section className="Technologies section3  bg-[#f2f2f2] mx-2 md:px-8 lg:px-8 rounded-lg px-5  py-5 lg:py-14">
            <h3 className="text-lg lg:text-3xl text-[#050748] font-bold">
              {allData[particuluarService].section3.heading}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 pt-5 lg:pt-10 gap-10 text-justify  text-lg text-[#6a6a8e]">
              {allData[particuluarService].section3.data.map((elm) => {
                return (
                  <>
                    <div className="Development-text">
                      <div className="flex flex-col lg:flex-row gap-3 items-center">
                        {elm.image && (
                          <img
                            src={elm.image}
                            alt="OpenCart Development"
                            className="rounded-full w-10 lg:w-12"
                          />
                        )}
                        <div className="text-[#e33f70] text-lg lg:text-2xl">
                          {elm.icon && elm.icon}{" "}
                        </div>

                        <p className=" text-lg text-nowrap lg:text-lg text-[#e33f70]">
                          {elm.heading}
                        </p>
                      </div>
                      <p className="text-base lg:text-lg">{elm.description}</p>
                    </div>
                  </>
                );
              })}
            </div>
            <p className="mt-20 hidden md:block text-lg text-[#6a6a8e]">
              We are a customer-oriented eCommerce website development company
              in India striving to go beyond your expectations of a bespoke
              online store. To get an impressive B2C or B2B eCommerce solution,
              call us today or request a free quote now.
            </p>
          </section>

          {/* cards section  */}
          <div className="grid border rounded-2xl serviceCardSection overflow-auto h-[25rem] grid-cols-1 gap-6 shadow-lg my-10">
            {allData[particuluarService].cards.map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-lg border rounded-lg border-gray-300 p-10 max-sm:p-5 text-center transition-transform transform hover:scale-105 hover:shadow-2xl animate-fadeInUp duration-500 ease-in-out"
              >
                <div className="text-[10px] md:text-3xl text-[#050748] mb-4 transition-all duration-300 hover:text-[#3b82f6]">
                  {service.icon}
                </div>
                <h3 className="md:text-2xl text-[#050748] font-bold my-5 transition-all duration-300 hover:text-[#3b82f6]">
                  {service.title}
                </h3>
                <p className="text-[#6a6a8e] text-sm md:text-base">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* get support contcat  */}
          <div className="GetSupport rounded-2xl bg-[url('/images/InnerService.avif')] bg-cover bg-center bg-no-repeat shadow-lg mx-auto px-6 ">
            <div className="bg-black/40 p-6 rounded-lg shadow-md">
              <div className="flex justify-center md:justify-end items-center">
                <div className="w-full md:w-1/2 md:ml-4">
                  <div className="flex flex-col sm:flex-row gap-5 items-center justify-between">
                    <div className="text-white text-center sm:text-left">
                      <h5 className="text-base sm:text-lg font-semibold tracking-wide">
                        GET SUPPORT FOR
                      </h5>
                      <h3 className="text-xl sm:text-2xl font-bold mt-2 sm:mt-0">
                        90 DAYS
                      </h3>
                    </div>
                    <div className="mt-4 sm:mt-0">
                      <a href="/our-portfolio">
                        <button className="bg-[#00a2ff] text-sm hover:bg-[#3b61e8] text-white font-semibold py-3 px-6 sm:px-8 rounded-md shadow-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#00a2ff]/50">
                          REQUEST A QUOTE
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="CustomCms-website rounded-lg   bg-[#f2f2f2] py-5  px-5  md:px-8 lg:px-8 lg:py-14">
            <div className="space-y-5">
              <h3 className="text-lg text-start md:text-xl lg:text-3xl text-[#050748] font-bold">
                {allData[particuluarService].section4.heading}
              </h3>
              <p className="text-base text-start lg:text-lg text-[#6a6a8e]">
                {allData[particuluarService].section4.para}
              </p>
              <div className="h-72  overflow-hidden">
                <img
                  src={allData[particuluarService].section4.img}
                  alt="Ecommerce Image"
                  className="rounded-2xl h-[100%] w-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col items-center xl:flex-row  gap-10 mt-10">
              <div className="grid md:grid-cols-2 pt-4 lg:pt-10 gap-10 text-lg text-[#6a6a8e]">
                {allData[particuluarService].section4.data.map(
                  (service, index) => (
                    <div
                      key={index}
                      className="flex flex-col  text-center items-center   gap-5"
                    >
                      <div className="rounded-full p-4 bg-white border-2 border-[#e33f70]">
                        <div className="text-[#e33f70] text-4xl">
                          {service.icon}
                        </div>
                      </div>
                      <div className="ml-2">
                        <p className="text-xl font-bold text-[#e33f70]">
                          {service.title}
                        </p>
                        <p className="mt-2 text-base md:text-lg">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
            <p className="text-base text-gray-500 text-justify md:text-start md:text-lg mt-10">
              {allData[particuluarService].section4.para}
            </p>
          </section>
        </div>

        {/* right side form and Link section */}
        <div className="lg:col-span-3">
          <div className="RightServiceCard space-y-8 sticky top-10">
            <div className="card1 bg-gray-100 px-4 border  rounded-lg py-8">
              <h5 className="text-center  font-bold text-lg md:text-2xl">Service Menu</h5>
              <ul className="flex flex-col gap-3 text-lg">
      {serviceMenu.map((elm) => (
        <li key={elm.servieName} className="border-b p-2">
          <button
            onClick={() => handleServiceClick(elm.servieName)}
            className="flex cursor-pointer items-center justify-between w-full text-left p-2 hover:bg-gray-200 transition"
          >
            {elm.servieName}
            <IoIosArrowForward
              className={`transition-transform ${
                curentService === elm.servieName ? 'rotate-90' : ''
              }`}
            />
          </button>
          {curentService === elm.servieName && (
            <ul className="flex flex-col gap-2 pl-4">
              {elm.ChilService.map((child) => (
                <li key={child.name}>
                  <Link href={child.link}>
                    <p className="text-[#0284C7] hover:underline">{child.name}</p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
            </div>
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

      <Counter/>
    </>
  );
}
