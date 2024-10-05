"use client";
import { useState } from "react";
import Link from "next/link";
import { TbBrandBinance } from "react-icons/tb";

import {
  FaHome,
  FaInfoCircle,
  FaCogs,
  FaTools,
  FaBlog,
  FaPhone,
  FaTimes,
  FaBars,
} from "react-icons/fa";
import { FaLaptopCode, FaBuilding, FaBullhorn, FaSearch } from "react-icons/fa";

import { IoIosArrowDown } from "react-icons/io";
const Navbar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState(null);

  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
  const handleDropdownToggle = (section) => {
    setOpenSection(openSection === section ? null : section);
  };



  
  return (
    <div className="bg-white shadow-md px-4 md:px-8 lg:px-20 sticky top-0 z-20">
      <div className="mx-auto py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <img
              src="/images/logo.webp"
              alt="NX Edge solutions"
              className="h-6 lg:h-12 w-auto"
            />
          </Link>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Sidebar & Overlay */}
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <div
              className="fixed lg:hidden inset-0 bg-black opacity-50 -z-30"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Side Menu */}
            <div className="fixed top-0  h-full overflow-auto  lg:hidden left-0 md:w-2/3 w-full max-w-[80%] md:max-w-xs  bg-gray-800 text-white shadow-lg z-20 transition-transform transform">
              <ul className="flex flex-col gap-3">
                {/* Logo and Close Button */}
                <li className="flex justify-between items-center bg-white shadow-lg p-2">
                  <Link className="" href="/">
                    <img
                      src="./images/logo-Photoroom.png"
                      alt="Blazity Logo"
                      className="h-6 lg:h-12 w-auto"
                    />
                  </Link>
                  <button className="text-black" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                  </button>
                </li>

              <div className="p-2 sm:p-4 flex flex-col gap-6 ">
                   {/* Menu Items */}
                   <li className="border-b pb-2 flex items-center gap-3">
                  <FaHome className="text-gray-500" />
                  <Link onClick={()=>setIsMenuOpen(false)} href="/">
                    <p className=" hover:font-bold">Home</p>
                  </Link>
                </li>

                <li className="border-b pb-2 flex items-center gap-3">
                  <FaInfoCircle className="text-gray-500" />
                  <Link href="/about">
                    <p className=" hover:font-bold">About Us</p>
                  </Link>
                </li>

                {/* Services Dropdown */}
                <li className="group border-b pb-2">
                  <div>
                    <p
                      onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
                      className=" flex justify-between items-center  cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <FaTools className="text-gray-500" />
                        <span className=" hover:font-bold"> Services</span>
                      </div>
                      <IoIosArrowDown
                        className={`font-bold text-lg transition-transform duration-300 ${
                          mobileServiceOpen && "rotate-180"
                        }`}
                      />
                    </p>
                    {mobileServiceOpen && (
                      <div className="mt-3 capitalize space-y-5 text-base">
                        {/* Website Design Development */}
                        <div className=" ">
                          <p
                            onClick={() =>
                              handleDropdownToggle("websiteDesign")
                            }
                            className="flex justify-between items-center cursor-pointer "
                          >
                            <span className="flex items-center">
                              <FaLaptopCode className="mr-2 text-gray-500" />
                              Website Design
                            </span>
                            <IoIosArrowDown
                              className={`font-bold text-lg transition-transform duration-300 ${
                                openSection === "websiteDesign"
                                  ? "rotate-180"
                                  : ""
                              }`}
                            />
                          </p>
                          {openSection === "websiteDesign" && (
                            <ul className="mt-2 ml-5 text-base  flex flex-col gap-2 border-gray-300  rounded-lg ">
                            <Link href="/AllService/EcoomWebsite" onClick={()=>setIsMenuOpen(false)}>
                            <li className=" border-b border-gray-600 pb-4 flex items-center transition duration-300">
                                E-commerce Website Design
                              </li>
                              </Link>
                              <Link href="/AllService/WebApplicationdevelopment" onClick={()=>setIsMenuOpen(false)}>
                              <li className=" border-b border-gray-600 pb-2 flex items-center transition duration-300">
                              Web-Application-development
                              </li>
                                </Link>
                                <Link href="/AllService/CMSWebDevelopment" onClick={()=>setIsMenuOpen(false)}>
                                <li className=" border-b border-gray-600 pb-2 flex items-center transition duration-300">
                                CMS Web Development
                              </li>
                              </Link>
                              <Link href="/AllService/businessdevelopement" onClick={()=>setIsMenuOpen(false)}>
                              <li className=" border-b border-gray-600 pb-2 flex items-center transition duration-300">
                              Small Business Website
                              </li>
                              </Link>
                              <Link href="/AllService/corporatewebsitedesign" onClick={()=>setIsMenuOpen(false)}>
                              <li className=" border-b border-gray-600 pb-2 flex items-center transition duration-300">
                              Coporate Website
                                </li>
                                </Link>
                              
                            </ul>
                          )}
                        </div>

                        {/*  Mobile App $ DEVELOPMENT */}
                        <div className=" ">
                          <p
                            onClick={() =>
                              handleDropdownToggle("digitalMarketing")
                            }
                            className="flex justify-between items-center cursor-pointer "
                          >
                            <span className="flex items-center">
                              <FaBullhorn className="mr-2 text-gray-500" />
                              Mobile and App Development
</span>
                            <IoIosArrowDown
                              className={`font-bold text-lg transition-transform duration-300 ${
                                openSection === "digitalMarketing"
                                  ? "rotate-180"
                                  : ""
                              }`}
                            />
                          </p>
                          {openSection === "digitalMarketing" && (
                            <ul className="mt-2 ml-5 text-base flex flex-col gap-2  border-gray-300  rounded-lg ">
                            <Link href="/AllService/androidapplicationdevelopment" onClick={()=>setIsMenuOpen(false)}>
                            <li className=" border-b border-gray-600 pb-2 flex items-center transition duration-300">
                            Android App Development
                            </li>
                            </Link>
                            <Link href="/AllService/iosApplicationDevelopment" onClick={()=>setIsMenuOpen(false)}>
                            <li className=" border-b border-gray-600 pb-2 flex items-center transition duration-300">
                            Ios App Development

                              </li>
                              </Link>

                              <Link href="/AllService/hybridapplicationdevelopment" onClick={()=>setIsMenuOpen(false)}>
                              <li className=" border-b border-gray-600 pb-2 flex items-center transition duration-300">
                              Hybrid App  Development
                              </li>
                                </Link>
                              
                              <Link href="/AllService/mobileapplicationtesting" onClick={()=>setIsMenuOpen(false)}>
                              <li className=" border-b border-gray-600 pb-2 flex items-center transition duration-300">
                              Mobile App Testing
                              </li>
                                </Link>
                              <Link href="/AllService/qualityAssurance" onClick={()=>setIsMenuOpen(false)}>
                              <li className=" border-b border-gray-600 pb-2 flex items-center transition duration-300">
                              Quailty Assurance
                              </li>
                                </Link>
                              
                            </ul>
                          )}
                        </div>

                        {/*   DIGITAL MARKETING */}
                        <div className=" ">
                          <p
                            onClick={() =>
                              handleDropdownToggle("enterpriseSolutions")
                            }
                            className="flex justify-between items-center cursor-pointer "
                          >
                            <span className="flex items-center">
                              <FaBuilding className="mr-2 text-gray-500" />
                              Digital Marketing                
                                          </span>
                            <IoIosArrowDown
                              className={`font-bold text-lg transition-transform duration-300 ${
                                openSection === "enterpriseSolutions"
                                  ? "rotate-180"
                                  : ""
                              }`}
                            />
                          </p>
                          {openSection === "enterpriseSolutions" && (
                            <ul className="mt-2 ml-5  flex flex-col gap-2   border-gray-300  rounded-lg ">
                            <Link href="/AllService/searchEngineOptimization" onClick={()=>setIsMenuOpen(false)}>
                            <li className=" border-b border-gray-600 pb-2 flex items-center transition duration-300">
                            Seo Services
                            </li>
                            </Link>
                            <Link href="/AllService/payPerClickService" onClick={()=>setIsMenuOpen(false)}>

                                <li className=" border-b border-gray-600 pb-2 flex items-center transition duration-300">
                                PPC Management
                                </li>
                              </Link>
                              
                              <Link href="/AllService/socialMediaMarketingService" onClick={()=>setIsMenuOpen(false)}>

                              <li className=" border-b border-gray-600 pb-2 flex items-center transition duration-300">
                              Social Media Marketing (SMM)

                              </li>
                              </Link>
                              <Link href="/AllService/localSeoServices" onClick={()=>setIsMenuOpen(false)}>

                              <li className=" border-b border-gray-600 pb-2 flex items-center transition duration-300">
                              Local Seo Services

                              </li>
                              </Link>
                              <Link href="/AllService/contentMarketingService" onClick={()=>setIsMenuOpen(false)}>

                              <li className=" border-b border-gray-600 pb-2 flex items-center transition duration-300">
                              Content Marketing Services

                              </li>
                              </Link>
                            </ul>
                          )}
                        </div>

                         {/* Design & Branding */}
                         <div className=" ">
                          <p
                            onClick={() =>
                              handleDropdownToggle("Design&Branding")
                            }
                            className="flex justify-between items-center cursor-pointer "
                          >
                            <span className="flex items-center">
                              <TbBrandBinance className="mr-2 text-gray-500" />
                              Design & Branding
                            </span>
                            <IoIosArrowDown
                              className={`font-bold text-lg transition-transform duration-300 ${
                                openSection === "Design&Branding"
                                  ? "rotate-180"
                                  : ""
                              }`}
                            />
                          </p>
                          {openSection === "Design&Branding" && (
                            <ul className="mt-2 ml-5 flex flex-col gap-2   border-gray-300  rounded-lg ">
                            <Link href="/AllService/logoDesignService" onClick={()=>setIsMenuOpen(false)}>
                            <li className=" border-b border-gray-600 pb-2 flex items-center transition duration-300">
                            Logo Design
                            </li>
                            </Link>
                            <Link href="/AllService/corporateStationeryDesign" onClick={()=>setIsMenuOpen(false)}>
                            <li className=" border-b border-gray-600 pb-2 flex items-center transition duration-300">
                            Coporate Identity Design

                              </li>
                              </Link>

                              <Link href="/AllService/brochureDesignService" onClick={()=>setIsMenuOpen(false)}>
                              <li className=" border-b border-gray-600 pb-2 flex items-center transition duration-300">
                              Brochure Design                              </li>
                                </Link>
                              
                              <Link href="/AllService/animatedServices" onClick={()=>setIsMenuOpen(false)}>
                              <li className=" border-b border-gray-600 pb-2 flex items-center transition duration-300">
                              Animated Vidoes                              </li>
                                </Link>
                              <Link href="/AllService/creativeServices" onClick={()=>setIsMenuOpen(false)}>
                              <li className=" border-b border-gray-600 pb-2 flex items-center transition duration-300">
                              Creative Agency
                              </li>
                                </Link>
                              
                            </ul>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </li>

                {/* Blog */}
                <li className="border-b pb-2 flex items-center gap-3 "  onClick={() => setIsMenuOpen(false)}>
                  <FaBlog className="text-gray-500" />
                  <Link href="/Blog">
                    <p className=" hover:font-bold">Blog</p>
                  </Link>
                </li>

                {/* Contact */}
                <li className="border-b  pb-2 flex items-center gap-3"  onClick={() => setIsMenuOpen(false)}>
                  <FaPhone className="text-gray-500" />
                  <Link href="/Contact">
                    <p className=" hover:font-bold">Contact Us</p>
                  </Link>
                </li>

                {/* Get a Quote Button */}
                <li className="lg:hidden">
                  <Link href="/Contact">
                    <button className="bg-sky-600 text-white px-4 py-2 rounded-full hover:bg-sky-700 w-full">
                      Get a quote
                    </button>
                  </Link>
                </li>
              </div>
              </ul>
            </div>
          </>
        )}

        {/* Navigation Links for Desktop */}
        <ul className="hidden lg:flex md:gap-12 list-none">
          <li>
            <Link href="/">
              <p className="text-black hover:text-gray-800">Home</p>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <p className="text-black hover:text-gray-800">About Us</p>
            </Link>
          </li>
          <li className="group" onMouseEnter={() => setIsDropdownVisible(true)}>
            <p className="text-black hover:text-gray-800 cursor-pointer">
              Services
            </p>
          </li>
          <li>
            <Link href="/Blog">
              <p className="text-black hover:text-gray-800">Blog</p>
            </Link>
          </li>
          <li>
            <Link href="/Contact">
              <p className="text-black hover:text-gray-800">Contact Us</p>
            </Link>
          </li>
          {isDropdownVisible && (
            <div
              className="absolute hidden lg:grid top-20 right-[85px] w-[85%] bg-white shadow-lg rounded p-4 z-10  grid-cols-4 gap-6 mx-5 justify-center"
              onMouseLeave={() => setIsDropdownVisible(false)}
            >
              <div className="flex flex-col">
                <h2 className="text-md text-nowrap flex items-center gap-2 font-semibold mb-2 text-gray-800 border-b border-gray-100 pb-2">
                  WEBSITE DESIGN  <img src="/images/code.webp" className="text-2xl max-w-5 w-full" />


                </h2>
                <Link href="/AllService/EcoomWebsite">
                <div className="dropdown-item flex items-center p-2 cursor-pointer font-medium  hover:font-extrabold rounded-lg border-b transition duration-300 mb-3">

                  <span className="text-black ">
                  E-commerce Website
                  </span>
                </div>
                </Link>
                <Link href="/AllService/WebApplicationdevelopment">
                <div className="dropdown-item flex items-center cursor-pointer p-2 font-medium  hover:font-extrabold rounded-lg border-b transition duration-300 mb-3">
                  <span className="text-black ">
                  Web-Application-development
                  </span>
                </div>
                </Link>
                <Link href="/AllService/CMSWebDevelopment">
                <div className="dropdown-item flex items-center cursor-pointer p-2 font-medium  hover:font-extrabold rounded-lg border-b transition duration-300 mb-3">
                  <span className="text-black ">CMS Web Development</span>
                </div>
                </Link>
                <Link href="/AllService/businessdevelopement">

                <div className="dropdown-item flex items-center cursor-pointer p-2 font-medium  hover:font-extrabold rounded-lg border-b transition duration-300 mb-3">
                  <span className="text-black ">
                  Small Business Website
                  </span>
                </div>
                </Link>

                <Link href="/AllService/corporatewebsitedesign">

                <div className="dropdown-item flex items-center p-2 cursor-pointer  hover:font-bold rounded-lg border-b transition duration-300 mb-3">
                  <span className="text-black ">
                  Coporate Website
                  </span>
                </div>
                </Link>
              </div>

              <div className="flex flex-col">
                <h2 className="text-md flex items-center gap-2 font-semibold mb-2 text-gray-800 border-b border-gray-100 pb-2">
                 Mobile App $ DEVELOPMENT <img src="/images/code.webp" className="text-2xl max-w-5 w-full" />
                </h2>
                <Link  href="/AllService/androidapplicationdevelopment">

                <div className="dropdown-item flex items-center p-2 cursor-pointer font-medium  hover:font-extrabold rounded-lg border-b transition duration-300 mb-3">

                  <span className="text-black ">
                   Android App Development
                  </span>
                </div>
                </Link>
                <Link href="/AllService/iosApplicationDevelopment">
                <div className="dropdown-item flex items-center cursor-pointer p-2 font-medium  hover:font-extrabold rounded-lg border-b transition duration-300 mb-3">
                  <span className="text-black ">
                 Ios App Development
                  </span>
                </div>
                </Link>
                <Link href="/AllService/hybridapplicationdevelopment">
                <div className="dropdown-item flex items-center cursor-pointer p-2 font-medium  hover:font-extrabold rounded-lg border-b transition duration-300 mb-3">
                  <span className="text-black ">Hybrid App  Development</span>
                </div>
                </Link>
                <Link href="/AllService/mobileapplicationtesting">

                <div className="dropdown-item flex items-center cursor-pointer p-2 font-medium  hover:font-extrabold rounded-lg border-b transition duration-300 mb-3">
                  <span className="text-black ">
                  Mobile App Testing
                  </span>
                </div>
                </Link>

                <Link href="/AllService/qualityAssurance">
                <div className="dropdown-item flex items-center p-2 cursor-pointer  hover:font-bold rounded-lg border-b transition duration-300 mb-3">
                  <span className="text-black ">
                 Quailty Assurance
                  </span>
                </div>
                </Link>
              </div>

              <div className="flex flex-col">
                <h2 className="text-md flex items-center gap-4 font-semibold mb-2 text-gray-800 border-b border-gray-100 pb-2">
                  DIGITAL MARKETING
                  <img src="/images/marketing.webp" alt=""  className="max-w-6 w-full"/>
                </h2>
                <Link href="/AllService/searchEngineOptimization">
                <div className="dropdown-item flex items-center p-2 font-medium  hover:font-extrabold rounded-lg border-b transition duration-300 mb-3">
                  <span className="text-black ">
                   Seo Services
                  </span>
                </div>
                </Link>
                <Link href="/AllService/payPerClickService">
                <div className="dropdown-item flex items-center p-2 font-medium  hover:font-extrabold rounded-lg border-b transition duration-300 mb-3">
                  <span className="text-black ">
                   PPC Management
                  </span>
                </div>
                </Link>
               
                <Link href="/AllService/socialMediaMarketingService">
               <div className="dropdown-item flex items-center p-2 font-medium  hover:font-extrabold rounded-lg border-b transition duration-300 mb-3">
                  <span className="text-black ">
                    Social Media Marketing (SMM)
                  </span>
                </div>
               </Link>
               <Link href="/AllService/localSeoServices">
               <div className="dropdown-item flex items-center p-2 font-medium  hover:font-extrabold rounded-lg border-b transition duration-300 mb-3">
                  <span className="text-black ">
                    Local Seo Services
                  </span>
                </div>
                </Link>
                <Link href="/AllService/contentMarketingService">
               <div className="dropdown-item flex items-center p-2 font-medium  hover:font-extrabold rounded-lg border-b transition duration-300 mb-3">
                  <span className="text-black ">
                   Content Marketing Services
                  </span>
                </div>
                </Link>
              </div>

              <div className="flex flex-col">
                <h2 className="text-md flex items-center gap-2 font-semibold mb-2 text-gray-800 border-b border-gray-100 pb-2">
                 Design & Branding <img src="/images/cms.webp" className="text-2xl max-w-5 w-full" />
                </h2>

                      
                <Link href="/AllService/logoDesignService">
                <div className="dropdown-item flex items-center p-2  hover:font-bold rounded-lg border-b transition duration-300 mb-3">
                  <span className="text-black ">
                   Logo Design
                  </span>
                </div>
                </Link>
              
                <Link href="/AllService/corporateStationeryDesign">
               <div className="dropdown-item flex items-center p-2 font-medium  hover:font-extrabold rounded-lg border-b transition duration-300 mb-3">
                  <span className="text-black ">
                    Coporate Identity Design
                  </span>
                </div>
               </Link>
               <Link href="/AllService/brochureDesignService">
               <div className="dropdown-item flex items-center p-2 font-medium  hover:font-extrabold rounded-lg border-b transition duration-300 mb-3">
                  <span className="text-black ">Brochure Design</span>
                </div>
              </Link>
              <Link href="/AllService/animatedServices">
              <div className="dropdown-item flex items-center p-2 font-medium  hover:font-extrabold rounded-lg border-b transition duration-300 mb-3">
                  <span className="text-black ">Animated Vidoes</span>
                </div>
              </Link>
              <Link href="/AllService/creativeServices">
              <div className="dropdown-item flex items-center p-2 font-medium  hover:font-extrabold rounded-lg border-b transition duration-300 mb-3">
                  <span className="text-black ">Creative Agency</span>
                </div>
              </Link>
              </div>
            </div>
          )}
        </ul>

        {/* Get a Quote Button */}
        <div className="hidden lg:block">
          <Link href="/Contact">
            <button className="bg-sky-600 text-white px-4 py-2 rounded-full hover:bg-sky-700">
              Get a quote
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
